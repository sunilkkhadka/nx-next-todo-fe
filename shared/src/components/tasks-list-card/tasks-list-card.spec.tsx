import { render } from '@testing-library/react';

import TasksListCard from './tasks-list-card';

describe('TasksListCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TasksListCard />);
    expect(baseElement).toBeTruthy();
  });
});
