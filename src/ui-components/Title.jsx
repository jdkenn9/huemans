/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Title(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Title")}
      {...rest}
    >
      <Text
        fontFamily="Lexend"
        fontSize="40px"
        fontWeight="600"
        color="rgba(27,28,87,1)"
        textTransform="capitalize"
        lineHeight="50px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="498px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Discover Minority-Owned Businesses Here!"
        {...getOverrideProps(
          overrides,
          "Discover Minority-Owned Businesses Here!"
        )}
      ></Text>
      <Text
        fontFamily="Lexend"
        fontSize="16px"
        fontWeight="400"
        color="rgba(98,102,135,1)"
        lineHeight="28px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="496px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Want to support minority-owned businesses near you? Everything you need will be here, where it will be easier for you."
        {...getOverrideProps(
          overrides,
          "Want to support minority-owned businesses near you? Everything you need will be here, where it will be easier for you."
        )}
      ></Text>
    </Flex>
  );
}
