/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

describe('<TableCell>', () => {
  test('Render Component', () => {
    render(<TableCell>test</TableCell>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
