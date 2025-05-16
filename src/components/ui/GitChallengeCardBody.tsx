import React from 'react';

interface GitChallengeCardBodyProps {
  children: React.ReactNode;
  className?: string;
}

const GitChallengeCardBody: React.FC<GitChallengeCardBodyProps> = ({
  children,
  className = '',
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export default GitChallengeCardBody;
