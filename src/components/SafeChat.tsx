import { useState } from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { useToast } from "./ui/use-toast";

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

const preApprovedMessages = [
  "Great job! 👏",
  "Let's try again! 🔄",
  "I need help! 🆘",
  "Good idea! 💡",
  "Thank you! 🙏",
  "Well done! ⭐",
  "Your turn! 👉",
  "I understand! 👍",
  "Let's work together! 🤝",
  "Almost there! 🎯",
];

const SafeChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { toast } = useToast();

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "Player",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, newMessage]);
    toast({
      title: "Message sent!",
      description: "Your message has been shared with the team.",
      duration: 2000,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4 text-text-primary">Team Chat</h3>
      
      <ScrollArea className="h-48 mb-4 rounded-md border p-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className="mb-2 p-2 rounded-lg bg-primary/10"
          >
            <p className="text-sm font-medium">{message.text}</p>
            <span className="text-xs text-gray-500">
              {message.sender} • {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
        ))}
      </ScrollArea>

      <div className="grid grid-cols-2 gap-2">
        {preApprovedMessages.map((message, index) => (
          <Button
            key={index}
            variant="outline"
            className="text-sm"
            onClick={() => handleSendMessage(message)}
          >
            {message}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SafeChat;