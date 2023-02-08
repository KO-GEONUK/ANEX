const React = require('react');
const ReactDom = require('react-dom/client');

const WordRelay = require('./WordRelay_Hooks');

ReactDom.createRoot(document.querySelector('#root')).render(<WordRelay />);
