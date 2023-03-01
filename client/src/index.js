import React from 'react';
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client';
import App from './App';

import Provider from './context/context';

ReactDOM.render(
    <SpeechProvider appId="b80050fe-da24-4cca-a474-9289b617eadb" language="en-US" >
        <Provider >
            <App />
        </Provider>
    </SpeechProvider>, 
    document.getElementById('root')
);