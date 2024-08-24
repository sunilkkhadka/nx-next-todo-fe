import { render } from '@testing-library/react';

import WeeklyActivityCard from './weekly-activity-card';

describe('WeeklyActivityCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeeklyActivityCard />);
    expect(baseElement).toBeTruthy();
  });
});
