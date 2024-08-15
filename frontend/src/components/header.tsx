// src/components/Header.tsx
import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box
      bg="blue.500"
      color="white"
      p={4}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10} // Definindo um zIndex alto para garantir que o header esteja acima de outros elementos
    >
      <Flex align="center" justify="flex-start">
        <Heading size="lg">To-Do List App</Heading>
        <Text>Header Content</Text> {/* You can add more elements or navigation links here */}
      </Flex>
    </Box>
  );
};

export default Header;
