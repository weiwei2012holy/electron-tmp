import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default function App() {
  
    const [msgRes, setMegRes] = useState('')
    const version = globalThis.config.version()
    const send = async () => {
        const res = await globalThis.config.send("客户端消息:" + Math.random())
        setMegRes(res)
    }
    const isDev = globalThis.isDev

    return (
        <>
            <p className='color-red'>Hello World!</p>
            <h2>Version {version}</h2>
            <h2>{isDev ? "is-dev" : "not-dev"}</h2>
            <button onClick={send}>Send</button>
            <p>{msgRes}</p>
        </>
    );
}