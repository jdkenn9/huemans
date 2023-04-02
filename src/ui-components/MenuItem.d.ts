/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenuItemOverridesProps = {
    MenuItem?: PrimitiveOverrideProps<ViewProps>;
    "Group 14"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 10319"?: PrimitiveOverrideProps<FlexProps>;
    "Group 153113"?: PrimitiveOverrideProps<FlexProps>;
    "Menu Item316"?: PrimitiveOverrideProps<TextProps>;
    "Group 153114"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 103115"?: PrimitiveOverrideProps<FlexProps>;
    "Group 153116"?: PrimitiveOverrideProps<FlexProps>;
    "Menu Item3117"?: PrimitiveOverrideProps<TextProps>;
    "Menu Item314"?: PrimitiveOverrideProps<TextProps>;
    "Menu Item315"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MenuItemProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MenuItemOverridesProps | undefined | null;
}>;
export default function MenuItem(props: MenuItemProps): React.ReactElement;
