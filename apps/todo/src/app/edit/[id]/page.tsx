'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import TodoForm from '../../../components/TodoForm';
import { Todo } from '../../../types/todo.type';
import { editTodo, fetchTodoById } from '../../actions/todo';

export default function EditTodoPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const getTodoById = async () => {
      try {
        const response = await fetchTodoById(params.id);
        setTodo(response);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    };

    getTodoById();
  }, [params.id]);

  const handleEditTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await editTodo(formData, params.id);
      toast.success(response.message);
      router.push('/');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div>
      <TodoForm
        title="Edit Todo ✏️"
        handleSubmit={handleEditTodo}
        initialValues={{
          title: todo?.title || '',
          description: todo?.description || '',
          status: todo?.status || ''
        }}
      />
    </div>
  );
}
