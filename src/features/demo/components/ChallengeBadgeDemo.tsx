import React from 'react';
import { Link } from 'react-router-dom';

const ChallengeBadgeDemo: React.FC<{ type: string; text: string }> = ({ type, text }) => {
  const baseClasses = "gh-badge transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer";
  const colorClasses = {
    beginner: "bg-github-success-emphasis text-white",
    intermediate: "bg-github-attention-fg text-white",
    github: "bg-github-accent-fg text-white",
    pro: "bg-github-done-fg text-white"
  };

  return (
    <Link
      to={`/challenges/${type}`}
      className={`${baseClasses} ${colorClasses[type as keyof typeof colorClasses]}`}
    >
      {text}
    </Link>
  );
};

export default ChallengeBadgeDemo; 