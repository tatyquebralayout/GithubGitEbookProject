import React from 'react';
import GitLogoUrl from './Git-Icon-White.svg'; // Importando o SVG como URL

interface GitOfficialLogoProps {
  size?: number | string;
  className?: string;
  alt?: string;
}

const GitOfficialLogo: React.FC<GitOfficialLogoProps> = ({ size = 24, className, alt = 'Git Logo' }) => {
  const style: React.CSSProperties = {
    width: size,
    height: size,
  };

  return (
    <img
      src={GitLogoUrl}
      alt={alt}
      style={style}
      className={className}
    />
  );
};

export default GitOfficialLogo;
