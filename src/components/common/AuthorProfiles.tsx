import React from 'react';
import { AvatarGroup } from '../ui';

export interface AuthorProfile {
  src: string;
  alt: string;
}

interface AuthorProfilesProps {
  authors: AuthorProfile[];
}

/**
 * @deprecated Use AvatarGroup from the UI library instead
 * This component is now just an adapter for backward compatibility
 */
const AuthorProfiles: React.FC<AuthorProfilesProps> = ({ authors }) => {
  if (!authors || authors.length === 0) {
    // It might be good to return null or a placeholder if no authors are provided
    return null;
  }

  return <AvatarGroup avatars={authors} size="md" bordered />;
};

export default AuthorProfiles;
