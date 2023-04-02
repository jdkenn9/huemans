/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavMenuOptionsOverridesProps = {
    NavMenuOptions?: PrimitiveOverrideProps<ViewProps>;
    "Menu Open"?: PrimitiveOverrideProps<IconProps>;
    "Log out"?: PrimitiveOverrideProps<TextProps>;
    Settings?: PrimitiveOverrideProps<TextProps>;
    "My Reviews"?: PrimitiveOverrideProps<TextProps>;
    Account?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavMenuOptionsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NavMenuOptionsOverridesProps | undefined | null;
}>;
export default function NavMenuOptions(props: NavMenuOptionsProps): React.ReactElement;
