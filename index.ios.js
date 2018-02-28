
import React, {Component} from 'react';
import App from './app/App';
import {
    AppRegistry,
} from 'react-native';

export default class NotePad extends Component {
    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('notepad', () => NotePad);
