import React from 'react';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Heading, HStack, Image, Input, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import LayoutPage from 'src/components/layout';
import Paper from 'src/components/paper';
import { AddIcon } from '@chakra-ui/icons'

const ToDoPage: React.FC = () => {
    return (
        <SimpleGrid p={4} gap={4} templateColumns='repeat(2, 1fr)'>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>Tarefas a fazer</Heading>

                        <Text py='2'>
                            Bem vindo ao seu sistema de gerenciamento de tarefas.
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
            <Card >
                <CardHeader>
                    <Heading size='md'> Adicione sua tarefa aqui!</Heading>
                </CardHeader>
                <CardBody>
                    <HStack spacing={4} align="center" justify="flex-start">
                        <Box p={4} borderRadius="md">
                            <Input placeholder='Adicione sua tarefa' />
                        </Box>
                    </HStack>
                </CardBody>
                <CardFooter>
                    <Box p={4} borderRadius="md">
                        <Button rightIcon={<AddIcon />} colorScheme='blue' variant='solid'>Adicionar</Button>
                    </Box>
                </CardFooter>
            </Card>
        </SimpleGrid>
        // <Paper>
        //     <Heading>Bem-vindo ao To-Do List App</Heading>
        //     <Text fontSize="lg" mt={4}>
        //         Gerencie suas tarefas diárias de forma fácil e eficiente.
        //     </Text>
        //     <HStack spacing={4} align="center" justify="flex-start">
        //         <Box p={4} borderRadius="md">
        //             <Input placeholder='Adicione sua tarefa' />
        //         </Box>
        //         <Box p={4} borderRadius="md">
        //             <Button rightIcon={<AddIcon/>} colorScheme='blue' variant='solid'>Adicionar</Button>
        //         </Box>
        //     </HStack>
        // </Paper>
    );
};
export default ToDoPage;