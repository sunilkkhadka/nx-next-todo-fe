import { render } from '@testing-library/react';

import TasksChartCard from './tasks-chart-card';

describe('TasksChartCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TasksChartCard />);
    expect(baseElement).toBeTruthy();
  });
});
