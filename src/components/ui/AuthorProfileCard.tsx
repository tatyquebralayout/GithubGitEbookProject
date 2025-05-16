import React from 'react';
import { AuthorProfile } from '../../types/author.types';

interface AuthorProfileCardProps {
  author: AuthorProfile;
  selected?: boolean;
  onClick?: (author: AuthorProfile) => void;
}

const AuthorProfileCard: React.FC<AuthorProfileCardProps> = ({ author, selected, onClick }) => {
  return (
    <div
      className={`cursor-pointer rounded-lg border-2 p-4 transition-all hover:shadow-lg ${
        selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
      }`}
      onClick={() => onClick?.(author)}
    >
      <div className="flex items-center space-x-4">
        <img
          src={author.src}
          alt={author.alt}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium text-gray-900">{author.alt.split(' - ')[0]}</h3>
          <p className="text-sm text-gray-500">{author.alt.split(' - ')[1]}</p>
        </div>
      </div>
      {author.miniBio && (
        <p className="mt-3 text-sm text-gray-600">{author.miniBio}</p>
      )}
    </div>
  );
};

export default AuthorProfileCard; 