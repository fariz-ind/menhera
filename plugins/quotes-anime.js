const fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]
m.reply(`${indo}\n\nCharacter: ${character}\nAnime: ${anime}`)
}
handler.help = ['kataanime']
handler.tags = ['internet']
handler.command = /^(quotesanime)$/i
handler.limit = true

module.exports = handler