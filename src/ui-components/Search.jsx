/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Search(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="496px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(224,227,235,1)"
      borderRadius="32px"
      padding="3px 3px 3px 23px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Search")}
      {...rest}
    >
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "fluent:location-16-filled")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="18px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4.17%"
          bottom="4.17%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "Group")}
        >
          <Icon
            width="18px"
            height="22px"
            viewBox={{ minX: 0, minY: 0, width: 18, height: 22 }}
            paths={[
              {
                d: "M9 0C11.3869 2.79144e-15 13.6761 0.993372 15.364 2.76159C17.0518 4.5298 18 6.92801 18 9.42865C18 13.934 15.0975 18.081 9.402 21.8776C9.28181 21.9575 9.14237 22 9 22C8.85763 22 8.71819 21.9575 8.598 21.8776C2.9025 18.081 0 13.934 0 9.42865C1.33227e-15 6.92801 0.948211 4.5298 2.63604 2.76159C4.32387 0.993372 6.61305 6.9786e-16 9 0L9 0ZM9 6.28576C8.20435 6.28576 7.44129 6.61689 6.87868 7.20629C6.31607 7.7957 6 8.5951 6 9.42865C6 10.2622 6.31607 11.0616 6.87868 11.651C7.44129 12.2404 8.20435 12.5715 9 12.5715C9.79565 12.5715 10.5587 12.2404 11.1213 11.651C11.6839 11.0616 12 10.2622 12 9.42865C12 8.5951 11.6839 7.7957 11.1213 7.20629C10.5587 6.61689 9.79565 6.28576 9 6.28576L9 6.28576Z",
                fill: "rgba(245,158,11,1)",
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
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector1104")}
          ></Icon>
        </View>
      </View>
      <Text
        fontFamily="Lexend"
        fontSize="14px"
        fontWeight="500"
        color="rgba(136,139,151,1)"
        lineHeight="22px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Search for the business you want!"
        {...getOverrideProps(overrides, "Search for the business you want!")}
      ></Text>
      <Flex
        gap="4px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="32px"
        padding="12px 16px 12px 16px"
        backgroundColor="rgba(16,185,129,1)"
        {...getOverrideProps(overrides, "Search button")}
      >
        <Text
          fontFamily="Lexend"
          fontSize="14px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="22px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search"
          {...getOverrideProps(overrides, "Search1107")}
        ></Text>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "eva:arrow-ios-forward-fill")}
        >
          <Icon
            width="7px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 7, height: 14 }}
            paths={[
              {
                d: "M0.993352 13.9982C0.761661 13.9987 0.537126 13.9175 0.358724 13.7687C0.258315 13.6849 0.175316 13.5821 0.114479 13.466C0.0536416 13.3499 0.0161625 13.2229 0.00418798 13.0922C-0.00778654 12.9615 0.00597897 12.8297 0.0446958 12.7044C0.0834126 12.5791 0.146319 12.4626 0.229814 12.3618L4.67221 7.01368L0.388472 1.65557C0.306104 1.5535 0.244592 1.43607 0.207475 1.31001C0.170357 1.18395 0.158365 1.05175 0.172187 0.921013C0.186009 0.790274 0.225373 0.663573 0.288017 0.548193C0.35066 0.432812 0.435349 0.331026 0.537213 0.248686C0.639811 0.157851 0.75996 0.0893352 0.89012 0.0474391C1.02028 0.00554297 1.15764 -0.00882886 1.29359 0.00522486C1.42953 0.0192786 1.56112 0.0614548 1.68009 0.129107C1.79907 0.196758 1.90286 0.288425 1.98496 0.398354L6.77442 6.38508C6.92027 6.56362 7 6.78756 7 7.01867C7 7.24979 6.92027 7.47373 6.77442 7.65227L1.81639 13.639C1.71691 13.7597 1.59055 13.8552 1.44755 13.9176C1.30455 13.98 1.14894 14.0076 0.993352 13.9982Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="79.17%"
            bottom="-37.5%"
            left="37.5%"
            right="33.33%"
            {...getOverrideProps(overrides, "Vector1109")}
          ></Icon>
        </View>
      </Flex>
    </Flex>
  );
}
