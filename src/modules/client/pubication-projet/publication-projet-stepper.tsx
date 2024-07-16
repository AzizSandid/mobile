import { useRouter } from 'expo-router';
import * as React from 'react';
import { cloneElement } from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { Close } from '@/assets/icons';
import { translate, useStepperSpeacialNavigation } from '@/core';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from '@/shared/components';

import { stepsContent } from './steps-content';

export default function PublicationProjetStepper() {
  const router = useRouter();
  const { step, scroller, handleNextStep, handlePreviousStep } =
    useStepperSpeacialNavigation({
      maxSteps: 11,
    });

  const { title, subtitle, component } = stepsContent[step];
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="mt-16 w-full flex-1 rounded-t-3xl bg-white dark:bg-black "
    >
      <View className="px-4 py-6">
        <TouchableOpacity
          className="items-end"
          onPress={() => {
            router.back();
          }}
        >
          <Close />
        </TouchableOpacity>
        {step !== 11 && (
          <View>
            <Text className="mb-2 font-bold">
              {step + 1}/11 {translate('announcement.question')}
            </Text>
            <View className="h-2 w-full rounded-2xl bg-background">
              <View
                className="rounded-2xl bg-primary"
                style={{ width: `${scroller}%` }}
              >
                <Text />
              </View>
            </View>
          </View>
        )}
      </View>
      <ScrollView
        className="flex-1 px-4"
        contentContainerClassName={`${
          step !== 11 ? 'min-h-[85%]' : 'min-h-[90%]'
        }`}
      >
        <Text tx={title} className="mb-2 text-xl font-bold" />
        <Text tx={subtitle} className="text-base text-description" />
        {cloneElement(component, { handleNextStep, handlePreviousStep })}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
