// components/Paper.tsx
import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

const Paper: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      p={6}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      {...props}
    >
      {children}
    </Box>
  );
};

export default Paper;
