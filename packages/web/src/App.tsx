import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './routers/AppRouter';

/**
 * Component that renders application. It's the **root** component.
 */
export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
