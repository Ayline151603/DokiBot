let handler = async (m, { conn, command, usedPrefix }) => {
let cafirexostxt = `
> INFINITY-WA HOSTING  X IGNA • BOT\n

🟢 \`\`\`USA IGNA • BOT EN INFINITY HOST\`\`\`

Que esperas para usar *IGNA • BOT* en los mejores servidores de alto rendimiento y de bajo precio. El Staff de *IGNA • BOT* y *INFINITY HOST* hacen posible que puedas ejecutar las funciones que tanto te gusta usar de *IGNA • BOT* sintiendo una experiencia fluida y de calidad.

👇🏻 \`\`\`INFORMACION DEL HOST\`\`\`

💻 *Página*
https://host.panel-infinitywa.store

✨ *Canal*
https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A

📌 *Grupo*
https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV

💥 *Grupo de WhatsApp*
https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ

*🚩Precios :*
* 1GB, 100 CPU = 1Dolar
* 2GB, 120 CPU = 2Dolar
* 3GB, 140 CPU = 3Dolar
* 4GB, 175 CPU = 4Dolar
* 5GB, 200 CPU = 5 Dólar. 

🛍️ *Método de pago:*
*• PayPal (🌍)*
*• Mercado pago(🇦🇷)*
*• Tigo Money(🇧🇴)*
*• Cuenta Rut (🇨🇱)*
*• Naranja x, alías*
*• Yape (🇵🇪)*

🧑‍💻 *Contacto*
https://wa.me/51955918117
`
await conn.sendFile(m.chat, 'https://telegra.ph/file/402a282532bc2fd2dc880.jpg', 'fantasy.jpg', cafirexostxt.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🔰𝐈𝐧𝐟𝐢𝐧𝐢𝐭𝐲-𝐖𝐚 𝑯𝒐𝒔𝒕𝒊𝒏𝒈 🔰`,
body: `✅ Hosting de Calidad`,
mediaType: 1,
sourceUrl: accountsgb,
thumbnailUrl: 'https://telegra.ph/file/402a282532bc2fd2dc880.jpg'
}}
}, { mentions: m.sender })

}
handler.command = /^(cafirexos|prueba38)$/i
export default handler