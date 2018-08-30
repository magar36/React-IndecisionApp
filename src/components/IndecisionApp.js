import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionComponentModal from './OptionComponentModal';

export default class IndecisionApp extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleRemoveOpts = this.handleRemoveOpts.bind(this);
    //     this.handleTodo = this.handleTodo.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleRemoveOption = this.handleRemoveOption.bind(this);
        state = {
            opts: [],
            selectedOption: undefined
        }
    // }

    componentDidMount() {
        try {
            const jsonObjOpt = JSON.parse(localStorage.getItem('options'));
            jsonObjOpt && this.setState(() => ({ opts: jsonObjOpt }));
        } catch (e) { }
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('prev state', prevState.count);
        // console.log('new state', this.state.count);
        if (prevState.opts.length !== this.state.opts.length) {
            const jsonStrOpt = JSON.stringify(this.state.opts);
            localStorage.setItem('options', jsonStrOpt);
        }
    }

    componentWillUnmount() {
        console.log('unmounted');
    }

    handleRemoveOpts = () => {
        this.setState(() => ({ opts: [] }));
    }

    handleRemoveOption = (optionToRemove) => {
        // console.log('Deleting option ', option);
        // this.setState((prevState) => ({ opts: prevState.opts.filter((option, index, arr) => arr.indexOf(optionToRemove) !== index) }));
        this.setState((prevState) => ({ opts: prevState.opts.filter((option) => optionToRemove !== option) }));
    }

    handleTodo = () => {
        let randomNum = Math.floor(Math.random() * this.state.opts.length);
        // alert(this.state.opts[randomNum]);
        this.setState(() => ({selectedOption: this.state.opts[randomNum]}))
    }

    handleAddOption = (option) => {

        if (!option) {
            return 'Please enter a valid option value'
        } else if (this.state.opts.indexOf(option) > -1) {
            return 'The option already exists.'
        }

        this.setState((prevState) => ({ opts: prevState.opts.concat(option) }));
        // console.log(prevState.opts.push([option]))
    }

    handleSelectionOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }

    render() {
        // const title = 'Indecision App';
        const subtitle = 'Let me decide what you can do!';
        // let opts = ['Optione one', 'Option two', 'Option three'];
        return (
            <div>
                <Header
                    // title = {title} --> taken from default props
                    subtitle={subtitle}
                />
                <div className="container">
                    <Action
                        handleShowButton={this.state.opts.length}
                        handleTodo={this.handleTodo}
                    // opts = {this.state.opts}  -- this is used if handleTodo is not created
                    />
                    <div className="widget-body">
                        <Options
                            opts={this.state.opts}
                            handleRemoveOpts={this.handleRemoveOpts}
                            handleRemoveOption={this.handleRemoveOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    <OptionComponentModal 
                        selectedOption={this.state.selectedOption}
                        handleSelectionOption={this.handleSelectionOption}
                    />
                </div>
            </div>
        )
    };
}