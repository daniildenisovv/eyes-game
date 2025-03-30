import { SVGProps } from 'react';
import { StarSize } from '../../types';
import { StarIconXl } from './StarIconXl';
import { StarIconLg } from './StarIconLg';
import { StarIconMd } from './StarIconMd';
import { StarIconSm } from './StarIconSm';

export const StarIcon = ({
  size = 'sm',
  ...props
}: { size?: StarSize } & SVGProps<SVGSVGElement>) => {
  if (size === 'xl') return <StarIconXl {...props} />;
  if (size === 'lg') return <StarIconLg {...props} />;
  if (size === 'md') return <StarIconMd {...props} />;
  if (size === 'sm') return <StarIconSm {...props} />;
  return null;
};
