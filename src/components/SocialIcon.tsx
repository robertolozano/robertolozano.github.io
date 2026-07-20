import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

interface SocialIconProps {
  name: string;
  size?: number;
}

/**
 * Brand marks for the social links.
 *
 * Sourced from react-icons (Font Awesome 6 brand set) rather than hand-written
 * path data — transcribing a logo by hand is how the LinkedIn "n" ended up
 * clipped outside its viewBox. Both marks come from the same icon family so
 * their weight and silhouette match.
 *
 * These render with `fill="currentColor"`, which is what makes them work in
 * both light and dark themes and inherit hover colors.
 */
export const SocialIcon: React.FC<SocialIconProps> = ({ name, size = 20 }) => {
  const Icon = name === 'LinkedIn' ? FaLinkedinIn : FaGithub;
  return <Icon size={size} aria-hidden="true" focusable="false" />;
};
