import { useState } from "react";
// Using useState as a hook.

export default function App() {

    const [count, setCount] = useState(0);
    // Making the the array variable with useState.

   return (
      <div>
        <button onClick={() => setCount(count + 1 && "Count Changed")}>Increase</button>
       // Using JSX to increase the count.
        <button onClick={() => setCount(count > 0 && count - 1 && "Count Changed")}>Decrease</button>
        // Using a built in conditional statement to decrease the count but not go below 0.
        <div>{count}</div>
      </div>
    );
  }




