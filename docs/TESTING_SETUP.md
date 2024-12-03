# Testing Setup Guide

## Prerequisites

Ensure you have the following testing dependencies:

```json
{
  "devDependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "jest": "^27.5.1"
  }
}
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Generate coverage report
npm test:coverage
```

## Writing Tests

1. Create test files with `.test.js` extension
2. Import necessary testing utilities
3. Write descriptive test cases
4. Use beforeEach for common setup
5. Test user interactions and game logic

## Example Test Case

```javascript
test('game should end in draw', async () => {
  const squares = screen.getAllByRole('button').slice(0, 9);
  
  // Play moves that lead to a draw
  const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8];
  for (let pos of moves) {
    await userEvent.click(squares[pos]);
  }
  
  expect(screen.getByText("It's a draw!")).toBeInTheDocument();
});
```