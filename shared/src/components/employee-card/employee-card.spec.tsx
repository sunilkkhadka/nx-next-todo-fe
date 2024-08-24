import { render } from '@testing-library/react';

import EmployeeCard from './employee-card';

describe('EmployeeCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmployeeCard />);
    expect(baseElement).toBeTruthy();
  });
});
