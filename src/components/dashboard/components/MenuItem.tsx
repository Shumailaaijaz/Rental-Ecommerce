import * as React from 'react';
import { MenuItemProps } from '../types';
import Image from 'next/image';

export const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isActive = false }) => {
  return (
    <div className={`flex gap-3 items-center mt-8 ${isActive ? 'text-white' : 'text-slate-400'}`}>
      <Image
        loading="lazy"
        src={icon}
        alt={`${label} icon`}
        height={6}
        width={6}
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      <div className="self-stretch my-auto">{label}</div>
    </div>
  );
};