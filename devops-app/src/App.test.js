import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the logo image', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
});