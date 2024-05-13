import React, { useState } from 'react';
import './style/todos.css';

const Todo = () => {
    const [showInputDisplay, setShowInputDisplay] = useState(false);
    const [inputDataArray, setInputDataArray] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddInput = () => {
        setInputDataArray([...inputDataArray, inputValue]);
        setInputValue('');
    };

    return (
        <div className="todos">
            <h2>Tasks</h2>
            <div className="task">
                {/* Displaying existing tasks */}
                <p>Task 1</p>
                <p>Task 2</p>
                <p>Task 3</p>
                {/* Displaying tasks from input */}
                {inputDataArray.map((task, index) => (
                    <p key={index}>{task}</p>
                ))}
            </div>
            <div className="btn">
                <button onClick={() => setShowInputDisplay(!showInputDisplay)}>Input Task</button>

                {/* Displaying input component conditionally */}
                {showInputDisplay && (
                    <div>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Enter a new task..."
                        />
                        <button onClick={handleAddInput}>Add</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Todo;
