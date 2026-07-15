import attendanceImg from "../assets/attendance.png";
import NGO from "../assets/ummeed_foundation.png";
import netflix from "../assets/netflix.png";



export const projects = [
  {
    id: 'attendance-management-system',
    title: 'Attendance Management System',
    category: 'Full Stack Web Application',
    description:
      'An online attendance management system that digitizes classroom attendance, simplifies attendance tracking for faculty, and provides students with real-time attendance reports and analytics.',
    stack: 'Firebase, JavaScript, CSS',
    image: attendanceImg,
    alt: 'attendance-management-system',
    link:'https://gec-sheikhpura.netlify.app/',
    githubUrl: 'https://github.com/SHAFEE12/attendance-management-system'
  },
  {
    id: 'ummeed-foundation-of-india',
    title: 'Ummeed Foundation of India',
    category: 'NGO Website',
    description:
      'A modern website developed for an educational NGO focused on empowering students through learning opportunities, career guidance, and skill development initiatives.',
    stack: ' JavaScript, CSS',
    image:NGO 
    ,
    alt: 'ummeed-foundation-of-india',
     link:'https://www.ummeedfoundationofindia.org/',
    githubUrl: 'https://github.com/SHAFEE12/ummeed-foundation-of-india'
  },
  {
    id: 'netflix ',
    title: 'Netflix ui clone',
    category: 'Frontend Development',
    description:
      'A responsive Netflix-inspired UI built to replicate the look and feel of the original platform',
    stack: 'HTML, CSS, JavaScript',
    image:netflix
    ,
    alt: 'Netflix ui clone',
       link:'https://nextflixindia.netlify.app/',
    githubUrl: 'https://github.com/SHAFEE12/netflix-'
  },
  // {
  //   id: 'certificate-gallery',
  //   title: 'Certificate Gallery',
  //   category: 'Portfolio Project',
  //   description:
  //     'A premium glassmorphism-inspired certificate showcase designed to organize and display achievements with elegant animations and responsive layouts.',
  //   stack: 'React, CSS, Framer Motion',
  //   image:
  //     'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=85',
  //   alt: 'Certificates and learning materials arranged on a desk',
  //   githubUrl: 'https://github.com/your-username/certificate-gallery'
  // }
];
