// src/components/Layout.tsx
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './sideBar';
import Header from './header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <br/>
      <Flex>
        <Sidebar />
        <Box
          ml={{ base: 0, md: "250px" }} // Largura do sidebar em telas maiores
          mt="40px" // Espaço para o header
          p={4}
          w="full"
          minH="100vh"
          bg="gray.300" // Adicione uma cor de fundo para o conteúdo principal
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
