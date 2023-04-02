/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function HuemansLogo(props) {
  const { logo, overrides, ...rest } = props;
  return (
    <View
      width="302px"
      height="82px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HuemansLogo")}
      {...rest}
    >
      <Image
        width="254px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="17px"
        left="48px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={logo?.HuemansSmall}
        {...getOverrideProps(overrides, "Hueman Logo 3")}
      ></Image>
      <View
        padding="0px 0px 0px 0px"
        width="36px"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="22px"
        left="32px"
        {...getOverrideProps(overrides, "logo")}
      >
        <View
          width="32px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="4px 4px 24px 4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,226,185,1)"
          {...getOverrideProps(overrides, "Rectangle 8")}
        ></View>
        <View
          width="32px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4px"
          left="4px"
          borderRadius="4px 4px 24px 4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(174,115,75,1)"
          {...getOverrideProps(overrides, "Rectangle 9")}
        ></View>
      </View>
    </View>
  );
}
