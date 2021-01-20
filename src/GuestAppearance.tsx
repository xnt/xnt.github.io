import React from "react";
import { Appearance } from "./guest-appearances";

const GuestAppearanceComponent: React.FC<Appearance> = ({link, linkTitle, title}) => (
  <li>{title} [<a href={link} target="_blank" rel="noopener noreferrer">{linkTitle}</a>]</li>
);

export const GuestAppearance = React.memo(GuestAppearanceComponent);