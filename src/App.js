import "./styles.css";
import TestComponent from "./testComponent";

export default function App() {
  const falsyInput1 = "";
  const falsyInput2 = null;
  const falsyInput3 = ![];

  const arrayInput1 = [1, 2, 3];
  const arrayInput2 = ["Hello", "World"];
  const arrayInput3 = [3, 4, "Hello", 5];

  const otherInput1 = "Hello";
  const otherInput2 = 20;
  const otherInput3 = "Hello World";

  return (
    <div className="App">
      <h1>Falsy Input 1</h1>
      <TestComponent input={falsyInput1} />
      <h1>Falsy Input 2</h1>
      <TestComponent input={falsyInput2} />
      <h1>Falsy Input 3</h1>
      <TestComponent input={falsyInput3} />
      <br />
      <h1>Array Input 1</h1>
      <TestComponent input={arrayInput1} />
      <h1>Array Input 2</h1>
      <TestComponent input={arrayInput2} />
      <h1>Array Input 3</h1>
      <TestComponent input={arrayInput3} />
      <br />
      <h1>Other Input 1</h1>
      <TestComponent input={otherInput1} />
      <h1>Other Input 2</h1>
      <TestComponent input={otherInput2} />
      <h1>Other Input 3</h1>
      <TestComponent input={otherInput3} />
      <br />
    </div>
  );
}
