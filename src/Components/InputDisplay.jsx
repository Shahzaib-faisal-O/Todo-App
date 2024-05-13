import React, { useState } from 'react'

const InputDisplay = () => {
    // State to hold the user input
    const [inputData, setInputData] = useState('');

    // Function to update the state with user input
    const handleInputChange = (event) => {
        setInputData(event.target.value);
    };
    return (
        <div>
            <h1>User Input Display</h1>
            <input
                type="text"
                value={inputData}
                onChange={handleInputChange}
                placeholder="Enter something..."
            />
            <p>You entered: {inputData}</p>
        </div>
    )
}

export default InputDisplay
