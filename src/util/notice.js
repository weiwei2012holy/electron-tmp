export  async function SendSystemNotice(title, body) {
    return await window.config.sendSystemNotice({
        title: title,
        body: body
    })
}




