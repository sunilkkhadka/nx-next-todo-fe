import { render } from '@testing-library/react';

import FaqCollapse from './faq-collapse';

describe('FaqCollapse', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FaqCollapse />);
    expect(baseElement).toBeTruthy();
  });
});
