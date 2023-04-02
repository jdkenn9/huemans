/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Logo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HuemansLogoOverridesProps = {
    HuemansLogo?: PrimitiveOverrideProps<ViewProps>;
    "Hueman Logo 3"?: PrimitiveOverrideProps<ImageProps>;
    logo?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type HuemansLogoProps = React.PropsWithChildren<Partial<ViewProps> & {
    logo?: Logo;
} & {
    overrides?: HuemansLogoOverridesProps | undefined | null;
}>;
export default function HuemansLogo(props: HuemansLogoProps): React.ReactElement;
