import { useState } from "react";

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <button onClick={() => setIsActive(!isActive)}>{!isActive ? 'Activate the counter' : 'Inactive the counter'}</button>
    )
}
export default ToggleButton;