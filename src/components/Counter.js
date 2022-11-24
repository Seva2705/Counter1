import React from 'react';




    const Counter = () => {

        const [count, setCount] = React.useState(0)

        const handleDec = () => {
            setCount(count - 1);
        }
        const handleInc = () => {
            setCount(count + 1);
        }

        const handleReset = () => {
            setCount(0);
        }

        return (
            <div className='counter'>
                <div className='count'>
                    <div>{count}</div>
                    <button onClick={handleDec}>-</button>
                    <button onClick={handleInc}>+</button>
                    <button onClick={handleReset}>Reset</button>
                </div>

            </div>
        )
    }



export default Counter;