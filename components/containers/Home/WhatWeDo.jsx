import React from "react";
import {
  Box,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
import Button from '../../common/CustomButton';


const WhatWeDo = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.imageContainer}>
        <Box position={[null, null, 'relative', "relative"]} bottom={['20px','60px']}>
          <Image
            src="/SiteSmithMallet.png"
            justifySelf="flex-end"
            height={["20%", "20%", "50%", "100%", "90%"]}
            position={[null, null, null, "relative"]}
          />
        </Box>
      </Box>

      <Box sx={styles.rightContainer}>
        <hr />
        <Text as="h1" color="#504F50">
          What <br /> We Do
          <IconButton bg="none" />
        </Text>
        <Box sx={styles.contentContainer}>
          <Box display="flex" flexWrap="wrap">
            <Box sx={styles.titleContainer}>
              <Text
                as="h2"
                fontFamily="Roboto"
                fontStyle="italic"
                fontWeight="400"
              >
                We Are Digital
              </Text>
              <Text as="h2" fontFamily="Lobster, cursive" lineHeight="40px">
                <span style={{ color: "#E04C4C" }}>Site Smiths</span> At Your
                Service
              </Text>
            </Box>

            <Box sx={styles.paragraph}>
              <Text as="p">
                Our mission is to create a better digital world and make our
                customers happy. We possess a winning combination of creative,
                technical and people skills that not only make us fun to work
                with, but ensure we get the job done, and done well.
              </Text>

              <Box sx={styles.buttonContainer}>
                <Button text="View Our Work" isSecondary={true} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: ['column', 'column', 'column', 'row'],
    textAlign: "left",
    mt: ['50px', '50px', '50px', '120px', '200px']
  },
  imageContainer: {
    display: "flex",
    alignItems: [null, null, null, null, null, "center"],
    flex: 2,
    zIndex: "0",
    flexDirection: "column",
  },
  rightContainer: {
    flex: 2,
    position: [null, null, null, null, "relative"],
    h1: {
      fontFamily: "Luckiest guy",
      textAlign: "left",
      lineHeight: "30px",
      fontSize: "44px",
      fontWeight: "lighter",
      position: [null, null, null, null, "relative"],
      top: [null, null, null, null],
    },
    hr: {
      width: ["20%", "15%", "10%", "10%"],
      background: "#E04C4C",
      height: "5px",
      mb: "20px",
    },
  },
  titleContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#504F50",
    h2: {
      fontSize: "29px",
      textAlign: "left !important",
      lineHeight: "35px",
    },
  },
  contentContainer: {
    mt: "20px",
    p: {
      mt: "30px",
      textAlign: "left",
      fontSize: "14px",
      fontFamily: "Merriweather",
      fontWeight: "Medium",
    },
  },
  buttonContainer: {
    justifyContent: "left",
    alignSelf: "left",
    display: "flex",
    mt: "40px",
    mb: "80px",
    fontSize: "16px",
  },
};

export default WhatWeDo;
