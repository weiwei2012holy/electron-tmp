import { getLoginUserInfo } from "../../api/auth";
import { getChat } from "../../api/chat";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const chat = await getChat(params.chatId);
    return { chat };
}

export default function ChatDetail() {
    const { chat } = useLoaderData();
    console.log(chat.chatId);

    if (chat === undefined || chat === null) {
        return <div>Chat not found</div>
    }

    const me = getLoginUserInfo()


    return (
        <div id='chat-body' key={chat.chatId} className="w-full h-full flex flex-col justify-between bg-slate-100">


            <div className="h-20 w-full flex flex-row items-stretch justify-between">
                <div className="flex flex-auto items-center h-full">
                    <div className="avatar  ml-2">
                        <div className="w-10 h-10 rounded-xl">
                            <img src={chat.chatAvatar} />
                        </div>

                    </div>
                    <div>
                        <p>{chat.chatName}</p>
                        <small>desc desc</small>
                    </div>
                </div>
                <div className="flex flex-auto items-center h-full justify-end">
                    <ul className="menu menu-horizontal rounded-box">
                        <li>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>


            <div className="h-full overflow-y-scroll">
                {

                    chat.messages.map(e => <MessageBody message={e} send={e.user.from === me.id} key={e.messageId} />)
                }

            </div>
            <div className="h-64 w-full">
                发送
            </div>



        </div>
    );
}

export function MessageBody({ message, send }) {
    return (
        <div className={send ? "p-main chat chat-end" : "p-main chat chat-start"}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={message.user.avatar} />
                </div>
            </div>
            <div className="chat-header text-xs opacity-50">
                {message.user.name}
                <time className="text-xs opacity-30"> 12:45</time>
            </div>
            <div className="chat-bubble chat-bubble-success max-w-md overflow-clip">{message.message}</div>
            {/* <div className="chat-footer opacity-50">
                Delivered
            </div> */}
        </div>
    );



}