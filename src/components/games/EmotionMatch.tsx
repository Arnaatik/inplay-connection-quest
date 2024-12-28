import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

interface Emotion {
  id: number;
  emoji: string;
  name: string;
  description: string;
}

const EmotionMatch = () => {
  const [emotions, setEmotions] = useState<Emotion[]>([]);
  const [selectedEmotion, setSelectedEmotion] = useState<number | null>(null);
  const { toast } = useToast();

  const emotionsList: Emotion[] = [
    { id: 1, emoji: "😊", name: "Happy", description: "Feeling good and joyful" },
    { id: 2, emoji: "😢", name: "Sad", description: "Feeling down or upset" },
    { id: 3, emoji: "😮", name: "Surprised", description: "Feeling amazed or shocked" },
    { id: 4, emoji: "😠", name: "Angry", description: "Feeling mad or frustrated" },
  ];

  useEffect(() => {
    setEmotions(emotionsList.sort(() => Math.random() - 0.5));
  }, []);

  const handleEmotionClick = (id: number) => {
    setSelectedEmotion(id);
    const emotion = emotions.find((e) => e.id === id);
    if (emotion) {
      toast({
        title: emotion.name,
        description: emotion.description,
        duration: 3000,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-text-primary mb-4">Emotion Match</h2>
      <p className="text-gray-600 mb-6">
        Learn about different emotions and how to recognize them!
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {emotions.map((emotion) => (
          <motion.div
            key={emotion.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 bg-white rounded-xl shadow-md cursor-pointer text-center
              ${selectedEmotion === emotion.id ? "ring-2 ring-primary" : ""}`}
            onClick={() => handleEmotionClick(emotion.id)}
          >
            <div className="text-4xl mb-2">{emotion.emoji}</div>
            <div className="font-medium text-text-primary">{emotion.name}</div>
          </motion.div>
        ))}
      </div>

      <Button
        variant="outline"
        onClick={() => {
          setEmotions((prev) => [...prev].sort(() => Math.random() - 0.5));
          setSelectedEmotion(null);
        }}
        className="w-full"
      >
        Shuffle Emotions
      </Button>
    </div>
  );
};

export default EmotionMatch;