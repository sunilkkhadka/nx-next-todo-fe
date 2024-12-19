'use client';

import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';
import TodoForm from '../../components/TodoForm';
import { createTodo } from '../actions/todo';

export default function CreateTodoPage() {
  const router = useRouter();

  const initialValues = {
    title: '',
    description: '',
    status: ''
  };

  const handleCreateTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await createTodo(formData);
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
        title="Create New Todo ✍️"
        handleSubmit={handleCreateTodo}
        initialValues={initialValues}
      />
    </div>
  );
}
