/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SuggestedBusinessesOverridesProps = {
    SuggestedBusinesses?: PrimitiveOverrideProps<FlexProps>;
    "Frame 10"?: PrimitiveOverrideProps<FlexProps>;
    Img?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 13199"?: PrimitiveOverrideProps<FlexProps>;
    "ant-design:fire-filled"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Popular?: PrimitiveOverrideProps<TextProps>;
    "Nama rumah, harga"?: PrimitiveOverrideProps<FlexProps>;
    "Business Name"?: PrimitiveOverrideProps<TextProps>;
    "\u2605\u2605\u2605\u2605\u2605"?: PrimitiveOverrideProps<TextProps>;
    "Frame 131916"?: PrimitiveOverrideProps<FlexProps>;
    "Nama, Pekerjaan"?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 6"?: PrimitiveOverrideProps<IconProps>;
    "Frame 131919"?: PrimitiveOverrideProps<FlexProps>;
    User?: PrimitiveOverrideProps<TextProps>;
    "City, State"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SuggestedBusinessesProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SuggestedBusinessesOverridesProps | undefined | null;
}>;
export default function SuggestedBusinesses(props: SuggestedBusinessesProps): React.ReactElement;
