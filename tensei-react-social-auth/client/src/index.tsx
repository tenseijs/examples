import ReactDOM from 'react-dom';
import { TenseiAuthProvider } from '@tensei/react-auth'

import App from './App';

ReactDOM.render(
  <TenseiAuthProvider options={{ refreshTokens: true }}>
    <App />
  </TenseiAuthProvider>,
  document.getElementById('root')
);
