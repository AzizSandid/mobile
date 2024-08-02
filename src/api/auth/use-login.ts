import type { AxiosError } from 'axios';
import { createMutation } from 'react-query-kit';

import { postLogin } from '@/services/shared/auth-services';

import type { LoginRequest, LoginResponse } from './types';

type Request = LoginRequest;
type Response = LoginResponse;

export const useLoginApi = createMutation<Response, Request, AxiosError>({
  mutationFn: postLogin,
  onSuccess: (response) => {
    return { error: '', response };
  },
  onError: (error) => {
    return { error: error.message };
  },
});
