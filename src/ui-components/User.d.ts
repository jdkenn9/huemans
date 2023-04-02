/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserOverridesProps = {
    User?: PrimitiveOverrideProps<FlexProps>;
    "Title, review"?: PrimitiveOverrideProps<FlexProps>;
    "Nadine\u2019s Hair Braiding"?: PrimitiveOverrideProps<TextProps>;
    "Nadine's Hair Braiding is truly a GAME CHANGER! I looked at my watch at 5:26 am as the 2 installers were prepping the hair. I was told \"Ma'am, you're done\" at 6:16 am. The 3.5 hours of time I got back was invaluable. Check them out, so you can look great AND save time."?: PrimitiveOverrideProps<TextProps>;
    Info?: PrimitiveOverrideProps<FlexProps>;
    "Frame 15776"?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 6"?: PrimitiveOverrideProps<IconProps>;
    "Nama, Pekerjaan"?: PrimitiveOverrideProps<FlexProps>;
    "Dianne Russell"?: PrimitiveOverrideProps<TextProps>;
    "Washington, D.C."?: PrimitiveOverrideProps<TextProps>;
    "Frame 15781"?: PrimitiveOverrideProps<FlexProps>;
    "bx:bxs-star"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "4.6"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UserProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UserOverridesProps | undefined | null;
}>;
export default function User(props: UserProps): React.ReactElement;
