let handler = async (m, { conn, text }) => {

let _idioma = '🚩 *Seleccione su idioma*\n\n> Idiomas disponibles:\nes _(Español)_\nen _(Inglés)_\nid _(Indonesio)_\nar _(Árabe)_\npt _(Portugués)_\n\n`Ejemplo:`\n.idioma es'
if (!text) {
let listSections = []    
listSections.push({
title: '',
rows: [{ header: "Español 🇪🇦", title: "", id: `.idioma es`, description: `` },
{ header: "English 🇺🇸", title: "", id: `.idioma en`, description: `` },
{ header: "Bahasa Indonesia 🇮🇩", title: "", id: `.idioma id`, description: `` },
{ header: "عرب 🇸🇦", title: "", id: `.idioma ar`, description: `` },
{ header: "Português 🇵🇹", title: "", id: `.idioma pt`, description: `` }
]})
return conn.sendList(m.chat, _idioma, null, `🌐 Idiomas`, listSections, { mentions: [m.sender]}, {quoted: m})
//return conn.sendButton(m.chat, _idioma, '🍟 Seleccione su idioma', null, [['Español 🇲🇽', `.idioma es`], ['Inglés 🇺🇸', `.idioma en`], ['Indonesio 🇮🇩', `.idioma id`]], null, null, m)
}
let choice = text.includes('es') ? 'es' : text.includes('en') ? 'en' : text.includes('id') ? 'id' : text.includes('ar') ? 'ar' : text.includes('pt') ? 'pt' : null
if (!choice) {
return m.reply('Por favor, seleccione uno de los idiomas disponibles: español, inglés o indonesio.')
}
global.lenguajeGB = choice
switch (choice) {
case 'es':
return m.reply('Idioma configurado a Español 🇲🇽')
case 'en':
return m.reply('Language set to English 🇺🇲')
case 'id':
return m.reply('Bahasa diatur ke Indonesia 🇮🇩')
}
}
handler.command = /^lenguage|lenguaje|idioma$/i
handler.rowner = true
export default handler
