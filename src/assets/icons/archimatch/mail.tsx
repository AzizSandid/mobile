import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const Mail = ({ color = colors.blue, ...props }: SvgProps) => {
  return (
    <Svg className="h-4 w-5" fill="none" {...props}>
      <Path
        fill={color}
        stroke={color}
        strokeWidth={0.2}
        d="M14.273 1.7H5.425c-.166 0-.323.035-.466.096l4.288 4.07L14.273 1.7Zm0 0c.166 0 .322.036.465.096m-.465-.096L10.45 5.867l4.288-4.07m0 0 .079-.075.018.12a1.275 1.275 0 0 0-.097-.046Zm-4.89 5.106c.445 0 .872-.167 1.187-.467l4.298-4.08c.066.137.104.286.104.444v6c0 .602-.516 1.1-1.164 1.1H5.425c-.648 0-1.164-.498-1.165-1.1v-6c0-.158.039-.308.105-.444l4.298 4.08c.315.3.742.467 1.186.467Zm0 0v-.1.1ZM.9 10c.002 1.716 1.465 3.098 3.26 3.1h7.901a.408.408 0 0 0 .416-.4c0-.226-.191-.4-.416-.4h-7.9c-1.346-.001-2.428-1.035-2.429-2.3V4.9c0-.226-.191-.4-.416-.4a.408.408 0 0 0-.416.4V10ZM14.273.9H5.424c-1.097.001-1.995.846-1.996 1.9v6c.001 1.054.9 1.899 1.996 1.9h8.85c1.096-.001 1.994-.846 1.995-1.9v-6c0-1.054-.899-1.899-1.996-1.9ZM10.45 5.867a.886.886 0 0 1-1.203 0h1.203Z"
      />
    </Svg>
  );
};
