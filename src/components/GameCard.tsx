import { motion } from "framer-motion";

interface GameCardProps {
  title: string;
  description: string;
  icon: string;
  onClick: () => void;
}

const GameCard = ({ title, description, icon, onClick }: GameCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-3xl p-6 shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <img src={icon} alt={title} className="w-24 h-24 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default GameCard;