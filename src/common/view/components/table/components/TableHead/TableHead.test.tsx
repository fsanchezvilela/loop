/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import TableHead from './TableHead';

describe('<TableHead>', () => {
  test('Render Component', () => {
    render(<TableHead>test</TableHead>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
