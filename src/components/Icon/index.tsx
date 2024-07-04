// src/components/Icon.tsx
import React from 'react';
import { IconType } from 'react-icons';
import { FaBell, FaUser, FaHome } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";

interface IconProps {
  name: 'bell' | 'user' | 'home' | 'arrowDown';
  size?: number;
  color?: string;
}

const icons: { [key: string]: IconType } = {
  bell: FaBell,
  user: FaUser,
  home: FaHome,
  arrowDown: IoIosArrowDown,
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'black' }) => {
  const IconComponent = icons[name];
  return <IconComponent size={size} color={color} />;
};

export default Icon;
