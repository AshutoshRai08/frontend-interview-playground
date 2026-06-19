import { useState } from "react";

type CounterAction = "Increment" | "Decrement" | "Reset";
const CounterPage = () => {
  const [counter, setCounter] = useState(0);
  const handleCounterUpdate = (action: CounterAction) => {
    // console.log(`[Audit Log] Action: ${action} | Current Value: ${counter}`);

    switch (action) {
      case "Increment":
        setCounter((prev) => prev + 1);
        break;
      case "Decrement":
        setCounter((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Reset":
        setCounter(0);
        break;
      // default:
      //   console.warn(`Unhandled action type applied`);
    }
  };
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Counter Page
      </h1>
      <div
        className="counter"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            border: "2px solid red",
            borderRadius: "999px",
            borderColor: "red",
            width: "100px",
            height: "60px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {counter}
        </div>
        <div style={{ display: "flex", gap: "7px" }}>
          <button onClick={() => handleCounterUpdate("Increment")}>
            Increment
          </button>
          <button onClick={() => handleCounterUpdate("Decrement")}>
            Decrement
          </button>
          <button onClick={() => handleCounterUpdate("Reset")}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default CounterPage;
