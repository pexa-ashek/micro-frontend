import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

test('increments and decrements the counter', () => {
  const { getByText, getByDisplayValue } = render(<Counter />);

  const incrementButton = getByText('Increment');
  const decrementButton = getByText('Decrement');
  const input = getByDisplayValue('0');

  // Test increment
  fireEvent.click(incrementButton);
  expect(input).toHaveValue('1');

  // Test decrement
  fireEvent.click(decrementButton);
  expect(input).toHaveValue('0');
});