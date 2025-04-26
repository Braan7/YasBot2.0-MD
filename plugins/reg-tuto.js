let handler = async (m, { conn }) => {
  const usuario = m.pushName || 'Usuario';
  const videoUrl = 'https://qu.ax/nMLul.mp4';

  const texto = `Hola @${m.sender.split('@')[0]} aquí está el tutorial para registrarte en 𝐘𝐀𝐒 𝐁𝐎𝐓.`;

  const options = {
    quoted: m,
    caption: texto,
    mentions: [m.sender]
  };

  await conn.sendMessage(m.chat, { video: { url: videoUrl }, ...options });
};

handler.command = ['tutorialreg']

export default handler;
