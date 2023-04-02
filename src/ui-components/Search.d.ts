/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchOverridesProps = {
    Search?: PrimitiveOverrideProps<FlexProps>;
    "fluent:location-16-filled"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector1104?: PrimitiveOverrideProps<IconProps>;
    "Search for the business you want!"?: PrimitiveOverrideProps<TextProps>;
    "Search button"?: PrimitiveOverrideProps<FlexProps>;
    Search1107?: PrimitiveOverrideProps<TextProps>;
    "eva:arrow-ios-forward-fill"?: PrimitiveOverrideProps<ViewProps>;
    Vector1109?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SearchProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SearchOverridesProps | undefined | null;
}>;
export default function Search(props: SearchProps): React.ReactElement;
