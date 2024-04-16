import { useState } from "react";
import Heading from "./components/Header";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title={"Hello"} />
      <Section title={"new title"}>This is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={[" coffee", "tacos", "code"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
