import { useState, useEffect } from "react";

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`useEffect: ${count}`);
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <h1>The counter is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default CounterWithEffect;