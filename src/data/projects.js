import attendanceImg from "../assets/attendance.png";
import NGO from "../assets/ummeed_foundation.png";
import netflix from "../assets/netflix.png";



export const projects = [
  {
    id: 'attendance-management-system',
    title: 'Attendance Management System',
    category: 'Full Stack Web Application',
    description:
      'A college attendance tracking platform that allows students to monitor subject-wise attendance, view attendance percentages, and receive alerts when attendance falls below required thresholds.',
    stack: 'React, Firebase, JavaScript, CSS',
    image: attendanceImg,
    alt: 'Student dashboard workspace with laptop and study notes',
    githubUrl: 'https://gec-sheikhpura.netlify.app/'
  },
  {
    id: 'ummeed-foundation-of-india',
    title: 'Ummeed Foundation of India',
    category: 'NGO Website',
    description:
      'A modern website developed for an educational NGO focused on empowering students through learning opportunities, career guidance, and skill development initiatives.',
    stack: 'React, Vite, JavaScript, CSS',
    image:NGO 
    ,
    alt: 'Students collaborating around a table',
    githubUrl: 'https://www.ummeedfoundationofindia.org/'
  },
  {
    id: 'netflix ',
    title: 'Netflix ui clone',
    category: 'Frontend Development',
    description:
      'A responsive shopping experience featuring product listings, modern UI components, and a clean user experience built using modern frontend development practices.',
    stack: 'HTML, CSS, JavaScript',
    image:netflix
    ,
    alt: 'Modern online shopping interface shown on a laptop',
    githubUrl: 'https://nextflixindia.netlify.app/'
  },
  {
    id: 'certificate-gallery',
    title: 'Certificate Gallery',
    category: 'Portfolio Project',
    description:
      'A premium glassmorphism-inspired certificate showcase designed to organize and display achievements with elegant animations and responsive layouts.',
    stack: 'React, CSS, Framer Motion',
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=85',
    alt: 'Certificates and learning materials arranged on a desk',
    githubUrl: 'https://github.com/your-username/certificate-gallery'
  }
];
