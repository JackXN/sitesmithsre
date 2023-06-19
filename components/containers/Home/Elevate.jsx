import React from "react";
import { Box, Text, Link, Image } from "@chakra-ui/react";
import Button from "../../common/CustomButton";

const ShowCaseSection = () => {
  return (
    <Box sx={styles.showcaseContainer}>
      <Box sx={styles.leftContainer}>
        <figure className="overflow-y-auto overflow-x-hidden h-[550px] w-full lg:max-w-lg mx-auto relative scrollbar-hide header-img mt-10" style={styles.figure}>
          <Image src="/showcaseImage.png" alt="Site Smiths Project Showcase" borderRadius="20px" />
        </figure>

        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" mt={["64px"]} fontSize="20px" fontFamily="Merriweather" fontWeight="medium">
          <Text as="p" mr="10px" color='lightgray' position='relative' bottom='30px'>
            (Image is scrollable)
          </Text>
        </Box>
      </Box>

      <Box sx={styles.rightContainer}>
        <Box sx={styles.headerTwo}>
          <hr />
          <Text as="h1" color="#504F50">
            Elevate Your business With a Professional
            Online presence
          </Text>
        </Box>

        <Box sx={styles.infoContainer}>
          <Text as="p">
            Looking to take your business to the next level? Consider leveraging
            the power of a professional online service. With the right partner,
            you can optimize your digital presence, streamline your operations,
            and connect with customers like never before. Whether you're a
            startup looking to establish a foothold or an established business
            seeking to expand, there's never been a better time to elevate your
            brand and grow your bottom line with a professional online service.
            So what are you waiting for? Explore your options today and take
            your business to new heights!
          </Text>
        </Box>

        <Box sx={styles.buttonContainer}>
          <Button text="Read More" />
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  showcaseContainer: {
    mt: ["150px"],
    display: "flex",
    flexDirection: ["column", "column", "column", "row", "row"],
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    ml: ['50px']
  },
  figure: {
    transform: "rotateX(20deg)",
    boxShadow: "4px 8px 24px rgba(0,0,0,.3)",
    borderRadius: "20px",
    transition: ".24s",
  },
  headerTwo: {
    fontSize: "30px",
    h1: {
      fontFamily: "Luckiest guy",
      textAlign: "left",
      lineHeight: ["50px", "50px", "50px"],
      fontSize: ["44px", "44px", "44px", "44px"],
      fontWeight: "lighter",
      color: "#504F50",
    },
    hr: {
      width: ["20%", "15%", "10%", "10%"],
      background: "#E04C4C",
      height: "5px",
      mb: ["20px"],
      right: ["68px", "68px", "78px", "40px"],
      top: [null, null, null, null, "90px", "150px"],
    },
  },
  infoContainer: {
    p: {
      mt: ["30px"],
      mb: "40px",
      textAlign: "left",
      fontSize: ["14px"],
      fontFamily: "Merriweather",
      fontWeight: "medium",
    },
  },
  buttonContainer: {
    mt: ["40px"],
    mb: ["80px"],
    fontSize: ["30px"],
  },
};

export default ShowCaseSection;
