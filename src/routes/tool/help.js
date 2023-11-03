import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'


export default function Help() {


    const items = [
        {
            id: 1,
            route: "/alone/help",
            name: "help",
            desc: "help index page",
            bgName: "1.png",
        },
        {
            id: 2,
            route: "/alone/clock",
            name: "clock",
            desc: "clock with notice",
            bgName: "2.png",
        },
        {
            id: 3,
            route: "/alone/clock",
            name: "clock",
            desc: "clock333 with notice",
            bgName: "2.png",
        },
        {
            id: 4,
            route: "/alone/clock",
            name: "clock",
            desc: "clock44 with notice",
            bgName: "2.png",
        },
        {
            id: 5,
            route: "/alone/clock",
            name: "clock",
            desc: "clock555 with notice",
            bgName: "2.png",
        },
    ];

    const [showItems, setShowItems] = useState(items)

    const handleSeach = (e) => {
        let keyword = e.target.value
        let newItems = items.filter(item => item.name.includes(keyword) || item.desc.includes(keyword))
        setShowItems(newItems)
    }





    return (

        <div className='h-screen w-screen flex flex-col items-center'>
            <input type="text" placeholder="search" className="input input-bordered w-64 mt-5 mb-5 max-w-xs focus:input-secondary " onChange={handleSeach} />
            <div className='grid auto-cols-auto'>
                {showItems.length > 0 ? showItems.map(item => <HelpCard item={item} />) :
                    <div className="alert alert-warning mt-24 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>No Data Found Hear...</span>
                  </div>
                }
            </div>
        </div>
    );
}

function HelpCard({ item }) {

    return (
        <div className={"card card-compact w-96 bg-base-100 shadow-xl "+ (item.id == 5 && "justify-self-start")} key={item.id}>
            <figure><img src={"static/image/bgHelp/" + item.bgName} alt={item.name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.desc}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline btn-primary">打开</button>
                    <Link to={item.route} relative='path' className="btn btn-outline btn-primary">跳转</Link>
                </div>
            </div>
        </div>
    );

}