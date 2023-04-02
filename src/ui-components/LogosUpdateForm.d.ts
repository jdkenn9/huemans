/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Logos } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LogosUpdateFormInputValues = {
    BigLogo?: string;
    SmallLogo?: string;
};
export declare type LogosUpdateFormValidationValues = {
    BigLogo?: ValidationFunction<string>;
    SmallLogo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogosUpdateFormOverridesProps = {
    LogosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    BigLogo?: PrimitiveOverrideProps<TextFieldProps>;
    SmallLogo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LogosUpdateFormProps = React.PropsWithChildren<{
    overrides?: LogosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    logos?: Logos;
    onSubmit?: (fields: LogosUpdateFormInputValues) => LogosUpdateFormInputValues;
    onSuccess?: (fields: LogosUpdateFormInputValues) => void;
    onError?: (fields: LogosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LogosUpdateFormInputValues) => LogosUpdateFormInputValues;
    onValidate?: LogosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LogosUpdateForm(props: LogosUpdateFormProps): React.ReactElement;
