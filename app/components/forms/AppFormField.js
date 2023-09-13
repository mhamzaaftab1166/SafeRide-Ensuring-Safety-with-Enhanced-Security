import React from "react";
import AppTextInput from "../AppTextInput";
import AppErrorMessage from "./AppErrorMessage";
import { useFormikContext } from "formik";

function AppFormField({ name, width, ...otherProps }) {
  const { touched, setFieldTouched, errors, values, setFieldValue } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
