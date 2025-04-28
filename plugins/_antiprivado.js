export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`> "⭐ Hola @${m.sender.split`@`[0]}, 𝙇𝙤 𝙨𝙞𝙚𝙣𝙩𝙤! 𝙉𝙤 𝙚𝙨𝙩á 𝙥𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙚𝙨𝙘𝙧𝙞𝙗𝙞𝙧𝙢𝙚 𝙥𝙤𝙧 𝙥𝙧𝙞𝙫𝙖𝙙𝙤.
𝐕𝐞𝐧𝐭𝐚 𝐝𝐞 𝐩𝐥𝐚𝐭𝐚𝐟𝐨𝐫𝐦𝐚𝐬 𝐬𝐭𝐫𝐞𝐚𝐦𝐢𝐧𝐠 𝐲 𝐛𝐨𝐭 𝐩𝐚𝐫𝐚 𝐠𝐫𝐮𝐩𝐨𝐬:\n\n> *⭐ Wiii \n\n\n Venta de plataformas, bots, etc.\n Contacto del creador:\+52 4880 4810`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
