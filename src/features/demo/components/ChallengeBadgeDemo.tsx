import React from 'react';
import { ChallengeBadge } from '../../../components/ui';

const ChallengeBadgeDemo = ({ type, text }: { type: string; text: string }) => {
  return <ChallengeBadge type={type} text={text} targetPath={`/challenges/${type}`} />;
};

export default ChallengeBadgeDemo;
