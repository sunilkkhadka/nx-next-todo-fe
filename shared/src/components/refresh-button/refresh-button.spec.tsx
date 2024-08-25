import { render } from '@testing-library/react';

import RefreshButton from './refresh-button';

describe('RefreshButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RefreshButton />);
    expect(baseElement).toBeTruthy();
  });
});
