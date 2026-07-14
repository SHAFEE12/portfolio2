import oracle from "../assets/OracleCertificate.jpg";
import javaCertificate from "../assets/javaTraining.jpg";
import internPE from "../assets/InternPE.jpg";

export const profile = {
  name: 'Shafee Ahmad',
  role: 'Full Stack Stack Developer | Problem Solver (DSA) ',
  // location: 'Bihar, India',
  email: 'shafeeahmad322@gmail.com',
  github: 'https://github.com/shafee12',
  linkedin: 'https://linkedin.com/in/yourprofile',
  about: [
    "I'm Shafee Ahmad, a Computer Science Engineering student passionate about building modern web applications and solving problems through Data Structures and Algorithms.",
    'My focus is on full-stack web development using the MERN stack, creating responsive user experiences, and developing real-world solutions that make an impact. I enjoy turning ideas into functional products while continuously improving my problem-solving and software engineering skills.',
    'Currently, I am working on personal projects, strengthening my DSA foundation, and contributing to educational and social initiatives through Ummeed Foundation of India.'
  ],
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    institute: 'Government Engineering College, Sheikhpura',
    years: '2023 - 2027'
  },
  skills: [
    {
      group: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite']
    },
    {
      group: 'Backend',
      items: ['Node.js', 'Express.js']
    },
    {
      group: 'Database',
      items: ['MongoDB', 'Firebase']
    },
    {
      group: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Netlify', 'Vercel']
    }
  ],
  certificates: [
    {
      title: 'Oracle Cloud Infrastructure AI Foundations Associate',
      description: 'Demo certificate entry for an AI foundations credential. Replace this text, image, and Drive link with the real certificate later.',
      image: oracle,
      alt: 'Certificate document on a desk',
      driveUrl: 'https://drive.google.com/file/d/demo-certificate-one/view'
    },
    {
      title: 'IBM SkillsBuild AI Internship',
      description: 'Demo certificate entry for internship completion and learning achievements. Replace this with your real certificate details.',
      image: javaCertificate,
      alt: 'Achievement certificate and notebook',
      driveUrl: 'https://drive.google.com/file/d/demo-certificate-two/view'
    },
    {
      title: 'UI/UX Design Certificate',
      description: 'Demo certificate entry for a user experience design course. Replace this image and text later.',
      image: internPE,
      alt: 'Design certificate and tablet',
      driveUrl: 'https://drive.google.com/file/d/demo-certificate-three/view'
    },
    // {
    //   title: 'Full Stack Development Award',
    //   description: 'Demo certificate entry for a full-stack development achievement. Replace this with your real credential later.',
    //   image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    //   alt: 'Award certificate on a desk',
    //   driveUrl: 'https://drive.google.com/file/d/demo-certificate-four/view'
    // }
  ],
  goals: [
    'Become a skilled MERN Stack Developer',
    'Master Data Structures and Algorithms',
    'Secure a high-quality software engineering role',
    'Build impactful products that solve real-world problems'
  ]
};
