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
export declare type LogosCreateFormInputValues = {
    BigLogo?: string;
    SmallLogo?: string;
};
export declare type LogosCreateFormValidationValues = {
    BigLogo?: ValidationFunction<string>;
    SmallLogo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogosCreateFormOverridesProps = {
    LogosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    BigLogo?: PrimitiveOverrideProps<TextFieldProps>;
    SmallLogo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LogosCreateFormProps = React.PropsWithChildren<{
    overrides?: LogosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LogosCreateFormInputValues) => LogosCreateFormInputValues;
    onSuccess?: (fields: LogosCreateFormInputValues) => void;
    onError?: (fields: LogosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LogosCreateFormInputValues) => LogosCreateFormInputValues;
    onValidate?: LogosCreateFormValidationValues;
} & React.CSSProperties>;
export default function LogosCreateForm(props: LogosCreateFormProps): React.ReactElement;
