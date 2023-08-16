/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

describe('<TableHeader>', () => {
  test('Render Component', () => {
    render(<TableHeader>test</TableHeader>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
