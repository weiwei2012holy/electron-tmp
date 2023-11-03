import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index-build.css';
import ErrorPage from './components/errorPage';
import Chat from './routes/chat/chat';
import Contact from './routes/contact/contact';
import Root from './routes/root';

import { RouterProvider, createHashRouter, createMemoryRouter } from 'react-router-dom';
import ChatDetail from './routes/chat/detail';
import { loader as chatLoader } from './routes/chat/detail';
import Help from './routes/tool/help';
import Clock from './routes/tool/clock';




const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Chat /> //指定首页，这样不至于打开的时候空白
            },
            {
                path: "chat",
                element: <Chat />,
                children: [

                    {
                        path: ":chatId",
                        element: <ChatDetail />,
                        loader: chatLoader,
                    }

                ]
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }, {
        path: "/alone/",
        errorElement: <ErrorPage />,
        children: [
            {
                path: "chat/:chatId",
                element: <ChatDetail />,
                loader: chatLoader,
            },
            {
                path: "help",
                element: <Help />
            },
            {
                path: "clock",
                element: <Clock />
            },
        ]
    }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
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
        <div className="flex flex-col">
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

            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>


        </div>
    );

}