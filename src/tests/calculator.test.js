import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

// Test case to check if the calculator renders correctly
test('renders calculator', () => {
  render(<Calculator />);
  // Check if the buttons for '0', '+', '-', and '*' are rendered in the document
  expect(screen.getByText(/0/)).toBeInTheDocument();
  expect(screen.getByText('+')).toBeInTheDocument();
  expect(screen.getByText('-')).toBeInTheDocument();
  expect(screen.getByText('*')).toBeInTheDocument();
});

// Test case to check if addition operation works correctly
test('performs addition', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('='));
  // Check if the result '5' is displayed in the calculator (the result of 2 + 3)
  expect(screen.getByText('5')).toBeInTheDocument();
});

// Test case to check if subtraction operation works correctly
test('performs subtraction', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('-'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('='));
  // Check if the result '2' is displayed in the calculator (the result of 5 - 3)
  expect(screen.getByText('2')).toBeInTheDocument();
});

// Test case to check if multiplication operation works correctly
test('performs multiplication', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('*'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('='));
  // Check if the result '36' is displayed in the calculator (the result of 12 * 3)
  expect(screen.getByDisplayValue('36')).toBeInTheDocument(); // Checking the value of the input field
});

// Test case to check if division operation works correctly
test('performs division', () => {
    render(<Calculator />);
    
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    
    // Check if the result '3' is displayed in the calculator (the result of 12 / 4)
    expect(screen.getByDisplayValue('3')).toBeInTheDocument(); // Checking the value of the input field
  });

  // Test case to check if clear operation works correctly
test('clears the input when C is clicked', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    
    // Check if the result is displayed correctly after addition
    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
  
    // Now press the "C" button to clear the input
    fireEvent.click(screen.getByText('C'));
  
    // Check if the input is cleared
    expect(screen.getByDisplayValue('')).toBeInTheDocument(); // Input should be empty
  });
  
  