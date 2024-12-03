# Modern React Tic Tac Toe

A sleek and modern implementation of the classic Tic Tac Toe game built with React and styled with Tailwind CSS.

<div align="center">

![Game Demo](https://raw.githubusercontent.com/ShahedMiah/modern-react-tictactoe/main/docs/images/game-demo.gif)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[View Demo](https://modern-react-tictactoe.vercel.app) | [Report Bug](https://github.com/ShahedMiah/modern-react-tictactoe/issues) | [Request Feature](https://github.com/ShahedMiah/modern-react-tictactoe/issues)

</div>

## ✨ Features

- 🎮 Clean, modern user interface with smooth animations
- 🎯 Score tracking for both players
- 🎨 Beautiful UI with Tailwind CSS
- 🏆 Win detection with highlighted winning line
- 🔄 Game reset and score reset functionality
- 📱 Fully responsive design for all screen sizes
- 🎲 Player turn indicator
- 🎵 Modern icons using Lucide React

## 📸 Screenshots

<div align="center">

### Game Start
![Game Start](https://raw.githubusercontent.com/ShahedMiah/modern-react-tictactoe/main/docs/images/game-start.png)

### Gameplay
![Gameplay](https://raw.githubusercontent.com/ShahedMiah/modern-react-tictactoe/main/docs/images/gameplay.png)

### Game Won
![Game Won](https://raw.githubusercontent.com/ShahedMiah/modern-react-tictactoe/main/docs/images/game-won.png)

### Mobile View
![Mobile View](https://raw.githubusercontent.com/ShahedMiah/modern-react-tictactoe/main/docs/images/mobile-view.png)

</div>

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

## 📚 Technical Documentation

### Component Structure

```jsx
TicTacToe/
├── GameBoard/       # Main game grid
├── ScoreBoard/      # Player scores display
├── GameControls/    # Reset and New Game buttons
└── GameStatus/      # Current player and winner display
```

### State Management

```javascript
// Game state
const [board, setBoard] = useState(Array(9).fill(null));
const [isXNext, setIsXNext] = useState(true);
const [scores, setScores] = useState({ X: 0, O: 0 });
const [gameOver, setGameOver] = useState(false);
const [winLine, setWinLine] = useState(null);
```

### Key Functions

```javascript
// Check for winner
checkWinner(squares) => 'X' | 'O' | null

// Handle square click
handleClick(index) => void

// Reset game state
resetGame() => void

// Reset scores
resetScores() => void
```

## 🛠 Development

### Running Tests

```bash
npm test
# or
yarn test
```

### Building for Production

```bash
npm run build
# or
yarn build
```

### Code Style

This project uses:
- ESLint for code linting
- Prettier for code formatting
- Husky for pre-commit hooks

## 📌 Roadmap

### Version 1.1 (Coming Soon)
- [ ] Add sound effects
- [ ] Add animation when placing X/O
- [ ] Add player names input
- [ ] Add game history

### Version 1.2
- [ ] Add AI opponent
- [ ] Add difficulty levels
- [ ] Add undo/redo moves
- [ ] Add local storage for game state

### Version 2.0
- [ ] Add multiplayer support
- [ ] Add user accounts
- [ ] Add leaderboard
- [ ] Add custom themes

## ⚙️ Troubleshooting

### Common Issues

1. **Module not found errors**
   ```bash
   npm clean-install
   # or
   yarn clean
   ```

2. **Tailwind classes not working**
   - Check if Tailwind is properly configured
   - Rebuild the CSS with: `npm run build:css`

3. **React development server issues**
   - Clear cache: `npm start -- --reset-cache`
   - Check port conflicts: `lsof -i :3000`

4. **Build errors**
   ```bash
   rm -rf node_modules
   rm package-lock.json
   npm install
   ```

### Performance Optimization

- Use React.memo for pure components
- Implement lazy loading for future features
- Optimize state updates using useCallback
- Use Web Workers for AI calculations (future)

## 🤝 Contributing

Contributions are welcome! Please check our [Contributing Guide](docs/CONTRIBUTING.md).

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by React's official tic-tac-toe tutorial
- Icons provided by Lucide React
- Styling enhanced by Tailwind CSS

## 💬 Support

- Create an [Issue](https://github.com/ShahedMiah/modern-react-tictactoe/issues)
- Join our [Discord Community](https://discord.gg/your-server)
- Email: your-email@example.com

---

<div align="center">

Made with ❤️ by [Your Name](https://github.com/ShahedMiah)

</div>