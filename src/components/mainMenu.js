import { NavLink } from 'react-router-dom'
import { ChatBubbleOvalLeftEllipsisIcon, UsersIcon, SquaresPlusIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'



export default function MainMenu() {

    return (
        <div id="main-menu" className="min-w-max join join-vertical justify-center items-center bg-gradient-to-b from-purple-300 to-pink-500">
            <button className="avatar w-10 mt-10 mx-3 border-lg dropdown">
                <img src="/static/image/avatar/0.png" alt="avatar " />
                {/* <div className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 right-100">
                    <h1>1111</h1>
                    <h1>1111</h1>
                    <h1>1111</h1>
                    <h1>1111</h1>
                    <h1>1111</h1>
                </div> */}
            </button>

            <div id="menu-top" className="col-center h-full justify-between text-slate-100 py-3">
                <div id='menu-main' className="gap-3 join join-vertical">
                    <button className='w-7 h-7 '>
                        <NavLink to={`chat`}>
                            <ChatBubbleOvalLeftEllipsisIcon className="" />
                        </NavLink>
                    </button>

                    <button className="w-7 h-7 ">
                        <NavLink to={`contact`}>
                            <UsersIcon />
                        </NavLink>
                    </button>

                </div>
                <div id="menu-foot" className="join join-vertical gap-3">
                    <button className="w-7 h-7">
                        <NavLink to={`alone/help`}>
                            <SquaresPlusIcon />
                        </NavLink>
                    </button>

                    <button className="w-7 h-7">
                        <NavLink to={`chat/1`}>
                            <Cog8ToothIcon />
                        </NavLink>
                    </button>

                </div>

            </div>

        </div>
    );

}

export function MenuIcon({ d }) {

    return (
        <div className='justify-center mb-3 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d={d} />
            </svg>
            {/* <small>名称</small> */}
        </div>
    );

}