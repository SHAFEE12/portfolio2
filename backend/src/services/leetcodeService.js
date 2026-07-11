// import axios from "axios";

// const GRAPHQL_URL = "https://leetcode.com/graphql";

// // const query = `
// // query getUserProfile($username: String!) {
// //   matchedUser(username: $username) {
// //     username

// //     profile {
// //       ranking
// //     }

// //     submitStatsGlobal {
// //       acSubmissionNum {
// //         difficulty
// //         count
// //       }
// //     }
// //   }
// // }
// // `;




// const query = `
// query getUserProfile($username: String!) {
//   matchedUser(username: $username) {
//     username

//     profile {
//       ranking
//     }

//     submitStatsGlobal {
//       acSubmissionNum {
//         difficulty
//         count
//       }
//     }
//   }

//   recentAcSubmissionList(username: $username) {
//     title
//     titleSlug
//     timestamp
//   }
// }
// `;

// class LeetcodeService {
//   async getProfile() {
//     try {
//       // Read username from .env
//       const username = process.env.LEETCODE_USERNAME;

//       console.log("================================");
//       console.log("LeetCode Username:", username);
//       console.log("================================");

//       const body = {
//         query,
//         variables: {
//           username,
//         },
//       };

//       console.log("Request Body:");
//       console.log(JSON.stringify(body, null, 2));

//       const response = await axios.post(
//         GRAPHQL_URL,
//         body,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           timeout: 10000,
//         }
//       );

//       console.log("Response:");
//       console.log(JSON.stringify(response.data, null, 2));

//       if (response.data.errors) {
//         throw new Error(JSON.stringify(response.data.errors));
//       }

//       const user = response.data.data?.matchedUser;

//       if (!user) {
//         throw new Error("User not found.");
//       }

//       const stats = user.submitStatsGlobal.acSubmissionNum;

//       return {
//         // username: user.username,

//         // totalSolved:
//         //   stats.find((item) => item.difficulty === "All")?.count || 0,

//         // easy:
//         //   stats.find((item) => item.difficulty === "Easy")?.count || 0,

//         // medium:
//         //   stats.find((item) => item.difficulty === "Medium")?.count || 0,

//         // hard:
//         //   stats.find((item) => item.difficulty === "Hard")?.count || 0,

//         // ranking: user.profile.ranking,

//         // profile: `https://leetcode.com/u/${user.username}/`,



        
//       };




//     } catch (error) {
//       console.log("========== ERROR ==========");

//       if (error.response) {
//         console.log("Status:", error.response.status);
//         console.log(
//           JSON.stringify(error.response.data, null, 2)
//         );
//       } else {
//         console.log(error.message);
//       }

//       console.log("===========================");

//       throw error;
//     }
//   }
// }

// export default new LeetcodeService();












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

      const today = new Date();

      const isSameDay = (timestamp) => {
        const date = new Date(Number(timestamp) * 1000);

        return (
          date.getFullYear() === today.getFullYear() &&
          date.getMonth() === today.getMonth() &&
          date.getDate() === today.getDate()
        );
      };

      const todayQuestions = recent.filter((item) =>
        isSameDay(item.timestamp)
      );

      const recentSolved = recent.slice(0, 5).map((item) => {
        const solvedDate = new Date(
          Number(item.timestamp) * 1000
        );

        const diffDays = Math.floor(
          (today - solvedDate) /
            (1000 * 60 * 60 * 24)
        );

        let relativeTime = "";

        if (diffDays === 0)
          relativeTime = "Today";
        else if (diffDays === 1)
          relativeTime = "Yesterday";
        else
          relativeTime = `${diffDays} days ago`;

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












