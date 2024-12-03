# Testing Guide

## Overview

This project uses Jest and React Testing Library for testing. We focus on user-centric testing that mirrors actual usage patterns.

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Generate coverage report
npm test:coverage
```

## Test Structure

```
__tests__/
├── unit/              # Unit tests
├── integration/       # Integration tests
└── e2e/               # End-to-end tests
```

## Example Tests

### Unit Test Example

```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TicTacToe from '../src/TicTacToe';

describe('TicTacToe Component', () => {
  test('renders empty board initially', () => {
    render(<TicTacToe />);
    const squares = screen.getAllByRole('button');
    expect(squares).toHaveLength(9);
    squares.forEach(square => {
      expect(square).toBeEmpty();
    });
  });

  test('alternates between X and O', async () => {
    render(<TicTacToe />);
    const squares = screen.getAllByRole('button');
    
    await userEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent('X');
    
    await userEvent.click(squares[1]);
    expect(squares[1]).toHaveTextContent('O');
  });

  test('detects winning combination', async () => {
    render(<TicTacToe />);
    const squares = screen.getAllByRole('button');
    
    // Create winning line for X
    await userEvent.click(squares[0]); // X
    await userEvent.click(squares[3]); // O
    await userEvent.click(squares[1]); // X
    await userEvent.click(squares[4]); // O
    await userEvent.click(squares[2]); // X
    
    expect(screen.getByText(/winner/i)).toBeInTheDocument();
  });
});
```

### Integration Test Example

```javascript
describe('Game Flow', () => {
  test('complete game cycle', async () => {
    render(<TicTacToe />);
    
    // Play a complete game
    // Reset game
    // Check score update
    // Reset scores
  });
});
```

## Testing Patterns

### Component Testing
- Test rendering
- Test user interactions
- Test state changes
- Test edge cases

### Event Testing
- Click events
- Touch events
- Keyboard navigation

### State Testing
- Initial state
- State transitions
- Final states

## Best Practices

1. Test behavior, not implementation
2. Use semantic queries
3. Write accessible tests
4. Keep tests simple and focused
5. Use setup and cleanup