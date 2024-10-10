
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer text', () => {
  render(<Footer />);
  const footerText = screen.getByTestId('footer-text');
  expect(footerText.innerHTML).toBe('© 2024 My Recipe');
});

test('renders social media links', () => {
  render(<Footer />);
  
  const facebookLink = screen.getByTestId('link-facebook');
  expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
  
  const xLink = screen.getByTestId('link-x');
  expect(xLink).toHaveAttribute('href', 'https://twitter.com');
  
  const instagramLink = screen.getByTestId('link-instagram');
  expect(instagramLink).toHaveAttribute('href', 'https://instagram.com');
});
