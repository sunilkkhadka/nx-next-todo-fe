'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { deleteTodo, fetchAllTodos } from '../app/actions/todo';
import {
  Badge,
  Button,
  ButtonGroup,
  Container,
  CreateLink,
  Table,
  TableBody,
  TableFilter,
  TableHeader,
  TableLinkFilterGroup,
  Title,
  TodoInfo
} from '../styles/Todolist.styles';
import { Todo } from '../types/todo.type';
import { formatDate } from '../utils/date';

export default function TodoList() {
  const router = useRouter();

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetchAllTodos();
      setTodoList(response);
      setFilteredTodos(response);
    };

    fetchTodos();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await deleteTodo(id);
      toast.success(response.message);
      const updatedTodos = await fetchAllTodos();
      setTodoList(updatedTodos);
      applyFilter(updatedTodos, filter);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const applyFilter = (todos: Todo[], filterValue: string) => {
    if (filterValue === '') {
      setFilteredTodos(todos);
    } else {
      setFilteredTodos(todos.filter((todo) => todo.status === filterValue));
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFilter(value);
    applyFilter(todoList, value);
  };

  return (
    <Container>
      <Title>Todo List 📋</Title>
      <TableLinkFilterGroup>
        <Link href="/create">
          <CreateLink>Create Todo</CreateLink>
        </Link>
        <TableFilter>
          <p>Filter by: </p>
          <select value={filter} onChange={handleFilterChange}>
            <option value="">None</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </TableFilter>
      </TableLinkFilterGroup>
      <Table>
        <TableHeader>
          <tr>
            <th>Id</th>
            <th>Item</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </TableHeader>
        <TableBody>
          {filteredTodos.map((todoItem) => (
            <tr
              className={`${todoItem.status === 'completed' && 'completed'}`}
              key={todoItem.id}
            >
              <td>{todoItem.id}</td>
              <TodoInfo>
                <h3>{todoItem.title}</h3>
                <p>{todoItem.description}</p>
              </TodoInfo>
              <td>
                <Badge status={todoItem.status}>{todoItem.status}</Badge>
              </td>
              <td>{formatDate(todoItem.created_at)}</td>
              <td>
                <ButtonGroup>
                  <Button
                    className="edit"
                    onClick={() => router.push(`/edit/${todoItem.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="delete"
                    onClick={() => handleDelete(todoItem.id)}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
