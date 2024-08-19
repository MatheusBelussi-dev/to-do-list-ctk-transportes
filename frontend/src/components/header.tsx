
import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box
      bg="black"
      color="white"
      p={4}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10} 
    >
      <Flex align="center" justify="center">
        <Heading size="lg" alignContent={'center'} >Tarefas a fazer</Heading>
      </Flex>
    </Box>
  );
};

export default Header;
