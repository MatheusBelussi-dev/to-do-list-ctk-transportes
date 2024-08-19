
import React from 'react';
import { Box, Divider, Flex } from '@chakra-ui/react';
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
          ml={{ base: 0, md: "250px" }} 
          mt="40px" 
          p={4}
          w="full"
          minH="100vh"
          bg="gray.300" 
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
