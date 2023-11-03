import { MainTopbarSearch } from "../../components/mainTopbar";

export default function Contact() {

    const openBook = function(){
        window.open('../alone/chat/2')
        console.log('open book')
    
    }

    return (
        <div className="flex flet-row w-full h-full">
            <div className="main-mid-content">
                <MainTopbarSearch iconType="add-user" />
                <div className="p-main w-full">
                    <button className="btn btn-sm w-full" onClick={openBook}>通讯录管理</button>
                </div>


                <ContactList />
            </div>

            <div className="divider divider-horizontal"></div>
            <ContactBody className="w-full" />
        </div>

    );
}

export function ContactList({ items = undefined }) {
    return <h1>list</h1>
}

export function ContactBody() {

    return <h1>body</h1>


}