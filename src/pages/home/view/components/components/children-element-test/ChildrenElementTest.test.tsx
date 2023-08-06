/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable import/named */
import { ChildrenElementTest } from '.';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../../../../test-utils';

// 1- Mocking the hook using jest.fn
const mockedUsedNavigate = jest.fn();

// 2- Mock the library
jest.mock('react-router-dom', () => ({
  // 3- Import non-mocked library and use other functionalities and hooks
  ...(jest.requireActual('react-router-dom') as any),

  // 4- Mock the required hook
  useLoaderData: () => mockedUsedNavigate,
}));

describe('<Home>', () => {
  test('rendering a component that uses useLocation', () => {
    const route = '/podcast/1';
    renderWithRouter(<ChildrenElementTest />, { route });
    expect(screen.getByText('Current')).toBeInTheDocument();
  });
});
