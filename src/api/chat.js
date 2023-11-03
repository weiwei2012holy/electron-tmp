

export async function getChatList() {

    const ts = ['昨天', '10:12', '10-11']
    var items = [];
    for (let index = 1; index < 100; index++) {
        items.push({
            chatId: index,
            chatName: "John Doe",
            chatType: index % 2,
            lastMessage: "Hello".repeat(index % 10),
            lastMessageTime: ts[Math.floor(Math.random() * ts.length)],
            chatAvatar: "/static/image/avatar/" + index % 2 + ".png",
            newMessageCount: parseInt(Math.random() * 200) - 50,
        });

    }
    return items
}

export async function getChat(id) {


    let item = {
        chatId: id,
        chatName: "用户+" + id,
        chatAvatar: "/static/image/avatar/" + id % 2 + ".png",
        newMessageCount: Math.random() * 100,
        lastMessage: "",
        messages: []
    }

    let ts = Date.now()

    for (let index = 1; index < 10; index++) {

        item.messages.push({
            messageId: ts + index,
            message: Math.random() + "Hello 你好呀～～".repeat(index),
            user: {
                from: index,
                name: "尊贵用户VIP " + index,
                avatar: "/static/image/avatar/" + index % 2 + ".png",
            }
        });

    }

    item.lastMessage = item.messages[item.messages.length - 1].message

    return item

}