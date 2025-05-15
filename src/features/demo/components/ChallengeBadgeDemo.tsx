import React from 'react';
import { ChallengeBadge } from '../../../components/ui';

const ChallengeBadgeDemo: React.FC<{ type: string; text: string }> = ({ type, text }) => {
  return <ChallengeBadge type={type} text={text} targetPath={`/challenges/${type}`} />;
};

export default ChallengeBadgeDemo;
