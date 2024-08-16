import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Mask, Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const Location = ({ color = colors.blue, ...props }: SvgProps) => (
  <Svg className="h-5 w-4" fill="none" {...props}>
    <Mask id="a" fill="#fff">
      <Path d="m5.829 16 .297-.364c.199-.264 5.257-6.182 5.257-9.72 0-3.074-2.513-5.554-5.554-5.554C2.787.362.275 2.875.275 5.916c0 3.538 5.058 9.489 5.256 9.72L5.83 16Zm0-14.877a4.762 4.762 0 0 1 4.76 4.76c0 2.777-3.67 7.505-4.76 8.86-1.091-1.355-4.761-6.05-4.761-8.86a4.762 4.762 0 0 1 4.76-4.76Z" />
    </Mask>
    <Path
      fill={color}
      d="m5.829 16 .297-.364c.199-.264 5.257-6.182 5.257-9.72 0-3.074-2.513-5.554-5.554-5.554C2.787.362.275 2.875.275 5.916c0 3.538 5.058 9.489 5.256 9.72L5.83 16Zm0-14.877a4.762 4.762 0 0 1 4.76 4.76c0 2.777-3.67 7.505-4.76 8.86-1.091-1.355-4.761-6.05-4.761-8.86a4.762 4.762 0 0 1 4.76-4.76Z"
    />
    <Path
      fill={color}
      d="m5.829 16 .774.633-.774.946-.774-.946.774-.633Zm.297-.364.8.6-.012.017-.014.016-.774-.633Zm-.595 0 .76-.65.007.008.007.009-.774.633Zm.298-.893.779.627-.78.968-.778-.968.779-.627Zm-.774.624.297-.364L6.9 16.269l-.297.364-1.548-1.266Zm.271-.33c.153-.205 1.398-1.658 2.668-3.584.629-.953 1.236-1.984 1.684-2.974.456-1.01.705-1.889.705-2.563h2c0 1.095-.383 2.282-.882 3.386-.507 1.122-1.176 2.25-1.837 3.252a41.76 41.76 0 0 1-1.843 2.562c-.256.331-.475.603-.635.801l-.193.238-.067.081-1.6-1.2Zm5.057-9.12c0-2.519-2.061-4.555-4.554-4.555v-2c3.59 0 6.554 2.924 6.554 6.554h-2ZM5.829 1.361c-2.49 0-4.554 2.065-4.554 4.554h-2c0-3.593 2.96-6.554 6.554-6.554v2ZM1.275 5.916c0 .675.249 1.556.705 2.568.447.993 1.055 2.028 1.684 2.982a38.69 38.69 0 0 0 2.626 3.52l-1.518 1.3a40.661 40.661 0 0 1-2.779-3.72c-.66-1.004-1.33-2.136-1.837-3.26C-.342 8.2-.725 7.01-.725 5.916h2Zm5.03 9.087.298.364-1.548 1.266-.298-.364 1.548-1.266ZM5.83.123a5.762 5.762 0 0 1 5.76 5.76h-2a3.762 3.762 0 0 0-3.76-3.76v-2Zm5.76 5.76c0 .89-.287 1.85-.669 2.755-.388.92-.91 1.861-1.452 2.736-1.086 1.75-2.305 3.307-2.86 3.996L5.05 14.117c.536-.667 1.696-2.15 2.718-3.798.512-.824.976-1.669 1.31-2.46.34-.805.511-1.477.511-1.976h2Zm-6.54 9.488c-.553-.688-1.773-2.238-2.859-3.984-.543-.873-1.064-1.814-1.453-2.736-.382-.907-.669-1.87-.669-2.768h2c0 .509.172 1.185.512 1.991.333.791.798 1.635 1.308 2.457 1.022 1.642 2.182 3.117 2.72 3.786L5.05 15.37ZM.069 5.883c0-3.16 2.56-5.76 5.76-5.76v2a3.762 3.762 0 0 0-3.76 3.76h-2Z"
      mask="url(#a)"
    />
    <Mask id="b" fill="#fff">
      <Path d="M5.828 8.032a2.13 2.13 0 0 0 2.116-2.115A2.13 2.13 0 0 0 5.828 3.8a2.13 2.13 0 0 0-2.115 2.116 2.13 2.13 0 0 0 2.115 2.115Zm0-3.438c.728 0 1.323.595 1.323 1.323 0 .727-.595 1.322-1.323 1.322a1.326 1.326 0 0 1-1.322-1.322c0-.728.595-1.323 1.322-1.323Z" />
    </Mask>
    <Path
      fill={color}
      d="M5.828 8.032a2.13 2.13 0 0 0 2.116-2.115A2.13 2.13 0 0 0 5.828 3.8a2.13 2.13 0 0 0-2.115 2.116 2.13 2.13 0 0 0 2.115 2.115Zm0-3.438c.728 0 1.323.595 1.323 1.323 0 .727-.595 1.322-1.323 1.322a1.326 1.326 0 0 1-1.322-1.322c0-.728.595-1.323 1.322-1.323Z"
    />
    <Path
      fill={color}
      d="M5.828 7.032a1.13 1.13 0 0 0 1.116-1.115h2a3.13 3.13 0 0 1-3.116 3.115v-2Zm1.116-1.115A1.13 1.13 0 0 0 5.828 4.8v-2a3.13 3.13 0 0 1 3.116 3.116h-2ZM5.828 4.8a1.13 1.13 0 0 0-1.115 1.116h-2A3.13 3.13 0 0 1 5.828 2.8v2ZM4.713 5.917a1.13 1.13 0 0 0 1.115 1.115v2a3.13 3.13 0 0 1-3.115-3.115h2Zm1.115-2.323a2.326 2.326 0 0 1 2.323 2.323h-2a.326.326 0 0 0-.323-.323v-2Zm2.323 2.323a2.326 2.326 0 0 1-2.323 2.322v-2a.326.326 0 0 0 .323-.322h2ZM5.828 8.239a2.326 2.326 0 0 1-2.322-2.322h2c0 .175.147.322.322.322v2ZM3.506 5.917a2.326 2.326 0 0 1 2.322-2.323v2a.326.326 0 0 0-.322.323h-2Z"
      mask="url(#b)"
    />
  </Svg>
);
