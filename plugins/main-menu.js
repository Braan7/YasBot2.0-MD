
let handler = async (m, { conn }) => {
    let img = 'https://qu.ax/VzlOU.jpg';

    
    let name = await conn.getName(m.sender);

    let texto = `💗• 𝘝𝘦𝘯𝘵𝘢 𝘥𝘦 𝘱𝘭𝘢𝘵𝘢𝘧𝘰𝘳𝘮𝘢𝘴 𝘺 𝘣𝘰𝘵𝘴 𝘢𝘭 +52 442 572 0856 

Creador de Bots: +52 56 4880 4810.
Escribeme al privado para renta o personalización de Bots. 
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭──🌸 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈Ó𝐍
┋🎀•  .precios1
┋🎀•  .precios2
┋🎀•  .staff
┋🎀•  .botreglas
┋🎀•  .owner
┋🎀•  .grupos
┋🎀•  .allmenu
┋🎀•  .menu2
┋🎀•  .menu3
┋🎀•  .runtime
┋🎀•  .totalfunciones
┋🎀•  .menuff
╰──🌸
╭──🌸 𝐒𝐄𝐀𝐑𝐂𝐇
┋🎀•  .pinscroll <búsqueda>
┋🎀•  .pinseguir
┋🎀•  .pinatras
┋🎀•  .ytsearch <texto>
┋🎀•  .yts <texto>
┋🎀•  .tksearch <búsqueda>
┋🎀•  .tkseguir
┋🎀•  .pelisplus <título>
┋🎀•  .neko
┋🎀•  .waifu
┋🎀•  .biblia <referencia>
┋🎀•  .biblia <referencia>
╰──🌸
╭──🌸 𝐆𝐀𝐌𝐄
┋🎀•  .trivia
┋🎀•  .capitalde
┋🎀•  .pelear
┋🎀•  .adivinabandera
┋🎀•  .ahorcado
┋🎀•  .game
┋🎀•  .slot <apuesta>
┋🎀•  .sopa
┋🎀•  .buscarpalabras
┋🎀•  .apostar <cantidad>
╰──🌸
╭──🌸 𝐒𝐔𝐁 𝐁𝐎𝐓𝐒
┋🎀• 
╰──🌸
╭──🌸 𝐑𝐏𝐆
┋🎀•  .abrircofre
┋🎀•  .resemanal
┋🎀•  .buy <cantidad>
┋🎀•  .work
┋🎀•  .darxp @user <cantidad>
┋🎀•  .verxp
┋🎀•  .lb
┋🎀•  .annual
┋🎀•  .yearly
┋🎀•  .aventura
┋🎀•  .adventure
┋🎀•  .batalla @usuario
┋🎀•  .berburu
┋🎀•  .chetarki
┋🎀•  .chetarki
┋🎀•  .claim2
┋🎀•  .claim3
┋🎀•  .crimen
┋🎀•  .dardulces @user <cantidad>
┋🎀•  .regalarxp @user <cantidad>
┋🎀•  .claim
┋🎀•  .dulces
┋🎀•  .explorar
┋🎀•  .halloween
┋🎀•  .heal
┋🎀•  .inventario
┋🎀•  .inv
┋🎀•  .ki
┋🎀•  .levelup
┋🎀•  .masc
┋🎀•  .monthly
┋🎀•  .minar
┋🎀•  .quitarxp @user <cantidad>
┋🎀•  .retirar
┋🎀•  .weekly
╰──🌸
╭──🌸 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎
┋🎀•  .profile [@user]
┋🎀•  .profile [@user]
┋🎀•  .setbirth <establece tu cumpleaños>
┋🎀•  .setdescription <establece tu descripción>
┋🎀•  .setgenre <establece tu genero>
┋🎀•  .profile
┋🎀•  .reg
┋🎀•  .unreg
┋🎀•  .confesar <número mensaje>
┋🎀•  .respuesta <id mensaje>
╰──🌸
╭──🌸 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
┋🎀•  .brat <texto>
┋🎀•  .pfp @user
┋🎀•  .quotly <texto>
┋🎀•  .scat
┋🎀•  .stiker <img>
┋🎀•  .sticker <url>
┋🎀•  .wm <nombre>|<autor>
┋🎀•  .emojimix m <emoji+emoji>
╰──🌸
╭──🌸 𝐈𝐌𝐀𝐆𝐄𝐍
┋🎀•  .pinterest <término>
╰──🌸
╭──🌸 𝐆𝐑𝐎𝐔𝐏𝐒
┋🎀•  .mute
┋🎀•  .unmute
┋🎀•  .grouptime <open/close> <número>
┋🎀•  .add <número>
┋🎀•  .banearbot
┋🎀•  .chetaruser
┋🎀•  .delete
┋🎀•  .demote @tag
┋🎀•  .fantasmas
┋🎀•  .infogp
┋🎀•  .hidetag
┋🎀•  .encuesta <pregunta|opciones>
┋🎀•  .promote 593xxx
┋🎀•  .promote @usuario
┋🎀•  .promote responder chat
┋🎀•  .resetlink
┋🎀•  .setbye @user + texto
┋🎀•  .setwelcome @user + texto
┋🎀•  .sorteo
┋🎀•  .todos
┋🎀•  .desbanearbot
┋🎀•  .kick @user
┋🎀•  .emotag < emoji >
╰──🌸
╭──🌸 𝐎𝐍/𝐎𝐅𝐅
┋🎀•  .enable
┋🎀•  .disable
┋🎀•  .on
┋🎀•  .off
╰──🌸
╭──🌸 𝐏𝐑𝐄𝐌𝐈𝐔𝐌
┋🎀•  .xnxxsearch <query>
╰──🌸
╭──🌸 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃
┋🎀•  .audio
┋🎀•  .animedl <anime-id> <episode-number>
┋🎀•  .capcutdownload <url cc>
┋🎀•  .tiktokuser <usuario>
┋🎀•  .spotify
┋🎀•  .music
┋🎀•  .fb <link>
┋🎀•  .playaudio <texto>
┋🎀•  .mp3
┋🎀•  .spotify
┋🎀•  .music
┋🎀•  .xnxxsearch <query>
╰──🌸
╭──🌸 𝐓𝐎𝐎𝐋𝐒
┋🎀•  .pinscroll <búsqueda>
┋🎀•  .pinseguir
┋🎀•  .pinatras
┋🎀•  .flux <texto>
┋🎀•  .tourl2
┋🎀•  .tourl
┋🎀•  .rev
┋🎀•  .dalle
┋🎀•  .nuevafotochannel
┋🎀•  .nosilenciarcanal
┋🎀•  .silenciarcanal
┋🎀•  .noseguircanal
┋🎀•  .seguircanal
┋🎀•  .avisoschannel
┋🎀•  .resiviravisos
┋🎀•  .inspect
┋🎀•  .inspeccionar
┋🎀•  .eliminarfotochannel
┋🎀•  .reactioneschannel
┋🎀•  .reaccioneschannel
┋🎀•  .nuevonombrecanal
┋🎀•  .nuevadescchannel
┋🎀•  .setmoneda
┋🎀•  .reenviar
┋🎀•  .demo
┋🎀•  .fake <texto/@tag/texto>
┋🎀•  .hd
┋🎀•  .removebg
┋🎀•  .tourl2
┋🎀•  .tourl
┋🎀•  .tts <lang> <teks>
┋🎀•  .tomp3
╰──🌸
╭──🌸 𝐅𝐔𝐍
┋🎀•  .love
┋🎀•  .coffe/cafe @tag
┋🎀•  .dado
┋🎀•  .formarnv
┋🎀•  .acariciar @tag
┋🎀•  .amistad
┋🎀•  .gay2 @user
┋🎀•  .lesbiana @user
┋🎀•  .pajero @user
┋🎀•  .pajera @user
┋🎀•  .puto @user
┋🎀•  .puta @user
┋🎀• .manco @user
┋🎀•  .manca @user
┋🎀•  .rata @user
┋🎀•  .prostituta @user
┋🎀•  .prostituto @user
┋🎀•  .consejo
┋🎀•  .doxear <nombre> | <@tag>
┋🎀•  .facto
┋🎀•  .follar
┋🎀•  .formarpareja
┋🎀•  .formarpareja5
┋🎀•  .formartrio
┋🎀•  .oracion
┋🎀•  .gay
┋🎀•  .huevo @user
┋🎀•  .insulto
┋🎀•  .kchero
┋🎀•  .besar @tag
┋🎀•  .love @user
┋🎀•  .madrid
┋🎀•  .marry @usuario
┋🎀•  .divorce
┋🎀•  .morse <encode|decode>
┋🎀•  .pajeame
┋🎀•  .perra
┋🎀•  .personalidad <nombre>
┋🎀•  .piropo
┋🎀•  .pregunta <texto>
┋🎀•  .acosar @usuario
┋🎀•  .abrazar @usuario
┋🎀•  .llorar @usuario
┋🎀•  .abrazar @usuario
┋🎀•  .awoo @usuario
┋🎀•  .besar @usuario
┋🎀•  .lamer @usuario
┋🎀•  .acariciar @usuario
┋🎀•  .engreído @usuario
┋🎀•  .golpear @usuario
┋🎀•  .lanzar @usuario
┋🎀•  .ruborizarse @usuario
┋🎀•  .sonreír @usuario
┋🎀•  .saludar @usuario
┋🎀•  .chocar @usuario
┋🎀•  .sostener @usuario
┋🎀•  .morder @usuario
┋🎀•  .glomp @usuario
┋🎀•  .abofetear @usuario
┋🎀•  .matar @usuario
┋🎀•  .feliz @usuario
┋🎀•  .guiñar @usuario
┋🎀•  .tocar @usuario
┋🎀•  .bailar @usuario
┋🎀•  .cringe @usuario
┋🎀•  .reto
┋🎀•  .sapa
┋🎀•  .sapo
┋🎀•  .sorteo
┋🎀•  .top
┋🎀•  .verdad
┋🎀•  .tijeras @tag
┋🎀•  .zorra
┋🎀•  .acertijo
┋🎀•  .ruleta <cantidad> <color>
┋🎀•  .buycoins
┋🎀•  .buyall
┋🎀•  .letra <texto>
╰──🌸
╭──🌸 𝐍𝐒𝐅𝐖
┋🎀•  .pechos
┋🎀• 【 .tetas
┋🎀•  .genshin
┋🎀•  .swimsuit
┋🎀•  .schoolswimsuit
┋🎀•  .white
┋🎀•  .barefoot
┋🎀•  .touhou
┋🎀•  .gamecg
┋🎀• .hololive
┋🎀•  .uncensored
┋🎀•  .sunglasses
┋🎀•  .glasses
┋🎀•  .weapon
┋🎀•  .shirtlift
┋🎀•  .chain
┋🎀•  .fingering
┋🎀•  .flatchest
┋🎀•  .torncloth
┋🎀•  .bondage
┋🎀•  .demon
┋🎀•  .wet
┋🎀•  .pantypull
┋🎀•  .headdress
┋🎀•  .headphone
┋🎀•  .tie
┋🎀•  .anusview
┋🎀•  .shorts
┋🎀•  .stokings
┋🎀•  .topless
┋🎀•  .beach
┋🎀•  .bunnygirl
┋🎀•  .bunnyear
┋🎀•  .idol
┋🎀•  .vampire
┋🎀•  .gun
┋🎀•  .maid
┋🎀•  .bra
┋🎀•  .nobra
┋🎀•  .bikini
┋🎀•  .whitehair
┋🎀•  .blonde
┋🎀•  .pinkhair
┋🎀•  .bed
┋🎀•  .ponytail
┋🎀•  .nude
┋🎀•  .dress
┋🎀•  .underwear
┋🎀•  .foxgirl
┋🎀•  .uniform
┋🎀•  .skirt
┋🎀•  .sex
┋🎀•  .sex2
┋🎀•  .sex3
┋🎀•  .breast
┋🎀•  .twintail
┋🎀•  .spreadpussy
┋🎀•  .tears
┋🎀•  .seethrough
┋🎀•  .breasthold
┋🎀•  .drunk
┋🎀•  .fateseries
┋🎀•  .spreadlegs
┋🎀•  .openshirt
┋🎀•  .headband
┋🎀•  .food
┋🎀•  .close
┋🎀•  .tree
┋🎀•  .nipples
┋🎀•  .erectnipples
┋🎀•  .horns
┋🎀•  .greenhair
┋🎀•  .wolfgirl
┋🎀•  .catgirl
┋🎀•  .r34 <texto>
┋🎀•  .pack
┋🎀•  .pack2
┋🎀•  .pack3
┋🎀•  .videoxxx
┋🎀•  .vídeoxxx
┋🎀•  .videoxxxlesbi
┋🎀•  .videolesbixxx
┋🎀•  .pornolesbivid
┋🎀•  .pornolesbianavid
┋🎀•  .pornolesbiv
┋🎀•  .pornolesbianav
┋🎀•  .pornolesv
┋🎀•  .pack
┋🎀•  .pack2
┋🎀•  .pack3
┋🎀•  .videoxxx
┋🎀•  .vídeoxxx
┋🎀•  .videoxxxlesbi
┋🎀•  .videolesbixxx
┋🎀•  .pornolesbivid
┋🎀•  .pornolesbianavid
┋🎀•  .pornolesbiv
┋🎀•  .pornolesbianav
┋🎀•  .pornolesv
┋🎀•  .pack
┋🎀•  .pack2
┋🎀•  .pack3
┋🎀•  .videoxxx
┋🎀•  .vídeoxxx
┋🎀•  .videoxxxlesbi
┋🎀•  .videolesbixxx
┋🎀•  .pornolesbivid
┋🎀•  .pornolesbianavid
┋🎀•  .pornolesbiv
┋🎀•  .pornolesbianav
┋🎀•  .pornolesv
╰──🌸
╭──🌸 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄
┋
╰──🌸
╭──🌸 𝐎𝐖𝐍𝐄𝐑
┋
╰──🌸
╭──🌸 𝐀𝐔𝐃𝐈𝐎𝐒
┋🎀•  .bass <mp3/vn>
┋🎀•  .blown <mp3/vn>
┋🎀•  .deep <mp3/vn>
┋🎀•  .earrape <mp3/vn>
┋🎀•  .fast <mp3/vn>
┋🎀•  .fat <mp3/vn>
┋🎀•  .nightcore <mp3/vn>
┋🎀•  .reverse <mp3/vn>
┋🎀•  .robot <mp3/vn>
┋🎀•  .slow <mp3/vn>
┋🎀•  .smooth <mp3/vn>
┋🎀•  .tupai <mp3/vn>
┋🎀•  .reverb <mp3/vn>
┋🎀•  .chorus <mp3/vn>
┋🎀•  .flanger <mp3/vn>
┋🎀•  .distortion <mp3/vn>
┋🎀•  .pitch <mp3/vn>
┋🎀•  .highpass <mp3/vn>
┋🎀•  .lowpass <mp3/vn>
┋🎀•  .underwater <mp3/vn>
╰──🌸
╭──🌸 𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃
┋🎀•
╰──🌸
╭──🌸 𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄
┋🎀•
╰──🌸
╭──🌸 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒
┋🎀•  .yta
┋🎀•  .ytmp3
┋🎀•  .play2
┋🎀•  .ytv
┋🎀•  .ytmp4
┋🎀•  .tiktok2 *<link>*
┋🎀•  .yta
┋🎀•  .ytmp3
┋🎀•  .play2
┋🎀•  .ytv
┋🎀•  .ytmp4
┋🎀•  .mega
┋🎀•  .ttmp3 
┋🎀•  .tiktokmp3 
┋🎀•  .apk2
┋🎀•  .mediafire
╰──🌸
╭──🌸 𝐌𝐀𝐊𝐄𝐑
┋🎀•  .gay
╰──🌸
╭──🌸 𝐉𝐔𝐄𝐆𝐎𝐒
┋🎀•  .apostardulces <cantidad> @usuario
┋🎀•  .topmascota
╰──🌸
╭──🌸 𝐑𝐀𝐍𝐃𝐎𝐌
┋🎀•  .tiktokvalle
┋🎀•  .tiktokfrases
┋🎀•  .tiktokhot
┋🎀•  .tiktokmusic
╰──🌸
╭──🌸 𝐄𝐍𝐋𝐀𝐂𝐄𝟐
┋🎀•  .link2
╰──🌸
╭──🌸 𝐄𝐂𝐎𝐍
┋🎀• 【 .afk [alasan]
┋🎀•  .rf
┋🎀•  .rm
╰──🌸
╭──🌸 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒
┋🎀•  .wikipedia <apa> 
┋🎀•  .google <pencarian>
┋🎀•  .googlef <pencarian>
╰──🌸
╭──🌸 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑
┋🎀•  .mercadolibre <búsqueda>
┋🎀•  .tweetposts
╰──🌸
╭──🌸 𝐓𝐑𝐀𝐍𝐒𝐅𝐎𝐑𝐌𝐀𝐃𝐎
┋🎀•  .ibb
┋🎀•  .tourl2
╰──🌸
╭──🌸 𝐅𝐈𝐗
┋🎀•  .dsowner
┋🎀•  .dsowner
╰──🌸
╭──🌸 𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓
┋🎀•  .imagen *<texto>*
┋🎀•  .imagen *<texto>*
╰──🌸
╭──🌸 𝐃𝐋
┋🎀•  .imagen *<texto>*
┋🎀•  .gitclone *<url git>*
┋🎀•  .igstory
┋🎀•  .likee *<url>*
┋🎀•  .tiktok *<url>*
┋🎀•  .tiktokhd *<url>*
┋🎀•  .ig *<link>*
┋🎀•  .ytmp4 *<link yt>*
┋🎀•  .imagen *<texto>*
╰──🌸
╭──🌸 𝐓𝐈𝐊𝐓𝐎𝐊
┋🎀•  .tksearch <búsqueda>
┋🎀•  .tkseguir
╰──🌸
╭──🌸 𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄
┋🎀•  .donarsala
┋🎀•  .12vs12
┋🎀•  .16vs16
┋🎀•  .20vs20
┋🎀•  .24vs24
┋🎀•  .4vs4
┋🎀•  .6vs6
┋🎀•  .8vs8
┋🎀•  .cuadrilatero
┋🎀•  .guerra
┋🎀•  .interna4
┋🎀•  .reglaslideres
┋🎀•  .reglaslideres2
┋🎀•  .scrim
┋🎀•  .purgatorio
┋🎀•  .alpes
┋🎀• .bermuda
┋🎀•  .menuff
╰──🌸
╭──🌸 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀
┋🎀•  .spotify 
╰──🌸
╭──🌸 𝐄𝐂𝐎𝐍𝐎𝐌𝐘
┋🎀• .bal
┋🎀• .bank
┋🎀• .depositar
┋🎀• .prestar [cantidad] [@tag]
┋🎀• .pagar [cantidad] [@tag]
┋🎀• .deuda [cantidad] [@tag]
┋🎀• .rob2
┋🎀• .abrircasa
╰──🌸
╭──🌸 𝐄𝐂𝐎𝐍𝐎𝐌Í𝐀
┋🎀• .dulcesdiario
┋🎀• .canjearcaramelos <cantidad>
┋🎀• .ganarmonedas
┋🎀• .quitarmonedas <cantidad>
╰──🌸
╭──🌸 𝐄𝐌𝐎𝐗
┋🎀•  .sleep/dormir @tag
┋🎀•  .bite/morder @tag
┋🎀•  .blush/sonrojarse @tag
┋🎀•  .bored/aburrido @tag
┋🎀•  .grop/manosear @tag
┋🎀•  .happy/feliz @tag
┋🎀•  .hello/hola @tag
┋🎀•  .kill/matar @tag
┋🎀•  .sad/triste @tag
┋🎀•  .smoke/fumar @tag
╰──🌸
 ╭──🌸 𝐍𝐒𝐅𝐖𝐒
┋🎀•  .anal/culiar @tag
┋🎀•  .cum/leche @tag
┋🎀•  .penetrar @user
┋🎀•  .lickpussy/coño @tag
┋🎀•  .sexo/sex @tag
┋🎀•  .violar/perra @tag
╰──🌸
╭──🌸 𝐃𝐈𝐕𝐄𝐑𝐒𝐈Ó𝐍
┋🎀•  .adoptada @usuario
┋🎀•  .adoptado @usuario
┋🎀•  .gordopantene @usuario
┋🎀•  .gordoteton @usuario
┋🎀•  .meme
┋🎀•  .negra @usuario
┋🎀•  .peruana @usuario
┋🎀•  .peruano @usuario
┋🎀•  .sinculo @usuario
┋🎀•  .sinpito @usuario
┋🎀•  .sintetas @usuario
┋🎀•  .meme
┋🎀•  .mp4meme
╰──🌸
╭──🌸 𝐃𝐈𝐕𝐄𝐑𝐒𝐈Ó𝐍
┋🎀•  .asustar @usuario
╰──🌸
╭──🌸 𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐎𝐑
┋🎀•  .cpf <numero>
╰──🌸
╭──🌸 𝐆𝐀𝐌𝐄𝐒
┋🎀•  .deathnote
╰──🌸
╭──🌸 𝐈𝐍𝐅𝐎
┋🎀•  .cuartoschampions
┋🎀•  .sugerir
┋🎀•  .status
┋🎀•  .horario
┋🎀•  .newcommand
┋🎀•  .ping
┋🎀•  .sistema
┋🎀•  .sugerir
┋🎀•  .reportar
╰──🌸
╭──🌸 𝐀𝐑𝐓𝐄
┋🎀•  .poesía
╰──🌸
╭──🌸 𝐂𝐎𝐂𝐈𝐍𝐀
┋🎀•  .recetas
╰──🌸
╭──🌸 𝐆𝐀𝐂𝐇𝐀
┋🎀•  .givechar <nombre del personaje> @usuario
┋🎀•  .givewaifu <nombre del personaje> @usuario
┋🎀•  .regalar <nombre del personaje> @usuario
╰──🌸
╭──🌸 𝐀𝐈
┋🎀•  .chatgpt <texto>
┋🎀•  .ia <texto>
╰──🌸
╭──🌸 𝐆𝐑𝐔𝐏𝐎
┋🎀•  .group abrir / cerrar
┋🎀•  .groupdesc <text>
┋🎀•  .link
┋🎀•  .setname <text>
┋🎀•  admins <texto>
┋🎀•  .delete
┋🎀•  .invite <numero>
┋🎀•  .listonline
╰──🌸
╭──🌸 𝐒𝐓𝐀𝐅𝐅
┋🎀•  .noaceptar
┋🎀•  .noaceptar
╰──🌸
╭──🌸 𝐉𝐀𝐃𝐈𝐁𝐎𝐓
┋🎀•  .code
╰──🌸
╭──🌸 𝐋𝐎𝐆𝐎
┋🎀•  .menu3
╰──🌸
╭──🌸 𝐌𝐀𝐒𝐂𝐎𝐓𝐀
┋🎀•  .excavar
╰──🌸
╭──🌸 𝐌𝐀𝐒𝐂𝐎𝐓𝐀𝐒
┋🎀•  .level
┋🎀•  .viajar
╰──🌸
╭──🌸 𝐀𝐃𝐌𝐈𝐍
┋🎀•  .quitardulces <cantidad> <@usuario>
╰──🌸
╭──🌸 *herramientas* 】
┋🎀•  .clima *<ciudad/país>*
╰──🌸
 > 𝙏𝙚𝙖𝙢 BraanBot
`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['menu']
handler.tags = ['main'] 
handler.command = ['menu'] 
export default handler
