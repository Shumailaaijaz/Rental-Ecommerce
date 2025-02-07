import * as React from 'react';
import { TransactionItemProps } from '../types';
import Image from 'next/image';

export const TransactionItem: React.FC<TransactionItemProps> = ({ image, title, type, date, amount }) => {
  return (
    <>
      <div className="flex gap-5 justify-between w-full rounded-none max-w-[476px] max-md:max-w-full">
        <div className="flex gap-4">
          <Image
            loading="lazy"
            src={image}
            alt={`${title} car`}
            height={132}
            width={132}
            className="object-contain shrink-0 max-w-full rounded-lg aspect-[1.89] w-[132px]"
          />
          <div className="flex flex-col my-auto">
            <div className="text-base font-bold tracking-tight text-gray-900">
              {title}
            </div>
            <div className="gap-2 self-stretch mt-2 max-w-full text-xs font-medium tracking-tight text-slate-400 w-[108px]">
              {type}
            </div>
          </div>
        </div>
        <div className="flex flex-col my-auto text-right">
          <div className="gap-2 self-stretch max-w-full text-xs font-medium tracking-tight text-slate-400 w-[108px]">
            {date}
          </div>
          <div className="mt-2 text-base font-bold tracking-tight text-gray-900">
            {amount}
          </div>
        </div>
      </div>
      <div className="mt-4 max-w-full border border-solid border-slate-300 border-opacity-40 min-h-[1px] w-[476px]" />
    </>
  );
};