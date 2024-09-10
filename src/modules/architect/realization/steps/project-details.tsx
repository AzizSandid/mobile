import React from 'react';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import {
  ControlledInput,
  ScrollView,
  TagGroup,
  Text,
  View,
} from '@/shared/components';

import { useDetails } from '../shared/hooks/use-details';

export function ProjectDetails() {
  const {
    errorCity,
    errorWorkSurface,
    onSubmit,
    handleSubmit,
    control,
    onHandleBack,
    cities,
    workSurfaces,
  } = useDetails();

  return (
    <View className=" flex h-full flex-1 items-start justify-between gap-5  ">
      <View>
        <Text
          tx={'realisation.detailsStep.title'}
          className="mb-2 text-start text-2xl font-extrabold"
        />
        <Text
          tx={'realisation.detailsStep.description'}
          className="max-w-xs text-start text-sm text-description"
        />
      </View>
      <ScrollView className="flex gap-4" showsVerticalScrollIndicator={false}>
        <ControlledInput
          required={true}
          control={control}
          name="projectName"
          labelStyle="mb-1 text-base font-bold"
          className=" mt-5 gap-2"
          label={translate('realisation.detailsStep.inputLabel')}
          placeholder={translate('realisation.detailsStep.inputPlaceholder')}
        />
        <TagGroup
          name="address"
          control={control}
          tags={cities}
          label="realisation.detailsStep.localisationLabel"
          error={errorCity}
          required={true}
        />

        <TagGroup
          name="workSurface"
          control={control}
          tags={workSurfaces}
          label="realisation.detailsStep.surfaceLabel"
          error={errorWorkSurface}
          required={true}
        />
        <ControlledInput
          required={true}
          control={control}
          name="description"
          labelStyle="mb-1 text-base font-bold"
          className="mb-7 mt-5 gap-2"
          label={translate('realisation.detailsStep.descriptionLabel')}
          placeholder={translate(
            'realisation.detailsStep.descriptionPlaceholder'
          )}
        />
      </ScrollView>
      <View className="mb-5 flex w-full items-center">
        <StepButtons
          previous={{
            handlePreviousStep: onHandleBack,
            label: 'common.back',
          }}
          next={{
            handleSubmit: handleSubmit(onSubmit),
            label: 'common.next',
          }}
        />
      </View>
    </View>
  );
}
