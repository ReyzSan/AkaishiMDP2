let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `
╭═══ *〘 SEWA 〙*
┊ ⌲ Sewa = _5k/grup (1 minggu)_
┊ ⌲ Sewa = _10k/grup (1 bulan)_
┊ ⌲ Sewa = _20k/grup (2 bulan)_
┊ ⌲ Sewa = _50k/grup (8 bulan)_                                                                      ║┊ ⌲ Sewa = _45k/grup (12 bulan)_
╰═ ┅ ═══════
╭═══ *〘 PAKET HEMAT 〙*
┊ ⌲ _15k (Sewa 1 bulan, premium 1 Bulan)_
┊ ⌲ _25k (Sewa 2 bulan, premium 1.5 bulan)_
┊ ⌲  _60k (8 Bulan sewa, 5 Bulan premium)_
┊ ⌲  _100k (Seumur Hidup Bot)_
╰═ ┅ ═══════

༅ _*KEUNTUNGAN SEWABOT*_

✧ *Bot akan masuk gc*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Bisa Memasukkan Bot Ke dalam Grup*

*[❗] Jika Group Sepi 2 minggu, bot akan leave*

◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Official Bot*
_https://chat.whatsapp.com/H2YpbQsOdwn8GLDmuZzRW2_

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Payment', '#payment', 'Owner', '#Nowner', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^sewa(bot)?$/i

module.exports = handler

let wm = global.botwm