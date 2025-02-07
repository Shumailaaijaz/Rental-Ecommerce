

export interface IconProps {
    src: string;
    alt: string;
    className?: string;
    link?: string;  // Adding link property as optional
  }
  
  export interface SearchBarProps {
    onSearch?: (value: string) => void;
  }
  
  export interface NavigationIconsProps {
    icons: IconProps[];  // Using the updated IconProps interface that includes link
  }
  