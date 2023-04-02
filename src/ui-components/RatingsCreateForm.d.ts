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
export declare type RatingsCreateFormInputValues = {
    Rating?: number;
    Review?: string;
};
export declare type RatingsCreateFormValidationValues = {
    Rating?: ValidationFunction<number>;
    Review?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RatingsCreateFormOverridesProps = {
    RatingsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Rating?: PrimitiveOverrideProps<TextFieldProps>;
    Review?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RatingsCreateFormProps = React.PropsWithChildren<{
    overrides?: RatingsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RatingsCreateFormInputValues) => RatingsCreateFormInputValues;
    onSuccess?: (fields: RatingsCreateFormInputValues) => void;
    onError?: (fields: RatingsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RatingsCreateFormInputValues) => RatingsCreateFormInputValues;
    onValidate?: RatingsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RatingsCreateForm(props: RatingsCreateFormProps): React.ReactElement;
