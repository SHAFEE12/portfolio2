import React, { Suspense, useEffect, useState } from 'react';
import AIAssistant from '../AIAssistant';
import { profile } from '../../data/profile.js';

const Robot = React.lazy(() => import('./Robot.jsx'));

const resumeUrl = 'https://drive.google.com/file/d/18nMOv8Rd8j-XRghDTa5eWjQa_AUjBhUi/view?usp=sharing';

const links = [
  {
    label: 'Resume',
    href: resumeUrl,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 2.75A2.75 2.75 0 0 1 8.75 0h5.7c.73 0 1.43.29 1.94.8l3.81 3.81c.51.52.8 1.21.8 1.94v14.7A2.75 2.75 0 0 1 18.25 24H8.75A2.75 2.75 0 0 1 6 21.25V2.75Z" fill="currentColor" opacity="0.12" />
        <path d="M14 1v4.25A2.75 2.75 0 0 0 16.75 8H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M8.75 1h5.7c.73 0 1.43.29 1.94.8l3.81 3.81c.51.52.8 1.21.8 1.94v13.7A1.75 1.75 0 0 1 19.25 23H8.75A1.75 1.75 0 0 1 7 21.25V2.75A1.75 1.75 0 0 1 8.75 1Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M10 12h8M10 15.5h8M10 19h5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    )
  },
  {
    label: 'GitHub',
    href: profile.github,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.24 3.35.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.17.92-.26 1.9-.38 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.48 3.16-1.17 3.16-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.41v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.33 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.55V8.98h3.56v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    )
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3.75 5.75h16.5v12.5H3.75V5.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
        <path d="m4.5 6.5 7.5 6 7.5-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
      </svg>
    )
  }
];

export default function ProfileIconRail() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isRailOpen, setIsRailOpen] = useState(true);
  const [showSpline, setShowSpline] = useState(false);
  const [robotLoaded, setRobotLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav className="profile-icon-rail" aria-label="Profile links">
        <button
          type="button"
          className={`profile-icon-toggle ${isRailOpen ? 'open' : 'closed'}`}
          aria-label={isRailOpen ? 'Hide profile links' : 'Show profile links'}
          onClick={() => setIsRailOpen((prev) => !prev)}
        >
          {isRailOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6 15 12 9 18" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          )}
        </button>

        <div className={`profile-icon-links ${isRailOpen ? 'visible' : 'hidden'}`}>
          {links.map((link) => (
            <a
              key={link.label}
              className={link.className}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </nav>

      <button
        type="button"
        className="ai-assistant-trigger"
        onClick={() => setIsChatOpen(true)}
        aria-label="Open AI assistant"
      >
        <div className="robot-frame-wrapper">
          <Suspense fallback={<div className="robot-loading" />}>
            {showSpline ? (
              <Robot
                hidden={!robotLoaded}
                onLoad={() => setRobotLoaded(true)}
              />
            ) : (
              <div className="robot-loading" />
            )}
          </Suspense>
          {showSpline && !robotLoaded ? (
            <div className="robot-loading overlay" />
          ) : null}
        </div>
        {showSpline ? (
          <div className="robot-label">Shafee.AI</div>
        ) : null}
      </button>

      {isChatOpen ? (
        <div style={{ position: 'fixed', right: '1.25rem', bottom: '7.5rem', zIndex: 1201, width: 'min(92vw, 360px)' }}>
          <AIAssistant open={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
      ) : null}
    </>
  );
}