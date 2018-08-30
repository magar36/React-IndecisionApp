import React from 'react';

const Action = (props) => (
        <div>
            <button 
                className="big-button"
                disabled={props.handleShowButton === 0} 
                onClick={props.handleTodo}
            >
                What do I do?
            </button>
            <p></p>
        </div>
    )

export default Action;