import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const CompanyInfo = (props: SvgProps) => (
  <Svg className="h-5 w-6" viewBox="0 0 17 17" fill="none" {...props}>
    <Path
      d="M13.188 3.4h-2.713v-.525A1.977 1.977 0 008.5.9a1.977 1.977 0 00-1.975 1.975V3.4H3.812A2.916 2.916 0 00.9 6.313v6.875A2.916 2.916 0 003.813 16.1h9.374a2.916 2.916 0 002.913-2.913V6.314A2.916 2.916 0 0013.187 3.4zM7.35 2.875c0-.634.516-1.15 1.15-1.15.634 0 1.15.516 1.15 1.15V4.75c0 .29-.235.525-.525.525h-1.25a.525.525 0 01-.525-.525V2.875zm7.925 10.313a2.09 2.09 0 01-2.088 2.087H3.813a2.09 2.09 0 01-2.088-2.088V6.314a2.09 2.09 0 012.087-2.088h2.713v.525c0 .745.605 1.35 1.35 1.35h1.25c.745 0 1.35-.605 1.35-1.35v-.525h2.713a2.09 2.09 0 012.087 2.088v6.875zm-8.65-5.413H4.75c-.745 0-1.35.605-1.35 1.35v3.125c0 .745.605 1.35 1.35 1.35h1.875c.745 0 1.35-.605 1.35-1.35V9.125c0-.745-.605-1.35-1.35-1.35zm.525 4.475c0 .29-.235.525-.525.525H4.75a.525.525 0 01-.525-.525V9.125c0-.29.235-.525.525-.525h1.875c.29 0 .525.235.525.525v3.125zm6.037-1.15a.413.413 0 000-.825h-3.75a.413.413 0 000 .825h3.75zm0-2.5a.413.413 0 000-.825h-3.75a.413.413 0 000 .825h3.75zm-1.25 5a.413.413 0 000-.825h-2.5a.413.413 0 000 .825h2.5z"
      fill="#344054"
      stroke="#344054"
      strokeWidth={0.2}
    />
  </Svg>
);
