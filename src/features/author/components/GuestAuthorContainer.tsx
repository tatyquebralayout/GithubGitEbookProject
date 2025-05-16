import React, { useState } from 'react';
import GuestAuthor from './GuestAuthor';

const GuestAuthorContainer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:ebookgitadventure@gmail.com?subject=Quero Participar&body=Olá, gostaria de participar como autor convidado.%0D%0A%0D%0AEmail para contato: ${email}`;
  };

  return <GuestAuthor email={email} onEmailChange={handleEmailChange} onSubmit={handleSubmit} />;
};

export default GuestAuthorContainer;
