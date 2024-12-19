import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem;
  margin: auto;
  background: #ffffff;
  border-radius: 12px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #333333;
  font-weight: 600;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

export const TableHeader = styled.thead`
  background: #f4f4f4;

  th {
    text-align: left;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: #666666;
    border-bottom: 2px solid #e5e5e5;
  }
`;

export const TableBody = styled.tbody`
  tr {
    transition: background 0.2s ease;
  }

  tr:hover {
    background: #f9f9f9;
  }

  tr.completed {
    text-decoration: line-through;
    opacity: 0.6;
  }

  td {
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
    color: #444444;
    border-bottom: 1px solid #e5e5e5;
  }
`;

export const TodoInfo = styled.td`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    padding: 0.5rem 0;
    font-size: 1.1rem;
  }

  p {
    color: #777;
  }
`;

export const Badge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ status }) =>
    status === 'completed'
      ? '#2e7d32'
      : status === 'in-progress'
      ? '#bf9100'
      : '#d32f2f'};
  background: ${({ status }) =>
    status === 'completed'
      ? '#e8f5e9'
      : status === 'in-progress'
      ? '#fff4cc'
      : '#fdecea'};
  border: 1px solid
    ${({ status }) =>
      status === 'completed'
        ? '#81c784'
        : status === 'in-progress'
        ? '#ffecb3'
        : '#ef9a9a'};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.4rem 0.8rem;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &.edit {
    background: #007bff;
    color: #ffffff;

    &:hover {
      background: #0056b3;
    }
  }

  &.delete {
    background: #ffffff;
    color: #f44336;
    border: 1px solid #f44336;

    &:hover {
      background: #f44336;
      color: #ffffff;
    }
  }
`;

export const CreateLink = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #007bff;
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.2s ease;

  &:hover {
    background: #0056b3;
  }
`;

export const TableLinkFilterGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-weight: bold;
  }

  select {
    padding: 0.5rem 0.8rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #333;
    background: #f9f9f9;

    &:focus {
      border-color: #007bff;
      outline: none;
      background: #ffffff;
    }
  }
`;
