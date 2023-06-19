"use client";


import React, { useState, useEffect } from "react";
import * as Scroll from "react-scroll";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorMode,
  Image,
  Link as ChakraLink,
  UnorderedList,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from "./DesktopStyles";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = useState(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [bgColor, setBgColor] = useState(null);
//   const [logoColor, setLogoColor] = useState("./assets/images/Logo.png");

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ScrollLink = Scroll.Link;

  return (
    <Box as="nav">
      <Flex
        alignItems="center"
        justifyContent="center"
        wrap="wrap"
        bg={bgColor}
        padding="20px"
        borderRadius="20px"
        color="white"
        position="sticky"
        transition="background-color 0.5s ease-out"
        top={90}
        right={0}
        left={0}
        zIndex={4}
        display={["flex", "flex", "flex", "flex", "none"]}
      >
        <Box display={{ sm: "block", xl: "none" }} onClick={onOpen}>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Toggle navigation"
            color="black"
            background="none"
            transition="all 0.5s ease-in-out"
            _hover={{ transform: "scale(1.1)" }}
            onClick={() => setShow(!show)}
            fontSize="25px"
            mt="20px"
            position="relative"
            bottom={["10px"]}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Image
          src='/Logo.png'
            transition="src 0.5s ease-in"
            alt="Something"
            height="50%"
            width="50%"
            alignSelf="center"
            position="relative"
            right={["25px"]}
          />
        </Box>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={null}
        >
          <DrawerOverlay />
          <DrawerContent bg="#E04C4C">
            <DrawerCloseButton color="orange" />
            <DrawerBody
              display="flex"
              flexDirection="column"
              fontSize={"35px"}
              padding={"30px"}
              margin={"30px"}
              color="white"
              bg="#E04C4C"
              borderRadius="20px"
              fontFamily="bangers"
            >
              <ScrollLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                cursor="pointer"
                color="black"
              >
                Home
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                cursor="pointer"
              >
                About Us
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                cursor="pointer"
              >
                Services
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                cursor="pointer"
              >
                Contact Us
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                cursor="pointer"
              >
                Submissions
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                cursor="pointer"
              >
                Gallery
              </ScrollLink>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Flex align="center"></Flex>
        <Box display={{ sm: "block", md: "block" }}>
          <IconButton
            icon="moon"
            display="none"
            onClick={toggleColorMode}
            transition="all 0.3s ease-in-out"
            _hover={{ transform: "scale(1.1)" }}
          />
        </Box>
      </Flex>



    {/* Desktop Nav */}

      <Flex sx={styles.container}>
        <Flex sx={styles.leftContainer}>
          <Image
            src="Logo.png"
            alt="Site Smiths Logo"
            height={["50%", "50%", "50%", "50%"]}
          />
        </Flex>

        <Spacer />

        <Flex sx={styles.rightContainer}>
          <UnorderedList display="flex" listStyleType='none'>
            <ListItem mr="20px" padding="10px 8px">
              Home
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
              About
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
              Services
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
              Contact
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
              Gallery
            </ListItem>
            <ListItem mr="20px" padding="10px 8px">
              FAQ
            </ListItem>
            <ListItem>
              <ChakraLink
                bg="#E04C4C"
                color="#ffff"
                padding="10px 8px"
                href="#"
              >
                Get A Quote
              </ChakraLink>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
