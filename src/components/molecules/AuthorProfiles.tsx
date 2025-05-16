import React from 'react';
import { AvatarGroup } from '../ui'; // O caminho para AvatarGroup pode precisar de ajuste
import { AuthorProfile } from '../../types/author.types';

interface AuthorProfilesProps {
  authors: Pick<AuthorProfile, 'src' | 'alt'>[];
}

/**
 * @deprecated Use AvatarGroup from the UI library instead.
 * This component is now just an adapter for backward compatibility.
 * Consider migrating to use AvatarGroup directly.
 */
const AuthorProfiles = ({ authors }: AuthorProfilesProps) => {
  if (!authors || authors.length === 0) {
    return null;
  }

  // Presumindo que AvatarGroup está em src/components/ui/
  // Se AuthorProfiles está em src/components/molecules/, o caminho relativo para src/components/ui/ é ../ui/
  return <AvatarGroup avatars={authors} size="md" bordered />;
};

export default AuthorProfiles;
