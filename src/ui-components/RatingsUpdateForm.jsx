/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Ratings } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RatingsUpdateForm(props) {
  const {
    id: idProp,
    ratings: ratingsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Rating: "",
    Review: "",
  };
  const [Rating, setRating] = React.useState(initialValues.Rating);
  const [Review, setReview] = React.useState(initialValues.Review);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ratingsRecord
      ? { ...initialValues, ...ratingsRecord }
      : initialValues;
    setRating(cleanValues.Rating);
    setReview(cleanValues.Review);
    setErrors({});
  };
  const [ratingsRecord, setRatingsRecord] = React.useState(ratingsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Ratings, idProp)
        : ratingsModelProp;
      setRatingsRecord(record);
    };
    queryData();
  }, [idProp, ratingsModelProp]);
  React.useEffect(resetStateValues, [ratingsRecord]);
  const validations = {
    Rating: [],
    Review: [],
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
          Rating,
          Review,
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
            Ratings.copyOf(ratingsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "RatingsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Rating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Rating: value,
              Review,
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
        label="Review"
        isRequired={false}
        isReadOnly={false}
        value={Review}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Rating,
              Review: value,
            };
            const result = onChange(modelFields);
            value = result?.Review ?? value;
          }
          if (errors.Review?.hasError) {
            runValidationTasks("Review", value);
          }
          setReview(value);
        }}
        onBlur={() => runValidationTasks("Review", Review)}
        errorMessage={errors.Review?.errorMessage}
        hasError={errors.Review?.hasError}
        {...getOverrideProps(overrides, "Review")}
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
          isDisabled={!(idProp || ratingsModelProp)}
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
              !(idProp || ratingsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
