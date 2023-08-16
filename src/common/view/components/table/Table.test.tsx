/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('<Table>', () => {
  test('Render Component', () => {
    render(<Table>test</Table>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
