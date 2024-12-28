import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft, Home, Star, Trophy, Volume2, VolumeX } from 'lucide-react';
import { useToast } from './ui/use-toast';

const AccessibleNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(true);

  const speak = (text: string) => {
    if (isSpeechEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower for better comprehension
      utterance.pitch = 1.1; // Slightly higher pitch for child-friendly voice
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNavigation = (path: string, description: string) => {
    speak(description);
    navigate(path);
  };

  const toggleSpeech = () => {
    setIsSpeechEnabled(!isSpeechEnabled);
    toast({
      title: isSpeechEnabled ? "Voice guidance turned off" : "Voice guidance turned on",
      duration: 2000,
    });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 rounded-t-xl">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {location.pathname !== '/' && (
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce-gentle"
            onClick={() => handleNavigation('/', 'Going back to home')}
            aria-label="Go back"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce-gentle"
          onClick={() => handleNavigation('/', 'Going to home')}
          aria-label="Home"
        >
          <Home className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce-gentle"
          onClick={() => handleNavigation('/rewards', 'Going to rewards')}
          aria-label="Rewards"
        >
          <Trophy className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSpeech}
          aria-label={isSpeechEnabled ? "Turn off voice guidance" : "Turn on voice guidance"}
        >
          {isSpeechEnabled ? (
            <Volume2 className="h-6 w-6" />
          ) : (
            <VolumeX className="h-6 w-6" />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default AccessibleNavigation;