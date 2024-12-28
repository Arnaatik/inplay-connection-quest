import { useState } from "react";
import { motion } from "framer-motion";
import AvatarCustomization from "./AvatarCustomization";
import { Button } from "./ui/button";
import { Smile } from "lucide-react";

const Onboarding = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(1);
  const [avatarId, setAvatarId] = useState<number | null>(null);

  const handleAvatarSelected = (selectedAvatarId: number) => {
    setAvatarId(selectedAvatarId);
    setStep(2);
  };

  const handleComplete = () => {
    // Here you would typically save the user's preferences
    localStorage.setItem("avatarId", avatarId?.toString() || "1");
    localStorage.setItem("onboardingComplete", "true");
    onComplete();
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto"
      >
        {step === 1 ? (
          <AvatarCustomization onComplete={handleAvatarSelected} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h2 className="text-2xl font-bold text-text-primary">Welcome to InPlay!</h2>
            <p className="text-gray-600">We're so excited to play with you!</p>
            <Button onClick={handleComplete} className="w-full animate-bounce-gentle">
              <Smile className="mr-2" />
              Start Playing
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Onboarding;