// import React from 'react';
// import type { SubmitHandler } from 'react-hook-form';
// import type * as z from 'zod';

// import { useCustomForm } from '@/core';
// import { Button, Text, TouchableOpacity, View } from '@/shared/components';
// import { OTPSchema } from '@/shared/validations';
// import { translate } from '@/translations/i18n';

// import { OTPInput } from '../../reset-password/otp-input';

// type OTPFormType = z.infer<typeof OTPSchema>;

// type ResetFormProps = {
//   onSubmit: SubmitHandler<OTPFormType>;
// };
// export default function VerificationCode() {
//   const { control, handleSubmit } = useCustomForm(OTPSchema);

//   return (
//     <View className=" w-full flex-1  items-center justify-center">
//       <Text tx={'login.codeVerif'} className="mb-2 text-2xl font-extrabold" />
//       <Text tx={'login.saisirCode'} className="text-base text-description" />
//       <View className="my-8 w-11/12 flex-1 ">
//         <OTPInput length={4} disabled={false} name="OTP" control={control} />
//       </View>
//       <TouchableOpacity onPress={() => {}} className="mb-4">
//         <Text className="text-primary" tx="resetpass.resendCode" />
//       </TouchableOpacity>
//       <Button
//         label={translate('resetpass.reset')}
//         onPress={handleSubmit(onSubmit)}
//         className="h-12 w-10/12 rounded-md"
//       />
//     </View>
//   );
// }
