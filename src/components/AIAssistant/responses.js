// export const RESPONSES = {
//   'tell me about your work': 'I create polished digital experiences with thoughtful design and modern web technologies.',
//   'show me your projects': 'You can explore my featured work in the portfolio section, where each project highlights the approach and outcome.',
//   'how can i contact you': 'You can reach out through the contact details in the footer or the available contact links on the page.'
// };

// export const FALLBACK_RESPONSE = 'I can help with project details, experience, or getting in touch.';


export const responses = {
  about: {
    keywords: [
      "about",
      "yourself",
      "who are you",
      "introduce",
      "introduction",
      "bio",
    ],
    answer: `👋 Hi, I'm Shafee Ahmad.

I'm a Full Stack MERN Developer and Computer Science student.

I enjoy building modern web applications with React, Node.js, Express, MongoDB and creating beautiful interactive user interfaces.

I'm passionate about learning new technologies, solving DSA problems, and building projects that solve real-world problems.`,
  },

  skills: {
    keywords: [
      "skill",
      "skills",
      "tech",
      "technology",
      "stack",
      "frontend",
      "backend",
    ],
    answer: `💻 My Technical Skills

Frontend
• React
• JavaScript
• Tailwind CSS
• HTML5
• CSS3
• Framer Motion
• GSAP

Backend
• Node.js
• Express.js

Database
• MongoDB
• Firebase

Languages
• C++
• JavaScript

Tools
• Git
• GitHub
• VS Code
• Postman`,
  },

  projects: {
    keywords: [
      "project",
      "projects",
      "work",
      "portfolio",
      "website",
      "build",
      "built",
    ],
    answer: `🚀 Featured Projects

• ZeroTrace
Secure Data Wiping Platform

• Ummeed Foundation
NGO Website

• Attendance Management System

• Animated Portfolio

• E-commerce Website

Visit the Projects section to explore all of them.`,
  },

  education: {
    keywords: [
      "education",
      "college",
      "degree",
      "study",
      "student",
      "university",
    ],
    answer: `🎓 Education

Government Engineering College Sheikhpura

Bachelor of Technology
Computer Science & Engineering

Expected Graduation
2027`,
  },

  experience: {
    keywords: [
      "experience",
      "internship",
      "job",
      "work experience",
      "career",
    ],
    answer: `💼 Experience

• MERN Stack Development

• Frontend Development

• Responsive Web Design

• Firebase Integration

• REST API Development

Currently focused on building scalable full-stack applications.`,
  },

  contact: {
    keywords: [
      "contact",
      "email",
      "github",
      "linkedin",
      "hire",
      "reach",
    ],
    answer: `📬 Contact Me

Email
your@email.com

GitHub
github.com/SHAFEE12

LinkedIn
linkedin.com/in/yourprofile

Feel free to connect with me!`,

  },


   gf: {
    keywords: ["gf"],
    answer: "❤️ Access Granted...",
  },

  resume: {
    keywords: [
      "resume",
      "cv",
      "download",
    ],
    answer: `📄

You can download my Resume by clicking the Resume button available in the navigation bar.`,
  },
};

export const defaultResponse = `🤖 Sorry, I couldn't understand that.

Try asking me about:

• About
• Skills
• Projects
• Experience
• Education
• Resume
• Contact`;