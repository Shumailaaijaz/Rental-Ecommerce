import * as React from 'react';
import { RentalDetailsProps } from '../types';
import Image from 'next/image';

export const RentalDetails: React.FC<RentalDetailsProps> = ({ location, date, time }) => {
  return (
    <div className="flex flex-wrap gap-6 items-start">
      <div className="flex flex-col">
        <div className="text-base font-bold tracking-tight text-gray-900">
          Locations
        </div>
        <div className="flex gap-2 items-center mt-2 text-xs font-medium tracking-tight text-slate-400">
          <div className="self-stretch my-auto w-[104px]">{location}</div>
          <Image
            loading="lazy"
            src="/images/d5.svg"
            alt=""
            height={6}
            width={6}
            className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
          />
        </div>
      </div>
      <div className="shrink-0 w-0 h-12 border border-solid border-slate-300 border-opacity-40" />
      <div className="flex flex-col">
        <div className="text-base font-bold tracking-tight text-gray-900">
          Date
        </div>
        <div className="flex gap-2 items-center mt-2 text-xs font-medium tracking-tight text-slate-400">
          <div className="self-stretch my-auto w-28">{date}</div>
          <Image
            loading="lazy"
            src="/images/d5.svg"
            alt=""
            height={6}
            width={6}
            className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
          />
        </div>
      </div>
      <div className="shrink-0 w-0 h-12 border border-solid border-slate-300 border-opacity-40" />
      <div className="flex flex-col whitespace-nowrap">
        <div className="text-base font-bold tracking-tight text-gray-900">
          Time
        </div>
        <div className="flex gap-2 items-center mt-2 text-xs font-medium tracking-tight text-slate-400">
          <div className="self-stretch my-auto w-[108px]">{time}</div>
          <Image
            loading="lazy"
            src="/images/d4.svg"
            alt=""
            height={6}
            width={6}
            className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
          />
        </div>
      </div>
    </div>
  );
};