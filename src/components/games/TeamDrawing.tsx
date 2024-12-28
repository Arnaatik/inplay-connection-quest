import { useState } from "react";
import { Button } from "../ui/button";
import DrawingCanvas from "../DrawingCanvas";
import { useToast } from "../ui/use-toast";

const TeamDrawing = () => {
  const [prompt, setPrompt] = useState("Draw a happy sun together!");
  const { toast } = useToast();

  const prompts = [
    "Draw a happy sun together!",
    "Create a friendly animal!",
    "Draw your favorite food!",
    "Make a colorful rainbow!",
  ];

  const getNewPrompt = () => {
    const newPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(newPrompt);
    toast({
      title: "New Drawing Challenge!",
      description: newPrompt,
      duration: 3000,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-text-primary mb-4">Team Drawing</h2>
      <p className="text-gray-600 mb-2">Draw together with friends!</p>
      <div className="bg-primary/10 p-4 rounded-xl mb-6">
        <p className="text-lg font-medium text-primary">{prompt}</p>
      </div>
      
      <DrawingCanvas />
      
      <div className="mt-6 flex gap-4">
        <Button
          variant="outline"
          onClick={getNewPrompt}
          className="flex-1"
        >
          New Prompt
        </Button>
      </div>
    </div>
  );
};

export default TeamDrawing;