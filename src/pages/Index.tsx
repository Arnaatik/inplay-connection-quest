import { useState, useEffect } from "react";
import GameCard from "@/components/GameCard";
import DrawingCanvas from "@/components/DrawingCanvas";
import ParentDashboard from "@/components/ParentDashboard";
import Onboarding from "@/components/Onboarding";
import MiniGamesHub from "@/components/games/MiniGamesHub";
import { motion } from "framer-motion";

const Index = () => {
  const [currentView, setCurrentView] = useState<"home" | "game" | "parent" | "minigames">("home");
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    const onboardingComplete = localStorage.getItem("onboardingComplete");
    if (onboardingComplete === "true") {
      setShowOnboarding(false);
    }
  }, []);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  const renderContent = () => {
    if (showOnboarding) {
      return <Onboarding onComplete={handleOnboardingComplete} />;
    }

    switch (currentView) {
      case "minigames":
        return <MiniGamesHub />;
      case "game":
        return (
          <div className="p-6">
            <button
              onClick={() => setCurrentView("home")}
              className="mb-6 text-primary hover:text-primary/80 transition-colors"
            >
              ← Back to Home
            </button>
            <h2 className="text-2xl font-bold text-text-primary mb-6">Let's Draw Together!</h2>
            <DrawingCanvas />
          </div>
        );
      case "parent":
        return (
          <>
            <button
              onClick={() => setCurrentView("home")}
              className="p-6 text-primary hover:text-primary/80 transition-colors"
            >
              ← Back to Home
            </button>
            <ParentDashboard />
          </>
        );
      default:
        return (
          <div className="p-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-text-primary mb-2">Welcome to InPlay!</h1>
              <p className="text-xl text-gray-600 mb-8">Let's learn and play together!</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <GameCard
                title="Mini Games"
                description="Play fun games with friends!"
                icon="/placeholder.svg"
                onClick={() => setCurrentView("minigames")}
              />
              <GameCard
                title="Draw Together"
                description="Create beautiful art with friends!"
                icon="/placeholder.svg"
                onClick={() => setCurrentView("game")}
              />
              <GameCard
                title="Parent Dashboard"
                description="Track progress and view resources"
                icon="/placeholder.svg"
                onClick={() => setCurrentView("parent")}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderContent()}
    </div>
  );
};

export default Index;