import React, { useState, useEffect } from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";


// Framer Motion
import { AnimatePresence,motion } from "framer-motion";


import CustomButton from "./common/CustomButton";

export default function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showModal, setShowModal] = useState(false);

  // Timer Function
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Close / Open Modal
  useEffect(() => {
    if (showModal) {
      onOpen();
    } else {
      onClose();
    }
  }, [showModal, onOpen, onClose]);

  // Button close function
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="scale"
            size="md"
          >
            <ModalOverlay />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
            >
              <ModalContent height="73%" bg="white" borderRadius="25px">
                <ModalCloseButton color="white" />
                <ModalBody
                  display="flex"
                  flexDirection="column"
                  textAlign="center"
                  justifyContent="center"
                >
                  <Image src="/cookie.png" alt="Site Smith Cookie Collector" />
                  <Text as="h1" fontSize="30px" fontFamily="Luckiest guy">
                    We Use Cookies!
                  </Text>
                  <Text as="p" fontFamily="Kanit" color="black" mb="30px">
                    We use cookies so we can improve user experience,
                    analytics, and marketing.
                  </Text>
                  <Box pb="40px">
                    <CustomButton
                      color="white"
                      text="Cool, That's Fine!"
                      backgroundColor="#E04C4C"
                      onClick={handleCloseModal}
                    />
                  </Box>
                </ModalBody>
              </ModalContent>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
