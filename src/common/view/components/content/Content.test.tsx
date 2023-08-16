/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import { Content } from '.';

describe('<Content>', () => {
  test('Render Component', () => {
    render(
      <Content>
        <h1 data-test-id="test">test</h1>
      </Content>,
    );

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
