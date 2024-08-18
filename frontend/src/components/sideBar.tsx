// src/components/Sidebar.tsx
import React from 'react';
import { Box, VStack, Link, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, IconButton, Divider } from '@chakra-ui/react';
import { FaHome, FaTasks, FaUser, FaBars } from 'react-icons/fa';
import { HamburgerIcon } from '@chakra-ui/icons'

const Sidebar: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                display={{ base: 'block', md: 'none' }} // Exibe o menu em telas pequenas
                pos="fixed"
                top="0"
                left="0"
                zIndex={20}
                p={4}
            >
                <IconButton
                    aria-label="Open Sidebar"
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                size="md"
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>
                        <DrawerBody>
                            <VStack spacing={4} align="start">
                                <Link href="#"><FaHome /> Home</Link>
                                <Link href="#"><FaTasks /> Tasks</Link>
                                <Link href="#"><FaUser /> Profile</Link>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

            <Box
                as="nav"
                display={{ base: 'none', md: 'block' }} // Exibe o sidebar em telas maiores
                w="250px"
                pos="fixed"
                top="65px" // Ajuste para ficar abaixo do header
                left={0}
                bottom={0}
                bg="black"
                color="white"
                p={4}
                overflowY="auto" // Permite rolar se o conteúdo for maior que a altura do sidebar
            >
                <VStack spacing={4} align="start">
                <Link href="#"> {<FaHome />} Sobre o projeto</Link>
                <Link href="#"><FaTasks />Perfil</Link>
                </VStack>
            </Box>
        </>
    );
};

export default Sidebar;
