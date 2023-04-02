/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Logos } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LogosCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    BigLogo: "",
    SmallLogo: "",
  };
  const [BigLogo, setBigLogo] = React.useState(initialValues.BigLogo);
  const [SmallLogo, setSmallLogo] = React.useState(initialValues.SmallLogo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBigLogo(initialValues.BigLogo);
    setSmallLogo(initialValues.SmallLogo);
    setErrors({});
  };
  const validations = {
    BigLogo: [],
    SmallLogo: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          BigLogo,
          SmallLogo,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Logos(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "LogosCreateForm")}
      {...rest}
    >
      <TextField
        label="Big logo"
        isRequired={false}
        isReadOnly={false}
        value={BigLogo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              BigLogo: value,
              SmallLogo,
            };
            const result = onChange(modelFields);
            value = result?.BigLogo ?? value;
          }
          if (errors.BigLogo?.hasError) {
            runValidationTasks("BigLogo", value);
          }
          setBigLogo(value);
        }}
        onBlur={() => runValidationTasks("BigLogo", BigLogo)}
        errorMessage={errors.BigLogo?.errorMessage}
        hasError={errors.BigLogo?.hasError}
        {...getOverrideProps(overrides, "BigLogo")}
      ></TextField>
      <TextField
        label="Small logo"
        isRequired={false}
        isReadOnly={false}
        value={SmallLogo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              BigLogo,
              SmallLogo: value,
            };
            const result = onChange(modelFields);
            value = result?.SmallLogo ?? value;
          }
          if (errors.SmallLogo?.hasError) {
            runValidationTasks("SmallLogo", value);
          }
          setSmallLogo(value);
        }}
        onBlur={() => runValidationTasks("SmallLogo", SmallLogo)}
        errorMessage={errors.SmallLogo?.errorMessage}
        hasError={errors.SmallLogo?.hasError}
        {...getOverrideProps(overrides, "SmallLogo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
