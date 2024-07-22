import React from 'react';
import type { SvgProps } from 'react-native-svg';

import { Trafic } from '@/assets/icons';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { StepButtons } from '@/modules/shared';
import { Text, ToggleCard, View } from '@/shared/components';
import type { StepperFormProps } from '@/types';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepTwoSchema } from '../schemas';
export function ChooseNeeds({
  onHandleBack,
  onHandleNext,
  setFormData,
  formData,
}: StepperFormProps) {
  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepTwoSchema,
    { needs: formData?.needs || [] }
  );

  type needsFormType = Pick<AnnouncementType, 'needs'>;
  const onSubmit = (data: needsFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  type NeedsData = {
    id: number;
    label: string;
    icon: React.FunctionComponent<SvgProps>;
    selectedNeeds: string;
  };
  const NeedsData: NeedsData[] = [
    {
      id: 1,
      label: 'Plans permis et suivi chantier',
      icon: Trafic,
      selectedNeeds: 'Chantier',
    },
    {
      id: 2,
      label: 'Plan 3d de décoration extérieur',
      icon: Trafic,
      selectedNeeds: 'interiorArchitect',
    },
    {
      id: 3,
      label: 'Plans et permis de construire',
      icon: Trafic,
      selectedNeeds: 'buildingPermit',
    },
    {
      id: 4,
      label: 'Plan 3d de décoration intérieur',
      icon: Trafic,
      selectedNeeds: 'interiorDesign',
    },
    {
      id: 5,
      label: 'Plans permis et suivi chantier',
      icon: Trafic,
      selectedNeeds: 'constructionArchitect',
    },
    {
      id: 6,
      label: 'Plan 3d de décoration intérieur',
      icon: Trafic,
      selectedNeeds: 'interiorDecoration',
    },
  ];
  const error = errors?.needs?.message as TxKeyPath | undefined;
  return (
    <View className="flex flex-1 justify-between pt-4">
      <View className="gap-4">
        {NeedsData.map((cardData, index) => (
          <ToggleCard
            key={index}
            className="flex h-16  w-full flex-row rounded-lg"
            title={cardData.label}
            svgComponent={cardData.icon}
            name="needs"
            control={control}
            multi={true}
            value={cardData.id}
          />
        ))}
        {error && (
          <Text className="text-sm text-error dark:text-error" tx={error} />
        )}
      </View>
      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'signup.retour' }}
        next={{
          handleSubmit: handleSubmit(onSubmit),
          label: 'signup.suivant',
        }}
      />
    </View>
  );
}
