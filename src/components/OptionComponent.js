import React from 'react';

const OptionComponent = (props) => (
        <div className="option">
            <p className="option__text">{props.serialNum}. {props.opt}</p>
            <button
                className="button button--link"
                onClick={() => {
                    props.handleRemoveOption(props.opt)
                }}
            >
                Remove
            </button>
        </div>
    )

export default OptionComponent;