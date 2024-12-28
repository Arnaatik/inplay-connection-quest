import { useState } from "react";
import { motion } from "framer-motion";
import { Puzzle, Users, Smile } from "lucide-react";
import GameCard from "../GameCard";
import { useToast } from "../ui/use-toast";
import PuzzleGame from "./PuzzleGame";
import TeamDrawing from "./TeamDrawing";
import EmotionMatch from "./EmotionMatch";
import SafeChat from "../SafeChat";

const MiniGamesHub = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const { toast } = useToast();

  const games = [
    {
      id: "puzzle",
      title: "Puzzle Pals",
      description: "Work together to solve colorful puzzles!",
      icon: <Puzzle className="w-12 h-12 text-primary" />,
      component: PuzzleGame,
    },
    {
      id: "drawing",
      title: "Team Drawing",
      description: "Create art with friends!",
      icon: <Users className="w-12 h-12 text-secondary" />,
      component: TeamDrawing,
    },
    {
      id: "emotions",
      title: "Emotion Match",
      description: "Learn about feelings together!",
      icon: <Smile className="w-12 h-12 text-accent" />,
      component: EmotionMatch,
    },
  ];

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId);
    toast({
      title: "Starting game...",
      description: "Get ready to play and learn together!",
      duration: 3000,
    });
  };

  const handleBackToHub = () => {
    setSelectedGame(null);
  };

  if (selectedGame) {
    const game = games.find((g) => g.id === selectedGame);
    if (!game) return null;
    
    const GameComponent = game.component;
    return (
      <div className="p-6">
        <button
          onClick={handleBackToHub}
          className="mb-6 text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
        >
          ← Back to Games
        </button>
        <div className="grid md:grid-cols-[2fr,1fr] gap-6">
          <GameComponent />
          <SafeChat />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Mini Games</h1>
      <p className="text-lg text-gray-600 mb-8">
        Play together and learn new skills with friends!
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {games.map((game) => (
          <motion.div
            key={game.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              onClick={() => handleGameSelect(game.id)}
              className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer text-center"
            >
              <div className="mx-auto mb-4 flex justify-center">{game.icon}</div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {game.title}
              </h3>
              <p className="text-gray-600">{game.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MiniGamesHub;