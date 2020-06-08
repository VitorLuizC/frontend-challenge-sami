import React from 'react';
import { render } from 'react-dom';

import App from './App';

declare global {
  var process: {
    env: {
      NODE_ENV: 'development' | 'production';
      TOKEN?: string;
    };
  };
}

render(<App />, document.getElementById('root'));
