
import * as React from "react";
import { SearchBar } from "./SearchBar";
import { NavigationIcons } from "./NavigationIcons";

export const Navigation: React.FC = () => {
  const navigationIcons = [
    {
      src: "/images/1.svg",
      alt: "Navigation icon 1",
      className: "w-11 rounded-none",
      link: "/details"
    },
    {
      src: "/images/2.svg",
      alt: "Navigation icon 2",
      className: "w-11 rounded-none",
      link: "/category"
    },
    {
      src: "/images/3.svg",
      alt: "Navigation icon 3",
      className: "w-11 rounded-none",
      link: "/admin"
    },
    {
      src: "/images/4.png",
      alt: "Profile icon",
      className: "w-11 rounded-[90px]",
      link: "/payment"
    },
    {
      src: "/images/image.png",
      alt: "Profile icon",
      className: "w-11 rounded-[90px]",
      link: "./user"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-12 py-6 bg-white border border-solid border-slate-300 border-opacity-40 shadow-md">
      {/* Logo and Search Bar */}
      <div className="flex items-center gap-4 w-full md:w-auto mb-4 md:mb-0">
        <div className="text-3xl font-bold tracking-tighter text-[#3563E9]">
          MORENT
        </div>
        <div className="flex-grow md:flex-grow-0">
          <SearchBar />
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="flex items-center  gap-5">
        <NavigationIcons icons={navigationIcons} />
      </div>
    </div>
  );
};



































// import * as React from "react";
// import { SearchBar } from "./SearchBar";
// import { NavigationIcons } from "./NavigationIcons";

// export const Navigation: React.FC = () => {
//   const navigationIcons = [
//     {
//       src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cea4b83e24bbf7f13852ef7be95b69b9dc48ed633bdbdc4af58e28c403e1424?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df",
//       alt: "Navigation icon 1",
//       className: "w-11 rounded-none",
//       link: "/cardetails"
//     },
//     {
//       src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ac347ebdb3cc99208384e0ddee249dd7edb22d276f4f8eb0e21bef5cd4f5903?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df",
//       alt: "Navigation icon 2",
//       className: "w-11 rounded-none",
//       link: "/dashboard"
//     },
//     {
//       src: "https://cdn.builder.io/api/v1/image/assets/TEMP/099d60d7b50c41de98189731c749fc56bfca09dd76c5c7e39aecdcfc079b470e?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df",
//       alt: "Navigation icon 3",
//       className: "w-11 rounded-none",
//       link: "/rentalform"
//     },
//     {
//       src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f63d227b2857639318c2a0f204ba861799bafb075fac4a248fd374ff844cbeb9?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df",
//       alt: "Profile icon",
//       className: "w-11 rounded-[90px]",
//       link: "/acount"
//     }
//   ];

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-12 py-6 bg-white border border-solid border-slate-300 border-opacity-40 shadow-md">
//       {/* Logo and Search Bar */}
//       <div className="flex items-center gap-4 w-full md:w-auto mb-4 md:mb-0">
//         <div className="text-3xl font-bold tracking-tighter text-[#3563E9]">
//           MORENT
//         </div>
//         <div className="flex-grow md:flex-grow-0">
//           <SearchBar />
//         </div>
//       </div>

//       {/* Navigation Icons */}
//       <div className="flex items-center gap-5">
//         <NavigationIcons icons={navigationIcons} />
//       </div>
//     </div>
//   );
// };