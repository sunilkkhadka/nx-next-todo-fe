import { render } from '@testing-library/react';

import GetStartedCard from './get-started-card';

describe('GetStartedCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GetStartedCard />);
    expect(baseElement).toBeTruthy();
  });
});
