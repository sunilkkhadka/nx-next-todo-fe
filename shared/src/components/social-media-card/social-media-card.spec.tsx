import { render } from '@testing-library/react';

import SocialMediaCard from './social-media-card';

describe('SocialMediaCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialMediaCard />);
    expect(baseElement).toBeTruthy();
  });
});
