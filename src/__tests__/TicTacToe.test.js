import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TicTacToe from '../TicTacToe';

describe('TicTacToe', () => {
  beforeEach(() => {
    render(<TicTacToe />);
  });

  test('renders initial game board', () => {
    expect(screen.getByText('Tic Tac Toe')).toBeInTheDocument();
    expect(screen.getByText('Next player: X')).toBeInTheDocument();
  });

  test('allows players to make moves', async () => {
    const squares = screen.getAllByRole('button').slice(0, 9);
    await userEvent.click(squares[0]);
    await userEvent.click(squares[1]);
  });

  test('detects winning combination', async () => {
    const squares = screen.getAllByRole('button').slice(0, 9);
    await userEvent.click(squares[0]);
    await userEvent.click(squares[3]);
    await userEvent.click(squares[1]);
    await userEvent.click(squares[4]);
    await userEvent.click(squares[2]);
    expect(screen.getByText('Winner: X')).toBeInTheDocument();
  });
});
