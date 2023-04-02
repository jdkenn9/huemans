/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderOverridesProps = {
    Header?: PrimitiveOverrideProps<ViewProps>;
    Logo?: PrimitiveOverrideProps<ViewProps>;
    logo?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
    "Hueman Logo 2"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 101974"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    "Frame 9"?: PrimitiveOverrideProps<FlexProps>;
    "About us"?: PrimitiveOverrideProps<TextProps>;
    "Frame 1028146"?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    "Frame 7"?: PrimitiveOverrideProps<FlexProps>;
    Favorites?: PrimitiveOverrideProps<TextProps>;
    "Frame 8"?: PrimitiveOverrideProps<FlexProps>;
    Businesses?: PrimitiveOverrideProps<TextProps>;
    "eva:arrow-ios-forward-fill"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Frame 101983"?: PrimitiveOverrideProps<FlexProps>;
    "Sign Up"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeaderOverridesProps | undefined | null;
}>;
export default function Header(props: HeaderProps): React.ReactElement;
