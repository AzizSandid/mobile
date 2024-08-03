import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

import { translate } from '@/core';
import { Text } from '@/shared/components';
import { useRouteName } from '@/shared/hooks/use-get-route';

export default function AuthFooter() {
  const router = useRouter();
  const space = useRouteName();
  return (
    <Pressable
      onPress={() => {
        router.replace(`/(${space})/(public)/signup`);
      }}
      className="  flex h-20 w-full justify-start px-16 pt-2  "
    >
      <Text className="text-center  text-xs font-bold text-primary-txt">
        {translate('login.haveAccountQuestion')}
        <Text className="text-xs font-bold text-primary">
          {` ${translate('login.signupLink')}`}
        </Text>
      </Text>
    </Pressable>
  );
}
