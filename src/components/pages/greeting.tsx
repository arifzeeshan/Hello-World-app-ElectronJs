interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return (
    <>
      <div className="flex gap-3">
        <h1 className="font-medium">Hello, {name}!</h1>
      </div>
    </>
  );
}

export default Greeting;
