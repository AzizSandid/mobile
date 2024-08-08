import * as SecureStore from 'expo-secure-store';
import type TranslateOptions from 'i18next';
import i18n from 'i18next';
import memoize from 'lodash.memoize';
import { useCallback, useEffect, useState } from 'react';
import { I18nManager, NativeModules, Platform } from 'react-native';
import RNRestart from 'react-native-restart';

import { LOCAL } from '@/shared/constants';

import type { Language, resources } from './resources';
import type { RecursiveKeyOf } from './types';

type DefaultLocale = typeof resources.en.translation;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

export const getLanguage = async () => {
  const language = await SecureStore.getItemAsync(LOCAL);
  return language as string;
};

export const translate = memoize(
  (key: TxKeyPath, options = undefined) =>
    i18n.t(key, options) as unknown as string,
  (key: TxKeyPath, options: typeof TranslateOptions) =>
    options ? key + JSON.stringify(options) : key
);

export const changeLanguage = (lang: Language) => {
  i18n.changeLanguage(lang);
  if (lang === 'ar') {
    I18nManager.forceRTL(true);
  } else {
    I18nManager.forceRTL(false);
  }
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    if (__DEV__) NativeModules.DevSettings.reload();
    else RNRestart.restart();
  } else if (Platform.OS === 'web') {
    window.location.reload();
  }
};

export const useSelectedLanguage = () => {
  const [language, setLanguageState] = useState<Language | null>(null);

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLanguage = await SecureStore.getItemAsync(LOCAL);
      if (storedLanguage) {
        setLanguageState(storedLanguage as Language);
      }
    };
    loadLanguage();
  }, []);

  const setLanguage = useCallback(async (lang: Language) => {
    await SecureStore.setItemAsync(LOCAL, lang);
    setLanguageState(lang);
    changeLanguage(lang);
  }, []);

  return { language: language as Language, setLanguage };
};
