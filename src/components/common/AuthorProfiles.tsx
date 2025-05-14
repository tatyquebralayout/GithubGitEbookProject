import React from 'react';

interface AuthorProfile {
  src: string;
  alt: string;
}

interface AuthorProfilesProps {
  authors: AuthorProfile[];
}

const AuthorProfiles: React.FC<AuthorProfilesProps> = ({ authors }) => {
  if (!authors || authors.length === 0) {
    // It might be good to return null or a placeholder if no authors are provided
    return null; 
  }

  return (
    <div className="flex -space-x-2">
      {authors.map((author, index) => (
        <img 
          key={index} // Using index as key is acceptable here if authors list doesn't change order/items
          src={author.src} 
          alt={author.alt} 
          className="w-8 h-8 rounded-full border-2 border-white" 
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default AuthorProfiles; 