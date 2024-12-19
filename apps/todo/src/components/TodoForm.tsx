'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  BackButton,
  FieldGroup,
  Form,
  FormContainer,
  SubmitButton
} from '../styles/TodoForm.styles';
import { Title } from '../styles/Todolist.styles';

interface TodoFormProps {
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  title: string;
  initialValues: {
    title: string;
    description: string;
    status: string;
  };
}

const TodoForm: React.FC<TodoFormProps> = ({
  handleSubmit,
  initialValues,
  title
}) => {
  const router = useRouter();

  const [values, setValues] = useState({
    title: initialValues?.title,
    description: initialValues?.description,
    status: initialValues?.status
  });

  useEffect(() => {
    setValues({
      title: initialValues.title,
      description: initialValues.description,
      status: initialValues.status
    });
  }, [initialValues]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <FormContainer>
      <Title>{title}</Title>
      <BackButton onClick={() => router.back()}>← Back</BackButton>
      <Form onSubmit={handleSubmit}>
        <FieldGroup>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </FieldGroup>
        <FieldGroup>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={values.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </FieldGroup>
        <FieldGroup>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={values.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In-progress</option>
            <option value="completed">Completed</option>
          </select>
        </FieldGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default TodoForm;
