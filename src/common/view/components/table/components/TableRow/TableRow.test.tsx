/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

describe('<TableRow>', () => {
  test('Render Component', () => {
    render(<TableRow>test</TableRow>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
