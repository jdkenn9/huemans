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
export default function BusinessesCreateForm(props) {
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
    Name: "",
    Owner: "",
    Rating: "",
    TotalReviews: "",
    Hours: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Owner, setOwner] = React.useState(initialValues.Owner);
  const [Rating, setRating] = React.useState(initialValues.Rating);
  const [TotalReviews, setTotalReviews] = React.useState(
    initialValues.TotalReviews
  );
  const [Hours, setHours] = React.useState(initialValues.Hours);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setOwner(initialValues.Owner);
    setRating(initialValues.Rating);
    setTotalReviews(initialValues.TotalReviews);
    setHours(initialValues.Hours);
    setErrors({});
  };
  const validations = {
    Name: [],
    Owner: [],
    Rating: [],
    TotalReviews: [],
    Hours: [],
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
          Owner,
          Rating,
          TotalReviews,
          Hours,
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
          await DataStore.save(new Businesses(modelFields));
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
      {...getOverrideProps(overrides, "BusinessesCreateForm")}
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
              Owner,
              Rating,
              TotalReviews,
              Hours,
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
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        value={Owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Owner: value,
              Rating,
              TotalReviews,
              Hours,
            };
            const result = onChange(modelFields);
            value = result?.Owner ?? value;
          }
          if (errors.Owner?.hasError) {
            runValidationTasks("Owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("Owner", Owner)}
        errorMessage={errors.Owner?.errorMessage}
        hasError={errors.Owner?.hasError}
        {...getOverrideProps(overrides, "Owner")}
      ></TextField>
      <TextField
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Rating}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              Owner,
              Rating: value,
              TotalReviews,
              Hours,
            };
            const result = onChange(modelFields);
            value = result?.Rating ?? value;
          }
          if (errors.Rating?.hasError) {
            runValidationTasks("Rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("Rating", Rating)}
        errorMessage={errors.Rating?.errorMessage}
        hasError={errors.Rating?.hasError}
        {...getOverrideProps(overrides, "Rating")}
      ></TextField>
      <TextField
        label="Total reviews"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TotalReviews}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              Owner,
              Rating,
              TotalReviews: value,
              Hours,
            };
            const result = onChange(modelFields);
            value = result?.TotalReviews ?? value;
          }
          if (errors.TotalReviews?.hasError) {
            runValidationTasks("TotalReviews", value);
          }
          setTotalReviews(value);
        }}
        onBlur={() => runValidationTasks("TotalReviews", TotalReviews)}
        errorMessage={errors.TotalReviews?.errorMessage}
        hasError={errors.TotalReviews?.hasError}
        {...getOverrideProps(overrides, "TotalReviews")}
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
              Owner,
              Rating,
              TotalReviews,
              Hours: value,
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
