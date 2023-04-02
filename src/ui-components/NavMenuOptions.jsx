/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function NavMenuOptions(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="85px"
      height="154px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NavMenuOptions")}
      {...rest}
    >
      <Icon
        width="77px"
        height="154px"
        viewBox={{ minX: 0, minY: 0, width: 77, height: 154 }}
        paths={[
          {
            d: "M0 0L77 0L77 154L0 154L0 0Z",
            fill: "rgba(255,212,150,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="4.71%"
        right="4.71%"
        {...getOverrideProps(overrides, "Menu Open")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="13.079999923706055px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="84px"
        height="7px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="76.62%"
        bottom="18.83%"
        left="0%"
        right="1.18%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Log out"
        {...getOverrideProps(overrides, "Log out")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="13.079999923706055px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="84px"
        height="7px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="54.55%"
        bottom="40.91%"
        left="0%"
        right="1.18%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Settings"
        {...getOverrideProps(overrides, "Settings")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="13.079999923706055px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="84px"
        height="7px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="29.87%"
        bottom="65.58%"
        left="1.18%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="My Reviews"
        {...getOverrideProps(overrides, "My Reviews")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="13.079999923706055px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="67px"
        height="10px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="8.44%"
        bottom="85.06%"
        left="10.59%"
        right="10.59%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Account"
        {...getOverrideProps(overrides, "Account")}
      ></Text>
    </View>
  );
}
