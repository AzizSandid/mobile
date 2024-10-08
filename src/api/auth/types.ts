import type { Image } from '@/types';

export type SignupRequest = {
  architectSpeciality: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  date: string;
  timeSlot: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginEmailRequest = {
  email: string;
};
export type SpecialityTypeResponse = {
  id: number;
  label: string;
  icon: string;
  content: string;
};
export type User = {
  id?: number;
  username?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  userType?: string;
  image?: Image;
};

export type ForgetPassRequest = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};
