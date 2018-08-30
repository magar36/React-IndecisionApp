import React from 'react';
import OptionComponent from './OptionComponent';

const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your options below</h3>
                <button 
                    className="button button--link"
                    onClick={props.handleRemoveOpts}
                >
                    Remove All
                </button>
            </div>
            
            {props.opts.length === 0 && <p className="widget__message">Please provide an option to start!</p>}
            
            {
                props.opts.map((option, index) => (
                    <OptionComponent
                        serialNum = {index + 1}
                        key={option}
                        opt={option}
                        handleRemoveOption={props.handleRemoveOption}
                    />
                ))
            }
        </div>
    )

export default Options;