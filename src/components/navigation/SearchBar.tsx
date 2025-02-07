


'use client';

import * as React from "react";
import { Icon } from "./Icon";
import { SearchBarProps } from "./types";

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="flex  flex-auto gap-10 px-5 py-2.5 text-sm font-medium tracking-tight text-justify bg-white border border-solid border-slate-300 border-opacity-40 rounded-[70px] text-slate-500 max-w-full">
      <div className="flex gap-5 w-full md:w-auto"> {/* Make sure it is full width on mobile */}
        <Icon
          src="/images/search.png"
          alt="Search icon"
          className="w-[24px] h-[24px] "
        />
        <label htmlFor="searchInput" className="sr-only">
          Search something here
        </label>
        <input
          id="searchInput"
          type="text"
          className="bg-transparent border-none outline-none basis-auto w-full"  // Full width input
          placeholder="Search something here"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
      <Icon
        src="/images/filter.png"
        alt="Filter icon"
        className="w-[24px] h-[24px]"
      />
    </div>
  );
};
