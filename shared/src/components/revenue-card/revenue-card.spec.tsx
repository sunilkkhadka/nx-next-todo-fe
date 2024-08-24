import { render } from '@testing-library/react';

import RevenueCard from './revenue-card';

describe('RevenueCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RevenueCard />);
    expect(baseElement).toBeTruthy();
  });
});
