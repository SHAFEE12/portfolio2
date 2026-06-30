// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import PortfolioCard from './PortfolioCard.jsx';
// import { cardEntrance, defaultTransition } from '../../utils/motion.js';
// import { useMediaQuery } from '../../hooks/useMediaQuery.js';
// import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';

// export default function StickyCardWrapper({ project, index, total }) {
//   const cardRef = useRef(null);
//   const isMobile = useMediaQuery('(max-width: 809px)');
//   const prefersReducedMotion = useReducedMotionPreference();
//   const shouldFlatten = isMobile || prefersReducedMotion;
//   const spacer = 50;
//   const finalScale = 0.85 + index * 0.05;

//   const { scrollYProgress } = useScroll({
//     target: cardRef,
//     offset: [
//       `start center-=${index * spacer}`,
//       'end center'
//     ]
//   });

//   const scale = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [1, shouldFlatten ? 1 : finalScale]
//   );

//   const y = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, shouldFlatten ? 0 : -32]
//   );

//   const opacity = useTransform(
//     scrollYProgress,
//     [0, 0.75, 1],
//     [1, 1, shouldFlatten ? 1 : 0.96]
//   );

//   const entranceVariants = shouldFlatten
//     ? {
//         hidden: { opacity: 0, y: 50, scale: 0.98 },
//         visible: { opacity: 1, y: 0, scale: 1, transition: defaultTransition }
//       }
//     : cardEntrance;

//   return (
//     <div className="sticky-card-wrapper">
//       <motion.div
//         ref={cardRef}
//         className="sticky-card-inner"
//         style={{
//           scale,
//           y,
//           opacity,
//           zIndex: index + 1,
//           top: 130 + index * 18,
//           transformOrigin: 'center top'
//         }}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.25 }}
//         variants={entranceVariants}
//       >
//         <PortfolioCard project={project} />
//       </motion.div>
//     </div>
//   );
// }


// import PortfolioCard from './PortfolioCard.jsx';

// export default function StickyCardWrapper({
//   project,
//   index
// }) {
//   return (
//     <div className="sticky-card-wrapper">
//       <div
//         className="sticky-card-inner stacking__card"
//         style={{
//           zIndex: index + 1
//         }}
//       >
//         <PortfolioCard project={project} />
//       </div>
//     </div>
//   );
// }



import PortfolioCard from "./PortfolioCard";

export default function StickyCardWrapper({
  project,
  index,
}) {
  return (
    <div className="stacking__card">
      <div className="stacking__card-inner">
        <PortfolioCard
          project={project}
          style={{
            "--index": index,
          }}
        />
      </div>
    </div>
  );
}