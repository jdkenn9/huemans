/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Ratings } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RatingsUpdateFormInputValues = {
    Rating?: number;
    Review?: string;
};
export declare type RatingsUpdateFormValidationValues = {
    Rating?: ValidationFunction<number>;
    Review?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RatingsUpdateFormOverridesProps = {
    RatingsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Rating?: PrimitiveOverrideProps<TextFieldProps>;
    Review?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RatingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: RatingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ratings?: Ratings;
    onSubmit?: (fields: RatingsUpdateFormInputValues) => RatingsUpdateFormInputValues;
    onSuccess?: (fields: RatingsUpdateFormInputValues) => void;
    onError?: (fields: RatingsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RatingsUpdateFormInputValues) => RatingsUpdateFormInputValues;
    onValidate?: RatingsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RatingsUpdateForm(props: RatingsUpdateFormProps): React.ReactElement;
