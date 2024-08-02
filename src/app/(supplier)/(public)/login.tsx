import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import LoginSupplier from '@/modules/supplier/login/login-supplier';
import type { LoginSupplierFormType } from '@/modules/supplier/shared/types';
import { FocusAwareStatusBar } from '@/shared/components';
import { FormProvider } from '@/shared/providers/use-form-stepper-provider';

export default function Login() {
  useSoftKeyboardEffect();
  const initialData = {
    email: '',
    password: '',
    state: 'email',
  };
  return (
    <>
      <FocusAwareStatusBar />
      <FormProvider<LoginSupplierFormType> initialData={initialData}>
        <LoginSupplier />
      </FormProvider>
    </>
  );
}
