import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css';
import './styles/styles.scss';

const template = <IndecisionApp />;
const renderAt = document.getElementById('app');

ReactDOM.render(template, renderAt);