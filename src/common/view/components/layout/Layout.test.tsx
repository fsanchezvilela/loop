/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import { Layout } from '.';

describe('<Layout>', () => {
  test('Render Component', () => {
    render(
      <Layout>
        <h1 data-test-id="test">test</h1>
      </Layout>,
    );

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
