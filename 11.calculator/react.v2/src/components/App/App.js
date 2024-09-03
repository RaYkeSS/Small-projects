import { useState } from "react";

import Numbers from "../comps/Numbers";
import Expression from "../comps/Expression";
import Operation from "../comps/Operation";

export default function App() {
  const btnClasses =
    "px-4 py-2 bg-white text-black rounded shadow-[0px_0px_10px_0px] shadow-current hover:bg-gray-300 hover:shadow-gray-300 active:bg-gray-400 active:shadow-gray-400";

  const [expA, setExpA] = useState("0");
  const [expB, setExpB] = useState("");
  const [operator, setOperator] = useState("");
  const [nextExp, setNextExp] = useState(true);

  const operators = ["+", "-", "*", "/"];

  function calculate() {
    const a = +expA;
    const b = +expB;
    let result;
    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;

      default:
        break;
    }
    setExpA(result);
    setExpB("");
    setOperator("");
    setNextExp(true);
  }

  function clearAll() {
    setExpA("0");
    setExpB("");
    setOperator("");
    setNextExp(true);
  }

  return (
    <div className="bg-[#282c34] min-h-screen text-white flex flex-wrap gap-10 flex-col justify-center p-5 items-center">
      <Expression expA={expA} expB={expB} operator={operator} />
      <Numbers
        expA={expA}
        setExpA={setExpA}
        expB={expB}
        setExpB={setExpB}
        nextExp={nextExp}
        btnClasses={btnClasses}
      />
      <Operation
        nextExp={nextExp}
        setNextExp={setNextExp}
        operator={operator}
        setOperator={setOperator}
        operators={operators}
        btnClasses={btnClasses}
        clearAll={clearAll}
        calculate={calculate}
      />
    </div>
  );
}
