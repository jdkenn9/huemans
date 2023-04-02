/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterOverridesProps = {
    Footer?: PrimitiveOverrideProps<ViewProps>;
    Vector19134?: PrimitiveOverrideProps<IconProps>;
    Vector19135?: PrimitiveOverrideProps<IconProps>;
    Footer19108?: PrimitiveOverrideProps<ViewProps>;
    Bio?: PrimitiveOverrideProps<ViewProps>;
    "We provide information about businesses such as restaurants, salons, boutiques, and more to help people support minority-owned businesses."?: PrimitiveOverrideProps<TextProps>;
    "Frame 20"?: PrimitiveOverrideProps<FlexProps>;
    "brandico:facebook"?: PrimitiveOverrideProps<ViewProps>;
    Vector19113?: PrimitiveOverrideProps<IconProps>;
    "ant-design:twitter-outlined"?: PrimitiveOverrideProps<ViewProps>;
    Vector19115?: PrimitiveOverrideProps<IconProps>;
    "ant-design:instagram-filled"?: PrimitiveOverrideProps<ViewProps>;
    Vector19117?: PrimitiveOverrideProps<IconProps>;
    Property?: PrimitiveOverrideProps<ViewProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    "Our mission"?: PrimitiveOverrideProps<TextProps>;
    "the team"?: PrimitiveOverrideProps<TextProps>;
    FAQ?: PrimitiveOverrideProps<TextProps>;
    Article?: PrimitiveOverrideProps<ViewProps>;
    Articles?: PrimitiveOverrideProps<TextProps>;
    "Business Articles"?: PrimitiveOverrideProps<TextProps>;
    "Popular Article"?: PrimitiveOverrideProps<TextProps>;
    "tips & tricks"?: PrimitiveOverrideProps<TextProps>;
    Contact19129?: PrimitiveOverrideProps<ViewProps>;
    Contact19130?: PrimitiveOverrideProps<TextProps>;
    "2400 6th St NW, Washington, DC 20059"?: PrimitiveOverrideProps<TextProps>;
    "(202) 806-6100"?: PrimitiveOverrideProps<TextProps>;
    "info@huemans.com"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
