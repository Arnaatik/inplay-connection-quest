import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ParentDashboard = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-text-primary mb-6">Parent Dashboard</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Today's Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>Social Interaction</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Creative Expression</span>
                <span>60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              <span>Completed Drawing Game</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-secondary rounded-full"></span>
              <span>Practiced Communication</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default ParentDashboard;