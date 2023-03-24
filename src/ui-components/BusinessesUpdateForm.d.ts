/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Businesses } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BusinessesUpdateFormInputValues = {
    Name?: string;
    Owner?: string;
    Rating?: number;
    TotalReviews?: number;
    Hours?: string;
};
export declare type BusinessesUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Owner?: ValidationFunction<string>;
    Rating?: ValidationFunction<number>;
    TotalReviews?: ValidationFunction<number>;
    Hours?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessesUpdateFormOverridesProps = {
    BusinessesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Owner?: PrimitiveOverrideProps<TextFieldProps>;
    Rating?: PrimitiveOverrideProps<TextFieldProps>;
    TotalReviews?: PrimitiveOverrideProps<TextFieldProps>;
    Hours?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessesUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    businesses?: Businesses;
    onSubmit?: (fields: BusinessesUpdateFormInputValues) => BusinessesUpdateFormInputValues;
    onSuccess?: (fields: BusinessesUpdateFormInputValues) => void;
    onError?: (fields: BusinessesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessesUpdateFormInputValues) => BusinessesUpdateFormInputValues;
    onValidate?: BusinessesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessesUpdateForm(props: BusinessesUpdateFormProps): React.ReactElement;
