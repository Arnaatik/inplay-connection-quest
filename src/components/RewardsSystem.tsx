import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Medal } from 'lucide-react';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

interface Reward {
  id: string;
  title: string;
  description: string;
  icon: 'star' | 'trophy' | 'medal';
  progress: number;
}

const RewardsSystem = () => {
  const [rewards] = React.useState<Reward[]>([
    {
      id: '1',
      title: 'Creative Star',
      description: 'Complete 5 drawing activities',
      icon: 'star',
      progress: 60,
    },
    {
      id: '2',
      title: 'Team Player',
      description: 'Play 3 collaborative games',
      icon: 'trophy',
      progress: 30,
    },
    {
      id: '3',
      title: 'Communication Champion',
      description: 'Share 5 messages with friends',
      icon: 'medal',
      progress: 80,
    },
  ]);

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'star':
        return <Star className="h-6 w-6 text-yellow-400" />;
      case 'trophy':
        return <Trophy className="h-6 w-6 text-purple-400" />;
      case 'medal':
        return <Medal className="h-6 w-6 text-blue-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-text-primary mb-4">My Rewards</h2>
      
      <div className="grid gap-4">
        {rewards.map((reward) => (
          <motion.div
            key={reward.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-4 shadow-md"
          >
            <div className="flex items-center gap-4">
              {renderIcon(reward.icon)}
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{reward.title}</h3>
                <p className="text-sm text-gray-600">{reward.description}</p>
              </div>
              <Badge variant="secondary">{reward.progress}%</Badge>
            </div>
            <Progress value={reward.progress} className="mt-2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RewardsSystem;