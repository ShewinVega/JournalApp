import { useMemo, useState } from "react";

interface FormValues {
  [key: string]: string | number;
}

//TODO: formvalidation will getthe implementation in the next pull request
export const useForm = <T extends FormValues>(
  initialValues: T,
  // formValidations: object = {},
) => {
  const [formState, setFormState] = useState<T>(initialValues);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onResetForm = (): void => {
    setFormState(initialValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
