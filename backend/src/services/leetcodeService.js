import axios from "axios";

const GRAPHQL_URL = "https://leetcode.com/graphql";

const query = `
query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    username

    profile {
      ranking
    }

    submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
      }
    }
  }

  recentAcSubmissionList(username: $username) {
    title
    titleSlug
    timestamp
  }
}
`;

class LeetcodeService {





async getProfile() {
  try {
    const username = process.env.LEETCODE_USERNAME;

    const response = await axios.post(
      GRAPHQL_URL,
      {
        query,
        variables: {
          username,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    if (response.data.errors) {
      throw new Error(JSON.stringify(response.data.errors));
    }

    const user = response.data.data?.matchedUser;

    if (!user) {
      throw new Error("User not found.");
    }

    const stats = user.submitStatsGlobal.acSubmissionNum;

    const recent =
      response.data.data.recentAcSubmissionList || [];

    // ============================================
    // IST Date Formatter
    // ============================================

    const formatter = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const today = new Date();

    const todayIST = formatter.format(today);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const yesterdayIST = formatter.format(yesterday);

    // ============================================
    // Solved Today
    // ============================================

    const todayQuestions = recent.filter((item) => {
      const submissionIST = formatter.format(
        new Date(Number(item.timestamp) * 1000)
      );

      return submissionIST === todayIST;
    });

    // ============================================
    // Recent Solved
    // ============================================

    const recentSolved = recent.slice(0, 5).map((item) => {
      const submissionDate = new Date(
        Number(item.timestamp) * 1000
      );

      const submissionIST = formatter.format(submissionDate);

      let relativeTime = submissionIST;

      if (submissionIST === todayIST) {
        relativeTime = "Today";
      } else if (submissionIST === yesterdayIST) {
        relativeTime = "Yesterday";
      }

      return {
        title: item.title,
        titleSlug: item.titleSlug,
        timestamp: item.timestamp,
        relativeTime,
      };
    });

    return {
      username: user.username,

      totalSolved:
        stats.find(
          (item) => item.difficulty === "All"
        )?.count || 0,

      easy:
        stats.find(
          (item) => item.difficulty === "Easy"
        )?.count || 0,

      medium:
        stats.find(
          (item) => item.difficulty === "Medium"
        )?.count || 0,

      hard:
        stats.find(
          (item) => item.difficulty === "Hard"
        )?.count || 0,

      ranking: user.profile.ranking,

      profile: `https://leetcode.com/u/${user.username}/`,

      today: {
        solved: todayQuestions.length > 0,
        count: todayQuestions.length,
        questions: todayQuestions,
      },

      recentSolved,
    };
  } catch (error) {
    console.log("========== ERROR ==========");

    if (error.response) {
      console.log(
        JSON.stringify(error.response.data, null, 2)
      );
    } else {
      console.log(error.message);
    }

    console.log("===========================");

    throw error;
  }
}

}

export default new LeetcodeService();












