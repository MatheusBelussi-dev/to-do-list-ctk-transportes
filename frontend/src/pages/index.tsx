import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    HStack,
    Image,
    Input,
    Select,
    SimpleGrid,
    Stack,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Toast,
    Tr,
    useToast
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Paper from '@/components/paper';

interface TodoInput {
    id: number;
    task?: string;
    user?: string;
    type: string;
    priority: string;
}

const ToDoPage: React.FC = () => {
    const [formTask, setFormTask] = useState<TodoInput>({
        id: 0,
        task: "",
        user: "",
        type: "",
        priority: ""
    });

    const [tasks, setTasks] = useState<TodoInput[]>([]);
    const toast = useToast();
    const [isEditing, setIsEditing] = useState(false);
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);


    const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormTask(prevTodo => ({ ...prevTodo, [name]: value }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTask = e.target.value;
        setFormTask(prevTodo => ({ ...prevTodo, task: selectedTask }));
    };

    const handleEdit = (id: number) => {
        const taskToEdit = tasks.find(task => task.id === id);
        if (taskToEdit) {
            setFormTask(taskToEdit);
            setIsEditing(true);       
            setEditingTaskId(id);     
        }
    };


    const handleUpdate = () => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === formTask.id ? { ...formTask } : task
            )
        );
        setFormTask({ id: 0, task: "", user: "", type: "", priority: "" });
    };

    const handleDelete = (id: number) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };


    const handleSubmit = () => {
        if (!formTask.task || !formTask.user || !formTask.type || !formTask.priority) {
            toast({
                title: "Preencha todos os campos.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        if (formTask.id) {
            handleUpdate();
        } else {
            setTasks(prevTasks => [
                ...prevTasks,
                { ...formTask, id: Date.now() }  
            ]);
        }

        setFormTask({ id: 0, task: "", user: "", type: "", priority: "" });
    };

    return (
        <>
            <SimpleGrid p={4} gap={4} templateColumns='repeat(2, 1fr)'>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    size={{ base: "sm", md: "md" }}
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
                            <Text py='2'>
                                1.Descreva a tarefa que deseja inserir no sistema.
                            </Text>
                            <Text py='2'>
                                2.Adicione a sua tarefa.
                            </Text>
                            <Text py='2'>
                                3.Defina o prazo de conclusão.
                            </Text>
                            <Text py='2'>
                                4.Acompanhe a tarefa pelo dashboard.
                            </Text>

                        </CardBody>
                    </Stack>
                </Card>
                <Card  size={{ base: "sm", md: "md" }}>
                    <CardHeader>
                        <Heading size='md'> Adicione sua tarefa aqui!</Heading>
                    </CardHeader>
                    <CardBody>
                        <HStack spacing={20} align="center" justify="space-around">
                            <Box p={4} borderRadius="md">
                                <Input
                                    name="task"
                                    placeholder='Adicione sua tarefa'
                                    value={formTask.task}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box p={4} borderRadius="md">
                                <Select
                                    name="type"
                                    placeholder='Selecione o tipo da tarefa'
                                    value={formTask.type}
                                    onChange={handleChange}
                                >
                                    <option value='Compras'>Compras</option>
                                    <option value='Trabalho'>Trabalho</option>
                                    <option value='Pessoal'>Pessoal</option>
                                    <option value='Saúde'>Saúde</option>
                                </Select>
                            </Box>
                        </HStack>
                        <HStack spacing={20} align="center" justify="space-around">
                            <Box p={4} borderRadius="md">
                                <Input
                                    name="user"
                                    placeholder='Usuário Responsável'
                                    size='md'
                                    value={formTask.user}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box p={4} borderRadius="md">
                                <Select
                                    name="priority"
                                    placeholder='Nivel de prioridade'
                                    value={formTask.priority}
                                    onChange={handleChange}
                                >
                                    <option value='Alta'>Alta</option>
                                    <option value='Média'>Média</option>
                                    <option value='Baixa'>Baixa</option>
                                </Select>
                            </Box>
                        </HStack>
                    </CardBody>
                    <CardFooter>
                        <Box p={4} borderRadius="md">
                            <Button
                                rightIcon={<AddIcon />}
                                colorScheme='orange'
                                variant='solid'
                                onClick={handleSubmit}
                            >
                                {isEditing ? 'Editar' : 'Adicionar'}
                            </Button>

                        </Box>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            <Paper>
                <TableContainer>
                    <Table variant='striped' colorScheme='orange' size={{ base: "sm", md: "md" }}>
                        <TableCaption>Acompanhe e gerencie suas tarefas aqui.</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Tarefa</Th>
                                <Th>Usuário</Th>
                                <Th>Tipo</Th>
                                <Th>Prioridade</Th>
                                <Th>Status</Th>
                                <Th>Ações</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {tasks.map((task, index) => (
                                <Tr key={index}>
                                    <Td>{task.task}</Td>
                                    <Td>{task.user}</Td>
                                    <Td>{task.type}</Td>
                                    <Td>{task.priority}</Td>
                                    <Td>Pendente</Td>
                                    <Td>
                                        <HStack spacing={2}>
                                            {editingTaskId !== task.id && (
                                                <Button size="sm" onClick={() => handleEdit(task.id)}>Editar</Button>
                                            )}
                                            <Button size="sm" colorScheme="red" onClick={() => handleDelete(task.id)}>Excluir</Button>
                                        </HStack>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
};

export default ToDoPage;
