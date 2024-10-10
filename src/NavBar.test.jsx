
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

test('renders navigation bar with correct links', () => {
  render(<NavBar />);
  
  const myRecipeLink = screen.getByTestId('my-recipe');
  expect(myRecipeLink).toHaveAttribute('href', '/');
  expect(myRecipeLink.innerHTML).toBe('My Recipe');
});
