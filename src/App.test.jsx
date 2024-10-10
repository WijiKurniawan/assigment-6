
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the My Recipe banner', () => {
  render(<App />);
  const banner = screen.getByTestId('image-banner');
  expect(banner).toHaveAttribute('src');
  expect(banner).toHaveAttribute('alt');
});

test('renders My Recipe text', () => {
  render(<App />);
  const myRecipeText = screen.getByTestId('my-recipe');
  expect(myRecipeText).toBeInTheDocument();
  expect(myRecipeText.innerHTML).toBe('My Recipe');
});

test('renders search form', () => {
  render(<App />);
  const searchForm = screen.getByTestId('form-search');
  expect(searchForm).toBeInTheDocument();
});
