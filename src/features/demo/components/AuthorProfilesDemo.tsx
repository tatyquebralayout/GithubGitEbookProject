import React from 'react';
import AuthorProfiles from '../../../components/common/AuthorProfiles'; // Import the shared component

// Define author data for this component's context
const demoAuthors = [
  { src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 1" },
  { src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 2" },
  { src: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 3" },
  { src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 4" },
];

const AuthorProfilesDemo: React.FC = () => (
  <AuthorProfiles authors={demoAuthors} />
);

export default AuthorProfilesDemo; 