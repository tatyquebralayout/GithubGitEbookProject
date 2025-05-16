import { useState, useCallback } from 'react';
import { AuthorProfile } from '../../../types/author.types';

export const useAuthorDialog = (authors: AuthorProfile[], defaultAuthorNameHint: string) => {
  const [selectedAuthor, setSelectedAuthor] = useState<AuthorProfile | null>(() => {
    return (
      authors.find((author) =>
        author.alt.toLowerCase().includes(defaultAuthorNameHint.toLowerCase())
      ) || null
    );
  });
  const [currentStep, setCurrentStep] = useState(0);

  const selectAuthor = useCallback((author: AuthorProfile) => {
    setSelectedAuthor(author);
    setCurrentStep(0);
  }, []);

  const nextStep = useCallback(() => {
    if (selectedAuthor?.dialogue && currentStep < selectedAuthor.dialogue.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [selectedAuthor, currentStep]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  return {
    selectedAuthor,
    currentStep,
    selectAuthor,
    nextStep,
    prevStep,
  };
};

export default useAuthorDialog;
