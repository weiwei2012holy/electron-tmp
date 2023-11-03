import MainMenu from "../../components/mainMenu"
import { useEffect } from 'react'
import { useState } from 'react'
import { getChatList } from "../../api/chat";
import { MainTopbarSearch } from "../../components/mainTopbar";
import { redirect, Outlet, NavLink } from "react-router-dom";

export default function Chat() {

    const [chats, setChats] = useState([]);
    // const [selectedChat, setSelectedChat] = useState(null);

    useEffect(() => {
        getChatList()
            .then(data => setChats(data));
    }, []);



    return (
        <div className="flex flet-row w-full h-full">
            <div className="flex flex-col border-r border-slate-100 bg-slate-50/50">
                <MainTopbarSearch />
                <ChatList chats={chats} />
            </div>
            <Outlet />
        </div>

    );
}


export function ChatList({ chats }) {
    console.log('ChatList')
    return (
        <div className="h-full w-full overflow-y-scroll" key={'chat-list'}>
            {chats.map(e => <ChatDetail chat={e} key={e.chatId} />)}
        </div>
    );
}



export function ChatDetail({ chat }) {

    const chatDetail = function (id) {
        // redirect('chat/' + id)
    }


    return (
        <NavLink to={'/chat/' + chat.chatId} preventScrollReset={true}
            className={({ isActive, isPending, isTransitioning }) =>
                [
                    isPending ? "pending" : "",
                    isActive ? "active" : "",
                    isTransitioning ? "transitioning" : "",

                ].join(" ")
            }
        >

            <div className="flex flex-row content-center hover:bg-slate-300 text-sm px-2 py-2 border-b h-24 gap-2 ">



                <div className="avatar w-12 h-12  ">
                    <div className="rounded-xl">
                        {/* <img src="/static/image/avatar/1.jpg" /> */}
                        <img src={chat.chatAvatar} />
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <div className="w-48  ">
                        <div className="font-medium text-slate-600">{chat.chatName}</div>
                        <p className="text-sm font-light text-slate-400 truncate ...">{chat.lastMessage}</p>
                    </div>
                    <div className="w-10 text-xs">
                        <div className="text-slate-400 ">{chat.lastMessageTime}</div>
                        {chat.newMessageCount > 0 ?
                            <div className="badge badge-secondary badge-xs">{chat.newMessageCount > 99 ? '99+' : chat.newMessageCount}</div>
                            :
                            null
                        }
                    </div>
                </div>

            </div>

        </NavLink>



    );

}