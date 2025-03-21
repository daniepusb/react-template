import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>The counter is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            { count <= 0 ? <button disabled>Decrementar</button> : <button onClick={() => setCount(count - 1)}>Decrement</button> }
        </div>
    )
}

export default Counter;