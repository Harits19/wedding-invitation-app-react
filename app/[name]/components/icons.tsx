import React, { SVGProps } from "react";
import home from "../../public/home.svg"; // Path to your icons.svg
import music from "../../public/music.svg"; // Path to your icons.svg
import people from "../../public/people.svg"; // Path to your icons.svg
import place from "../../public/place.svg"; // Path to your icons.svg
import collections from "../../public/collections.svg"; // Path to your icons.svg

import PropTypes from "prop-types";

const icons = {
  home,
  music,
  people,
  place,
  collections,
};

export type iconName = keyof typeof icons;

const Icon = ({
  name,
  color,
  size,
}: SVGProps<SVGElement> & {
  size: number;
  name: iconName;
}) => {
  const selectedIcon = icons[name];

  return selectedIcon;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
