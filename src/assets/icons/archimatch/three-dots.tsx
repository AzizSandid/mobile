import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Circle } from 'react-native-svg';

export const ThreeDots = (props: SvgProps) => (
  <Svg className="h-5 w-4" viewBox="0 0 15 21" fill="none" {...props}>
    <Circle
      cx={7.49989}
      cy={10.4999}
      r={1.44444}
      transform="rotate(-180 7.5 10.5)"
      fill="#344054"
    />
    <Circle
      cx={7.49989}
      cy={15.5556}
      r={1.44444}
      transform="rotate(-180 7.5 15.556)"
      fill="#344054"
    />
    <Circle
      cx={7.49989}
      cy={5.44423}
      r={1.44444}
      transform="rotate(-180 7.5 5.444)"
      fill="#344054"
    />
  </Svg>
);
