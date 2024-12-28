import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

interface PuzzlePiece {
  id: number;
  position: number;
  content: string;
}

const PuzzleGame = () => {
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Initialize puzzle pieces
    const initialPieces = [
      { id: 1, position: 0, content: "🌳" },
      { id: 2, position: 1, content: "🏠" },
      { id: 3, position: 2, content: "🌞" },
    ];
    setPieces(initialPieces.sort(() => Math.random() - 0.5));
  }, []);

  const handlePieceClick = (id: number) => {
    if (selectedPiece === null) {
      setSelectedPiece(id);
      playSound("select");
    } else {
      // Swap pieces
      const newPieces = [...pieces];
      const piece1 = newPieces.find((p) => p.id === selectedPiece);
      const piece2 = newPieces.find((p) => p.id === id);
      
      if (piece1 && piece2) {
        const temp = piece1.position;
        piece1.position = piece2.position;
        piece2.position = temp;
        setPieces(newPieces);
        playSound("move");
      }
      
      setSelectedPiece(null);
      checkWin();
    }
  };

  const playSound = (type: "select" | "move" | "win") => {
    // Implement sound effects here
    console.log(`Playing ${type} sound`);
  };

  const checkWin = () => {
    const isWin = pieces.every((piece) => piece.id - 1 === piece.position);
    if (isWin) {
      toast({
        title: "Congratulations! 🎉",
        description: "You solved the puzzle together!",
        duration: 5000,
      });
      playSound("win");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-text-primary mb-4">Puzzle Pals</h2>
      <p className="text-gray-600 mb-6">
        Work together to arrange the pieces in the correct order!
      </p>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        {pieces
          .sort((a, b) => a.position - b.position)
          .map((piece) => (
            <motion.div
              key={piece.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`aspect-square flex items-center justify-center text-4xl 
                bg-white rounded-xl shadow-md cursor-pointer
                ${selectedPiece === piece.id ? "ring-2 ring-primary" : ""}`}
              onClick={() => handlePieceClick(piece.id)}
            >
              {piece.content}
            </motion.div>
          ))}
      </div>

      <Button
        variant="outline"
        onClick={() => {
          setPieces((prev) => [...prev].sort(() => Math.random() - 0.5));
          setSelectedPiece(null);
        }}
        className="w-full"
      >
        Shuffle Pieces
      </Button>
    </div>
  );
};

export default PuzzleGame;