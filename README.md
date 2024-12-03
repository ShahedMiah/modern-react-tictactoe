# Modern React Tic Tac Toe

A sleek and modern implementation of the classic Tic Tac Toe game built with React and styled with Tailwind CSS.

![Game Preview](https://raw.githubusercontent.com/ShahedMiah/modern-react-tictactoe/main/preview.png)

## ✨ Features

- 🎮 Clean, modern user interface with smooth animations
- 🎯 Score tracking for both players
- 🎨 Beautiful UI with Tailwind CSS
- 🏆 Win detection with highlighted winning line
- 🔄 Game reset and score reset functionality
- 📱 Fully responsive design for all screen sizes
- 🎲 Player turn indicator
- 🎵 Modern icons using Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ShahedMiah/modern-react-tictactoe.git
cd modern-react-tictactoe
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to play the game!

## 🎮 How to Play

1. The game is played on a 3x3 grid
2. Players take turns placing their marks (X or O) in empty squares
3. The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins
4. When all squares are filled and no player has won, the game is a draw
5. Use the "New Game" button to start a fresh game
6. Use the "Reset Scores" button to clear both players' scores

## 🛠️ Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons

## 📁 Project Structure

```
modern-react-tictactoe/
├── public/
│   └── index.html
├── src/
│   ├── TicTacToe.js    # Main game component
│   ├── index.js        # React entry point
│   └── index.css       # Global styles and Tailwind imports
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Key Features Explained

### Score Tracking
- Keeps track of wins for both X and O players
- Scores persist until manually reset
- Visual score display with player-specific colors

### Win Detection
- Automatically detects winning combinations
- Highlights the winning line
- Prevents further moves after game end

### Responsive Design
- Adapts to different screen sizes
- Maintains playability on mobile devices
- Consistent experience across devices

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by React's official tic-tac-toe tutorial
- Icons provided by Lucide React
- Styling enhanced by Tailwind CSS

## 📧 Contact

If you have any questions or suggestions, feel free to open an issue in the repository.