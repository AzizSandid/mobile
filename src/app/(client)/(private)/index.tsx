import React from 'react';

import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Explorer() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
    </View>
  );
}
