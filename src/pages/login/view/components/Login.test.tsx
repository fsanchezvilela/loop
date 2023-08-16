/* eslint-disable import/named */
import Login from './Login';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../../test-utils';

describe('<Home>', () => {
  test('rendering a component that uses useLocation', () => {
    const route = '/';
    renderWithRouter(<Login />, { route });
    expect(
      screen.getByText('Please Wait, creating access_tokens'),
    ).toBeTruthy();
  });
});
