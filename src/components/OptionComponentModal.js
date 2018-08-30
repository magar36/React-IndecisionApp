import React from 'react';
import ReactModal from 'react-modal';

const OptionComponentModal = (props) => (
        <ReactModal 
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            onRequestClose={props.handleSelectionOption}
            className="modal"
        >
            <div>
                <h3 className="modal__title">Selected Option</h3>
                <p className="modal__body">{props.selectedOption}</p>
                <button className="button" onClick={props.handleSelectionOption}>Got It!</button>
            </div>
        </ReactModal>    
    )

export default OptionComponentModal;