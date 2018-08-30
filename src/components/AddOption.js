import React from 'react';

export default class AddOption extends React.Component {
    state = {
            error: undefined
        };

    handleAdd = (e) => {
        e.preventDefault();
        let formText = e.target.elements.formSubmit.value.trim();
        const error = this.props.handleAddOption(formText);
        this.setState(() => ({ error }));
        e.target.elements.formSubmit.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAdd}>
                    <input className="add-option__text" type="text" name="formSubmit" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    };
}