import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index-build.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default function App() {
    return (
        <Demo />
    );
}

export function Demo() {
    const [msgRes, setMegRes] = useState('')
    const version = globalThis.config.version()
    const send = async () => {
        const res = await globalThis.config.send("客户端消息:" + Math.random())
        setMegRes(res)
    }
    const isDev = globalThis.isDev

    return (
        <div className='flex flex-col gap-5'>
            <p className='w-24 text-cyan-400 text-lg'>Hello World!</p>
            <h2>Version {version}</h2>
            <h2>{isDev ? "is-dev" : "not-dev"}</h2>
            <div class="join gap-5">
                <button className="btn btn-primary" onClick={send}>Send</button>
                
                <button className="btn btn-link">Link</button>
            </div>
            {msgRes.length > 0 && <div class="alert alert-success">
                <span>{msgRes}</span>
            </div>}


        </div>
    );

}