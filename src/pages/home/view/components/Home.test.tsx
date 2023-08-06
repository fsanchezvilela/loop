import { Home } from '.';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../../../test/utils';

describe('<Home>', () => {
  test('rendering a component that uses useLocation', () => {
    const route = '/';
    renderWithRouter(<Home />, { route });
    expect(screen.getByText('Children Nav to 1')).toBeTruthy();
  });
});
