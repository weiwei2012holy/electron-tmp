export default function MainTopbar() {
    return (
        <div className="main-topbar">
            <MainTopbarSearch />
            <div className="divider divider-horizontal"></div>
            <div id="bar-body" className="flex flex-row justify-between items-center w-full" >
                <MainTopbarNotice />
                <MainTopbarTool />
            </div>

        </div>
    );
}

export function MainTopbarSearch({ iconType = null }) {

    let d = 'M12 4.5v15m7.5-7.5h-15'
    if (iconType === "add-user") {
        d = "M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
    }

    return (
        <div className="flex flex-row items-center justify-between w-full p-main gap-2">
        
            <input type="text" placeholder="搜索" className="input input-bordered border-gray-300 input-sm w-full max-w-sm focus:border-teal-100" />
            <button className="btn btn-square btn-sm">
                <MainTopbarSearchIcon d={d} />
            </button>
        </div>
    );
}


export function MainTopbarSearchIcon({ d }) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={d} />
        </svg>
    );
}

export function MainTopbarNotice() {

    return (
        <div>
            msg msg msg msg
        </div>
    );

}

export function MainTopbarTool() {

    return (
        <div className="join join-horizontal items-center mr-5 gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>

        </div>
    );

}