import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Billing = (props: SvgProps) => (
  <Svg className="h-5 w-6" viewBox="0 0 15 15" fill="none" {...props}>
    <Path
      d="M9.39 2.023h0A3.749 3.749 0 006.69.875H3.557C2.075.875.875 2.112.875 3.625v8.75c0 1.513 1.2 2.75 2.682 2.75h6.249c.229 0 .409-.19.409-.417a.413.413 0 00-.41-.416H3.558c-1.025 0-1.864-.857-1.864-1.917v-8.75c0-1.06.84-1.917 1.864-1.917H6.69c.147 0 .292.01.434.032v3.052c0 .87.69 1.583 1.546 1.583h3.302c.128 0 .247-.06.324-.162a.423.423 0 00.073-.357h0a3.948 3.948 0 00-.999-1.8L9.39 2.023zm1.4 2.62h0c.253.261.459.566.607.899H8.67a.74.74 0 01-.728-.75s0 0 0 0V1.989c.319.15.612.359.868.621 0 0 0 0 0 0l1.98 2.033zm2.042 6.023h0l-1.945-.321h0a.812.812 0 01-.672-.813c0-.457.361-.824.799-.824h1.59a.87.87 0 01.753.447c.113.2.364.27.56.153h0a.421.421 0 00.15-.567h0c-.3-.533-.859-.866-1.462-.866h-.401v-.75a.413.413 0 00-.41-.417c-.228 0-.408.19-.408.417v.75h-.372c-.895 0-1.617.746-1.617 1.657 0 .815.57 1.505 1.36 1.636h0l1.945.32h0a.812.812 0 01.672.814.813.813 0 01-.799.823h-1.59a.87.87 0 01-.753-.447.405.405 0 00-.561-.153.421.421 0 00-.15.567h0c.3.534.86.866 1.463.866h.401v.75c0 .227.18.417.41.417.228 0 .408-.19.408-.417v-.75h.372c.895 0 1.617-.746 1.617-1.656a1.64 1.64 0 00-1.36-1.636zM4.409 8.458c-.7 0-1.262.583-1.262 1.292v1.167c0 .709.563 1.291 1.262 1.291h4.26c.23 0 .41-.19.41-.416a.413.413 0 00-.41-.417H4.41a.452.452 0 01-.443-.458V9.75c0-.256.202-.458.443-.458H8.1c.23 0 .41-.19.41-.417a.413.413 0 00-.41-.417H4.41zm-.852-1.5h2.272c.229 0 .409-.19.409-.416a.413.413 0 00-.409-.417H3.557c-.23 0-.41.19-.41.417 0 .227.18.416.41.416zm0-2.333h2.272c.229 0 .409-.19.409-.417a.413.413 0 00-.409-.416H3.557c-.23 0-.41.19-.41.416 0 .227.18.417.41.417z"
      fill="#344054"
      stroke="#344054"
      strokeWidth={0.25}
    />
  </Svg>
);
