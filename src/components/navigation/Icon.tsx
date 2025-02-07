// import * as React from "react";
// import { IconProps } from "./types";

// export const Icon: React.FC<IconProps> = ({ src, alt, className }) => (
//   <img
//     loading="lazy"
//     src={src}
//     alt={alt}
//     className={`object-contain shrink-0 aspect-square ${className}`}
//   />
// );






// import * as React from "react";
// import { IconProps } from "./types";
// import Link from "next/link";  // Using Next.js Link component for navigation

// export const Icon: React.FC<IconProps> = ({ src, alt, className, link }) => (
//   // Check if a link is provided; if yes, use Next.js Link component
//   <div>
//     {link ? (
//       <Link href={link}>
//         <Link href="" target="_blank" rel="noopener noreferrer">
//           <img
//             loading="lazy"
//             src={src}
//             alt={alt}
//             className={`object-contain shrink-0 aspect-square ${className}`}
//           />
//         </Link>
//       </Link>
//     ) : (
//       <img
//         loading="lazy"
//         src={src}
//         alt={alt}
//         className={`object-contain shrink-0 aspect-square ${className}`}
//       />
//     )}
//   </div>
// );






import * as React from "react";
import { IconProps } from "./types";
import Link from "next/link";
import Image from "next/image";  // Using Next.js Link component for navigation

export const Icon: React.FC<IconProps> = ({ src, alt, className, link }) => (
  <div>
    {link ? (
      <Link href={link}>
        <Image
          loading="lazy"
          src={src}
          alt={alt}
          height={6}
          width={6}
          className={`object-contain shrink-0 aspect-square ${className}`}
        />
      </Link>
    ) : (
      <Image
        loading="lazy"
        src={src}
        alt={alt}
        height={6}
        width={6}
        className={`object-contain shrink-0 aspect-square ${className}`}
      />
    )}
  </div>
);