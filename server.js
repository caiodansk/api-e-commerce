const express = require('express');
const path = require('path');
const app = express();
const port = 3001;


app.use(express.static(path.join(__dirname, 'public')));

const products = [
  { id: 1, title: "SonicBass Pro", price: "$59.99", images: ["https://img.freepik.com/psd-gratuitas/instagram-de-super-venda-de-sexta-feira-negra-e-modelo-de-banner-de-historia-do-facebook_106176-1620.jpg?t=st=1724556079~exp=1724559679~hmac=af3a808ce267584466bd2e7c99978bc1de5110b80c15087b71470b5e287827ab&w=360"] },
  { id: 2, title: "PureSound Elite", price: "$79.99", images: [
    "https://img.freepik.com/psd-gratuitas/modelo-de-banner-de-postagem-de-midia-social-ou-postagem-do-instagram-da-venda-da-sexta-feira-negra_505751-6102.jpg?t=st=1724552939~exp=1724556539~hmac=dbadcaeee11a9488732c1bff042bcc8631ced9c9e5837bf27ba02c9adb7529b7&w=740",
    "https://img.freepik.com/free-photo/cup-coffee-morning_1150-17280.jpg"
  ] },
  { id: 3, title: "ThunderBeats Max", price: "$99.99", images: [
    "https://img.freepik.com/psd-gratuitas/modelo-de-banner-de-postagem-de-midia-social-ou-postagem-do-instagram-da-venda-da-sexta-feira-negra_505751-6102.jpg?t=st=1724552939~exp=1724556539~hmac=dbadcaeee11a9488732c1bff042bcc8631ced9c9e5837bf27ba02c9adb7529b7&w=740",
    "https://img.freepik.com/free-photo/cup-coffee-morning_1150-17280.jpg"
  ]},
  { id: 4, title: "EchoWave 360", price: "$69.99", images: ["https://img.freepik.com/psd-gratuitas/loja-online-de-dispositivos-compras-flyer-quadrado_23-2148564946.jpg?t=st=1724555813~exp=1724559413~hmac=4a467a2840afbd92028797b0bb111488d120459077edd46bcfdd25a183d0e853&w=740"] },
  { id: 5, title: "CrystalClear ANC", price: "$89.99", images: ["https://img.freepik.com/psd-gratuitas/projeto-de-modelo-de-vendas_23-2151101806.jpg?uid=R122525785&ga=GA1.1.602959656.1718938692&semt=ais_hybrid"] },
  { id: 6, title: "BassBoost Studio", price: "$49.99", images: ["https://img.freepik.com/psd-gratuitas/modelo-de-folheto-de-venda-de-design-plano_23-2149201083.jpg?t=st=1724555921~exp=1724559521~hmac=276726f5bb54072e3eb5af3b45599df3d827510bad42636425f63f1549bc14b3&w=740"] },
  { id: 7, title: "BassBoost Studio", price: "$50.99", images: ["https://img.freepik.com/psd-gratuitas/design-de-banner-promocional-de-liquidacao-de-sexta-feira-negra-com-efeito-de-texto-3d_47987-17356.jpg?t=st=1724555958~exp=1724559558~hmac=cfbe64842bbd8766305ca79faf36ea05ffef9aff5be31d45bc2dca9daf15af70&w=740"] },
  { id: 8, title: "ClarityZone X", price: "$50.99", images: ["https://img.freepik.com/psd-gratuitas/modelo-de-design-de-historia-em-midia-social-de-super-promocao-da-black-friday_47987-18008.jpg?t=st=1724555996~exp=1724559596~hmac=78856b3e61a40dea0b415b4841f66d93158fdac1dffcc50b2f3094b60c36f5c9&w=360"] },
    { id: 9, title: "ClarityZone X", price: "$50.99", images: ["https://img.freepik.com/psd-gratuitas/modelo-de-design-de-historia-em-midia-social-de-super-promocao-da-black-friday_47987-18008.jpg?t=st=1724555996~exp=1724559596~hmac=78856b3e61a40dea0b415b4841f66d93158fdac1dffcc50b2f3094b60c36f5c9&w=360"] },
    { id: 10, title: "ClarityZone X", price: "$50.99", images: ["https://img.freepik.com/psd-gratuitas/modelo-de-design-de-historia-em-midia-social-de-super-promocao-da-black-friday_47987-18008.jpg?t=st=1724555996~exp=1724559596~hmac=78856b3e61a40dea0b415b4841f66d93158fdac1dffcc50b2f3094b60c36f5c9&w=360"] },
    { id: 11, title: "Cozy Knit Sweater2001", price: "$50.99", images: ["https://img.freepik.com/psd-gratuitas/modelo-de-design-de-historia-em-midia-social-de-super-promocao-da-black-friday_47987-18008.jpg?t=st=1724555996~exp=1724559596~hmac=78856b3e61a40dea0b415b4841f66d93158fdac1dffcc50b2f3094b60c36f5c9&w=360"] },
    { id: 12, title: "UltraQuiet NoisePro", price: "$50.99", images: ["https://img.freepik.com/psd-gratuitas/modelo-de-design-de-historia-em-midia-social-de-super-promocao-da-black-friday_47987-18008.jpg?t=st=1724555996~exp=1724559596~hmac=78856b3e61a40dea0b415b4841f66d93158fdac1dffcc50b2f3094b60c36f5c9&w=360"] },
  ];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/products', (req, res) => {
  res.json({ products });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
