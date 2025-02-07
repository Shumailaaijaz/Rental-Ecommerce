
import * as React from "react";
import { Icon } from "./Icon";
import { NavigationIconsProps } from "./types";

export const NavigationIcons: React.FC<NavigationIconsProps> = ({ icons }) => (
  <div className="flex gap-5 items-start">
    {icons.map((icon, index) => (
      <Icon key={index} {...icon} />
    ))}
  </div>
);
