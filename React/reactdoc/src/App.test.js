import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

test('Login exists', () =>{
  render(<App></App>);
  const logElement = screen.getByText(/Login/i);
  expect(logElement).toBeInTheDocument();
}

);

