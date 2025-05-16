import React from 'react';

interface GitChallengeCardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const GitChallengeCardHeader: React.FC<GitChallengeCardHeaderProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`flex items-center border-b border-gray-200 bg-gray-50 p-4 ${className}`}>
      {children}
    </div>
  );
};

export default GitChallengeCardHeader;
