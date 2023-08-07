/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import TableBody from './TableBody';

describe('<TableBody>', () => {
  test('Render Component', () => {
    render(<TableBody>test</TableBody>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
