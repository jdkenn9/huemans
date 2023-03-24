/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BusinessesCreateFormInputValues = {
    Name?: string;
    Owner?: string;
    Rating?: number;
    TotalReviews?: number;
    Hours?: string;
};
export declare type BusinessesCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Owner?: ValidationFunction<string>;
    Rating?: ValidationFunction<number>;
    TotalReviews?: ValidationFunction<number>;
    Hours?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessesCreateFormOverridesProps = {
    BusinessesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Owner?: PrimitiveOverrideProps<TextFieldProps>;
    Rating?: PrimitiveOverrideProps<TextFieldProps>;
    TotalReviews?: PrimitiveOverrideProps<TextFieldProps>;
    Hours?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessesCreateFormProps = React.PropsWithChildren<{
    overrides?: BusinessesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BusinessesCreateFormInputValues) => BusinessesCreateFormInputValues;
    onSuccess?: (fields: BusinessesCreateFormInputValues) => void;
    onError?: (fields: BusinessesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessesCreateFormInputValues) => BusinessesCreateFormInputValues;
    onValidate?: BusinessesCreateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessesCreateForm(props: BusinessesCreateFormProps): React.ReactElement;
