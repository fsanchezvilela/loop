/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import { Content } from '.';

describe('<Content>', () => {
  test('Render Component', () => {
    render(
      <Content>
        <h1>test</h1>
      </Content>,
    );

    expect(screen.findByText('test')).toBeInTheDocument();
  });
});
