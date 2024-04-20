import { Card } from "../ui/card";

interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return (
    <Card className="p-6">
      <div className="flex gap-3">
        <h1 className="font-medium">Hello, {name}!</h1>
      </div>
    </Card>
  );
}

export default Greeting;
