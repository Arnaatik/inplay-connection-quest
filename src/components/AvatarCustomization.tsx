import { useState } from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { Smile, Star, User } from "lucide-react";
import { motion } from "framer-motion";

const avatarOptions = [
  { id: 1, src: "/placeholder.svg", alt: "Avatar 1" },
  { id: 2, src: "/placeholder.svg", alt: "Avatar 2" },
  { id: 3, src: "/placeholder.svg", alt: "Avatar 3" },
];

const AvatarCustomization = ({ onComplete }: { onComplete: (avatarId: number) => void }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const handleAvatarSelect = (id: number) => {
    setSelectedAvatar(id);
    setProgress(50);
  };

  const handleComplete = () => {
    if (selectedAvatar) {
      setProgress(100);
      onComplete(selectedAvatar);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto p-6 space-y-6"
    >
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-text-primary">Choose Your Friend!</h2>
        <Progress value={progress} className="w-full" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {avatarOptions.map((avatar) => (
          <motion.div
            key={avatar.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => handleAvatarSelect(avatar.id)}
          >
            <Avatar
              className={`w-24 h-24 mx-auto border-4 ${
                selectedAvatar === avatar.id ? "border-primary" : "border-transparent"
              }`}
            >
              <AvatarImage src={avatar.src} alt={avatar.alt} />
              <AvatarFallback>
                <User className="w-12 h-12 text-gray-400" />
              </AvatarFallback>
            </Avatar>
          </motion.div>
        ))}
      </div>

      <Button
        onClick={handleComplete}
        disabled={!selectedAvatar}
        className="w-full animate-bounce-gentle"
      >
        <Star className="mr-2" />
        Let's Play!
      </Button>
    </motion.div>
  );
};

export default AvatarCustomization;