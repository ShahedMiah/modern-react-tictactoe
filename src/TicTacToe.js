import React, { useState } from 'react';
import { Motion, X, RotateCcw } from 'lucide-react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winLine, setWinLine] = useState(null);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  const checkWinner = (squares) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinLine(winningCombinations[i]);
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || gameOver) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = checkWinner(newBoard);
    if (winner) {
      setScores(prev => ({
        ...prev,
        [winner]: prev[winner] + 1
      }));
      setGameOver(true);
    } else if (!newBoard.includes(null)) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setWinLine(null);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0 });
    resetGame();
  };

  const renderSquare = (index) => {
    const isWinningSquare = winLine?.includes(index);
    return (
      <button
        onClick={() => handleClick(index)}
        className={`w-full h-full flex items-center justify-center text-4xl font-bold
          ${!board[index] && !gameOver ? 'hover:bg-gray-100' : ''}
          ${isWinningSquare ? 'bg-green-100' : ''}
          transition-colors duration-200 ease-in-out`}
      >
        {board[index] === 'X' && <X className="w-12 h-12 text-blue-500" />}
        {board[index] === 'O' && <Motion className="w-12 h-12 text-red-500" />}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tic Tac Toe</h1>
          <p className="text-gray-600">
            {gameOver
              ? checkWinner(board)
                ? `Winner: ${checkWinner(board)}`
                : "It's a draw!"
              : `Next player: ${isXNext ? 'X' : 'O'}`}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Player X</p>
              <p className="text-2xl font-bold text-blue-500">{scores.X}</p>
            </div>
            <div className="text-center p-3 bg-red-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Player O</p>
              <p className="text-2xl font-bold text-red-500">{scores.O}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 bg-gray-200 p-2 rounded-lg">
            {Array(9).fill(null).map((_, index) => (
              <div key={index} className="aspect-square bg-white rounded-md">
                {renderSquare(index)}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={resetGame}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            New Game
          </button>
          <button
            onClick={resetScores}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Reset Scores
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;