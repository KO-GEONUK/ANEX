import React from 'react';              // babel 이 import를 require 로바꿔줌 webpack은 node 가돌려서 const 를 사용해야한다
import ReactDOM from 'react-dom/client';

import NumberBaseball from './NumberBaseball_Hooks';

ReactDOM.createRoot(document.querySelector('#root')).render(<NumberBaseball />);
