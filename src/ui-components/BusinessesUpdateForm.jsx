/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Businesses } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BusinessesUpdateForm(props) {
  const {
    id: idProp,
    businesses: businessesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    Hours: "",
    BusinessImage: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Hours, setHours] = React.useState(initialValues.Hours);
  const [BusinessImage, setBusinessImage] = React.useState(
    initialValues.BusinessImage
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = businessesRecord
      ? { ...initialValues, ...businessesRecord }
      : initialValues;
    setName(cleanValues.Name);
    setHours(cleanValues.Hours);
    setBusinessImage(cleanValues.BusinessImage);
    setErrors({});
  };
  const [businessesRecord, setBusinessesRecord] =
    React.useState(businessesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Businesses, idProp)
        : businessesModelProp;
      setBusinessesRecord(record);
    };
    queryData();
  }, [idProp, businessesModelProp]);
  React.useEffect(resetStateValues, [businessesRecord]);
  const validations = {
    Name: [],
    Hours: [],
    BusinessImage: [],
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
          Name,
          Hours,
          BusinessImage,
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
          await DataStore.save(
            Businesses.copyOf(businessesRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BusinessesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Hours,
              BusinessImage,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Hours"
        isRequired={false}
        isReadOnly={false}
        value={Hours}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Hours: value,
              BusinessImage,
            };
            const result = onChange(modelFields);
            value = result?.Hours ?? value;
          }
          if (errors.Hours?.hasError) {
            runValidationTasks("Hours", value);
          }
          setHours(value);
        }}
        onBlur={() => runValidationTasks("Hours", Hours)}
        errorMessage={errors.Hours?.errorMessage}
        hasError={errors.Hours?.hasError}
        {...getOverrideProps(overrides, "Hours")}
      ></TextField>
      <TextField
        label="Business image"
        isRequired={false}
        isReadOnly={false}
        value={BusinessImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Hours,
              BusinessImage: value,
            };
            const result = onChange(modelFields);
            value = result?.BusinessImage ?? value;
          }
          if (errors.BusinessImage?.hasError) {
            runValidationTasks("BusinessImage", value);
          }
          setBusinessImage(value);
        }}
        onBlur={() => runValidationTasks("BusinessImage", BusinessImage)}
        errorMessage={errors.BusinessImage?.errorMessage}
        hasError={errors.BusinessImage?.hasError}
        {...getOverrideProps(overrides, "BusinessImage")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || businessesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || businessesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
