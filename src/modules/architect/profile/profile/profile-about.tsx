import { ResizeMode } from 'expo-av';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Share } from '@/assets/icons';
import { Pen } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import {
  Button,
  colors,
  ControlledInput,
  Text,
  Video,
  VideoUploader,
} from '@/shared/components';

import { useUpdateBio } from './hooks/use-update-bio';
import { useUpdateVideo } from './hooks/use-update-video';

export default function ProfileAbout() {
  const { control, handleSubmit, onSubmit, architect } = useUpdateBio();
  const { onSubmitVideo, pickVideo, selectedVideo, onDelete, newVideo } =
    useUpdateVideo();
  return (
    <View className=" mb-20 mt-2 flex h-max  w-11/12 flex-1 items-start justify-center  ">
      {!architect?.bio ? (
        <>
          <View className="mb-4 ml-1 mr-2 flex flex-row items-center justify-between">
            <Text
              tx={'architectProfile.bioLabel'}
              className="text-lg font-bold"
            />
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              className="   flex h-10 w-10 items-center justify-center rounded-full bg-primary"
            >
              <Share color={colors.white} />
            </TouchableOpacity>
          </View>
          <ControlledInput
            testID="bio-input"
            control={control}
            name="bio"
            inputAreaType="textArea"
            placeholder={translate('architectProfile.bioPlaceholder')}
            className="flex-1"
          />
        </>
      ) : (
        <View className="mb-4 ml-1 mr-2 flex   items-start">
          <Text
            tx={'architectProfile.bioLabel'}
            className="text-justify text-lg font-bold"
          />
          <Text>{architect?.bio}</Text>
        </View>
      )}
      <View className=" mx-1 mt-2 flex h-fit  flex-1  ">
        <Text
          tx={'architectProfile.presentationVideoLabel'}
          className="mb-2   text-lg font-bold"
        />
        {architect?.presentationVideo &&
        architect?.presentationVideo !== null ? (
          <View>
            <Video
              className="h-64 w-full rounded-lg"
              source={{ uri: architect?.presentationVideo }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping={false}
            />
          </View>
        ) : (
          <>
            {selectedVideo === null ? (
              <View className="flex w-full items-center justify-center">
                <VideoUploader pickVideo={pickVideo} />
              </View>
            ) : (
              <View>
                <Video
                  className="h-64 w-full rounded-lg"
                  source={{ uri: selectedVideo }}
                  useNativeControls
                  resizeMode={ResizeMode.CONTAIN}
                  isLooping={false}
                />
                <View className="flex w-full flex-row justify-end">
                  <TouchableOpacity
                    onPress={pickVideo}
                    className="mx-2 my-4  flex h-16 w-16 items-center justify-center rounded-full bg-primary"
                  >
                    <Pen color={colors.white} width={25} height={30} />
                  </TouchableOpacity>
                  <Button
                    label="X"
                    textClassName="text-xl"
                    onPress={onDelete}
                    className="mx-2 my-4 h-16 w-16  rounded-full"
                  />
                </View>
                <Button
                  label={translate('notification.save')}
                  onPress={onSubmitVideo}
                  className=" h-12 rounded-lg"
                  disabled={!newVideo}
                />
              </View>
            )}
          </>
        )}
      </View>
    </View>
  );
}
