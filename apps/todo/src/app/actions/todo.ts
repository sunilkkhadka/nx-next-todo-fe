'use server';

import console from 'console';
import { Todo } from '../../types/todo.type';

export const fetchAllTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`${process.env.BACKEND_URL}/todos`, {
    cache: 'no-store'
  });
  const data: Todo[] = await response.json();
  return data;
};

export const fetchTodoById = async (id: string): Promise<Todo> => {
  const response = await fetch(`${process.env.BACKEND_URL}/todos/${id}`, {
    cache: 'no-store'
  });
  console.log(response);
  if (response.status !== 200) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data: Todo = await response.json();
  return data;
};

export const createTodo = async (data: FormData) => {
  const response = await fetch(`${process.env.BACKEND_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: data.get('title'),
      description: data.get('description'),
      status: data.get('status')
    })
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(errorDetails.message || 'Failed to create a todo.');
  }

  const result = await response.json();
  return result;
};

export const editTodo = async (data: FormData, id: string) => {
  const response = await fetch(`${process.env.BACKEND_URL}/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: data.get('title'),
      description: data.get('description'),
      status: data.get('status')
    })
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(errorDetails.message || 'Failed to edit a todo.');
  }

  const result = await response.json();
  return result;
};

export const deleteTodo = async (id: number) => {
  const response = await fetch(`${process.env.BACKEND_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(errorDetails.message || 'Failed to delete a todo.');
  }

  const result = await response.json();
  return result;
};
