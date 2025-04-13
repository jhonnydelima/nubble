import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';
import {TextInput, TextInputProps} from '@components';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: UseControllerProps<FormType> & TextInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          autoCapitalize="none"
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}
