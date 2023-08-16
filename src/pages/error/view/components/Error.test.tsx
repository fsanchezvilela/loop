/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import { Error } from '.';

describe('<Error>', () => {
  test('Render Component', () => {
    const result = render(<Error />);
    expect(result).toBeTruthy();
    expect(screen.findByText('error')).toBeTruthy();
  });
});
