import { useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import type {
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import { Image, WIDTH } from '@/shared/components';

import { projectList } from '../dump-data';
import type { ProjectItemProps } from '../types';

export const useProjectItem = ({ item }: ProjectItemProps) => {
  const snapToOffsets = projectList.map((_, index) => index * WIDTH);
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<string>) => (
      <Image source={{ uri: item }} className="h-screen w-screen" />
    ),
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = item?.projectImages?.length ?? 0;
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / WIDTH);
    setCurrentIndex(index);
  };

  const router = useRouter();
  const navigateToProfile = () => {
    router.push('(client)/(private)/(architect-profile)/profile');
  };
  return {
    snapToOffsets,
    renderItem,
    handleScroll,
    currentIndex,
    totalImages,
    navigateToProfile,
  };
};
