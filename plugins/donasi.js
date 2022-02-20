let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
╭─〘 *Donasi* 〙
│❒ *Pulsa:* 6285158338027
│❒ *Gopay:* 6285158338027
│❒ *Saweria:* https://saweria.co/AkaishiMD
│❒ Ingin Donasi? Chat
│wa.me/6285158338027?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm