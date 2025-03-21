import { useState } from "react";

const nameForm = () => {
    const [name, setName] = useState("");

    return (
        <div>
            <span>name: </span>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h1>Hello {name || "World"}</h1>
        </div>
    )
}
export default nameForm;
