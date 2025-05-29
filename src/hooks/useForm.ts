import { useEffect, useMemo, useState } from "react";

//TODO: formvalidation will getthe implementation in the next pull request
export const useForm = <T>(initialValues: T, formValidations: any = {}) => {
  const [formState, setFormState] = useState<T | any>(initialValues);
  const [formValidated, setFormValidated] = useState<any>({});

  // Validations
  useEffect(() => {
    makeValidation();
  }, [formState]);

  // If the initialValues change
  useEffect(() => {
    setFormState(initialValues);
  }, [initialValues]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onResetForm = (): void => {
    setFormState(initialValues);
  };

  // Inputs Validations
  const makeValidation = () => {
    const formCheckedValues: any = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] =
        fn(formState[formField]) === true ? null : errorMessage;
    }

    setFormValidated(formCheckedValues);
  };

  // send validation status for stop the wrong register if the form needs to be validated.
  const isFormValid = useMemo(() => {
    for (const itemKey of Object.keys(formValidated)) {
      if (formValidated[itemKey] !== null) return false;
    }
    return true;
  }, [formValidated]);

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidated,
    isFormValid,
  };
};
