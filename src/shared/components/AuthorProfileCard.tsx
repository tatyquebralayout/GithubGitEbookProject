import React from 'react';
import { AuthorProfile } from '../../types/author/author.types';

interface AuthorProfileCardProps {
  author: AuthorProfile;
  selected?: boolean;
  onClick?: (author: AuthorProfile) => void;
  className?: string;
}

const AuthorProfileCard: React.FC<AuthorProfileCardProps> = ({
  author,
  selected = false,
  onClick,
  className = '',
}) => {
  const [name, role] = author.alt.split(' - ');
  return (
    <button
      type="button"
      aria-pressed={selected ? 'true' : 'false'}
      className={`flex min-h-[220px] flex-col items-center rounded-lg p-2 py-4 text-center transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${selected ? 'scale-105 shadow-xl ring-2 ring-blue-500' : 'hover:scale-105 hover:shadow-xl'} ${className}`}
      onClick={onClick ? () => onClick(author) : undefined}
    >
      <img
        src={author.src}
        alt={name}
        className="mb-2 h-24 w-24 flex-shrink-0 rounded-full object-cover shadow-lg"
        loading="lazy"
      />
      <h3 className="mb-1 text-base font-semibold text-gray-800">{name}</h3>
      {role && <p className="text-xs text-gray-600">{role}</p>}
      {author.miniBio && (
        <p className="mt-1 line-clamp-2 flex-grow text-xs text-gray-500">{author.miniBio}</p>
      )}
      {/* Social links e outros dados podem ser adicionados aqui */}
    </button>
  );
};

export default AuthorProfileCard;
