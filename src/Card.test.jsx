
import { render, screen } from '@testing-library/react';
import Card from './Card';

const recipe = {
  id: 1,
  title: "Spaghetti Bolognese",
  rating: 4.5,
  image: "spaghetti.jpg",
  link: "/recipe/spaghetti-bolognese"
};

test('renders Card with correct props', () => {
  render(<Card el={recipe} />);

  const img = screen.getByTestId(`img-recipe-${recipe.id}`);
  expect(img).toHaveAttribute('src', recipe.image);
  expect(img).toHaveAttribute('alt', recipe.title);

  const title = screen.getByTestId(`title-recipe-${recipe.id}`);
  expect(title.innerHTML).toBe(recipe.title);

  const rating = screen.getByTestId(`rating-recipe-${recipe.id}`);
  expect(rating.innerHTML).toBe(`${recipe.rating}`);

  const link = screen.getByTestId(`link-recipe-${recipe.id}`);
  expect(link).toHaveAttribute('href', recipe.link);
});
