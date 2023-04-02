/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavsOverridesProps = {
    Navs?: PrimitiveOverrideProps<ViewProps>;
    Logo3121?: PrimitiveOverrideProps<FlexProps>;
    "Star 1"?: PrimitiveOverrideProps<IconProps>;
    Logo3123?: PrimitiveOverrideProps<TextProps>;
    "Nav Links"?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    "akar-icons:chevron-down"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector3130?: PrimitiveOverrideProps<IconProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    Businesses?: PrimitiveOverrideProps<TextProps>;
    "Search Box"?: PrimitiveOverrideProps<FlexProps>;
    "  3134"?: PrimitiveOverrideProps<ViewProps>;
    "  3135"?: PrimitiveOverrideProps<ViewProps>;
    Vector3136?: PrimitiveOverrideProps<IconProps>;
    "Search for businesses"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    Search?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NavsOverridesProps | undefined | null;
}>;
export default function Navs(props: NavsProps): React.ReactElement;
