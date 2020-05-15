import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const App = () => <Routes />;

ReactDOM.render(
    <>
        <ReactNotification />
        <App />
    </>,
    document.getElementById('root')
);
