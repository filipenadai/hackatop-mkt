import { NextApiRequest, NextApiResponse } from "next";
import {  OpenAI } from "openai";

// const CACA = 'Aja como uma personagem chamada Caca que é uma capivara de Curitiba que ajuda as pessoas leigas a entenderem melhor sobre tecnologia de uma maneira humanizada'
const PHONES = [
    {
        "name": "Smartphone Infinix Note 30 5G h8GB RAM 256GB Câmera Triplas R 108MP Tela 6,78' FHD+ Bateria 5000mAh Dual Chip BAZUM 256GE",
        "price": "R$ 2.399,00"
    },
    {
        "name": "Smartphone INFINIX NOTE 30 5G 8GB RAM 256GB Câmera Tripla G 108MP Sound by JBL 6,78' FHD4 fi Pretot",
        "price": "R$ 2.399,00"
    },
    {
        "name": "Smartphone INFINIX SMART 7 64GB 3GB RAM Câmera Dupla28G 13MP 5000mAh Tela 6,6' HD+ Dual Chip - Preto 5G",
        "price": "R$ 899,00"
    },
    {
        "name": "Smartphone Infinix Hot 30 8GB RAM 256GB Câmera Dupla 50MPer Tela 6,78' FHD+ Dual Chip - Preto finix",
        "price": "R$ 1.799,00"
    },
    {
        "name": "Smartphone Infinix Hot 30i 8GB RAM 128GB Câmera Dupla 50 MPGI Tela 6,6' HD+ Dual Chip - Azul",
        "price": "R$ 1.399,00"
    },
    {
        "name": "Smartphone INFINIX Zero 5G 1128GB Câmera Tripla até 48 MPer 5000 mAh Tela 6,78' de 120 Hz FUlIHD Dual Chip 5G 8GB RAM SG Preto",
        "price": "R$ 2.499,00"
    },
    {
        "name": "Smartphone Infinix Hot 30i 8GB RAM 128GB Câmera Dupla 50 MPGI Tela 6,6' HD+ Dual Chip - Azul",
        "price": "R$ 1.299,00"
    },
    {
        "name": "Smartphone INFINIX Hot 11 128 1GB Câmera Tripla até 50 MPGB 4( 6000 mAhTela 6,82' de 90 Hz HD Dual Chip 4GB RAM - Preto",
        "price": "R$ 1.999,00"
    },
    {
        "name": "Smartphone Infinix Hot 30i 4GB RAM 128GB Câmera Dupla 50MP Bateria de 5000mAh Tela 6,6' HD+ Dual Chip - Branco",
        "price": "R$ 1.299,00"
    },
    {
        "name": "Smartphone INFINIX HOT 20 5G 128GB 4GB RAM Câmera Dupla até 50MP 5000mAh Tela 6,6'120Hz Dual Chip - Preto",
        "price": "R$ 1.599,00"
    }
]
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const openai = new OpenAI({
    apiKey: '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',
  });

  const question = req.body.question;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "assistant", content: `Com base nessas opções a seguir, responda a pergunta em seguida sem falar coisas técnicas apenas amigável para usuários comuns em apenas 30 palavras: ${JSON.stringify(PHONES)}. ${question}` },
      ],
      n: 1,
      stop: null,
      temperature: 1,
    });

    res.status(200).json({ answer: response.choices[0].message.content });
  } catch (err) {
    console.log(err);
    res.status(200).json({ answer: 'Não consegui identificar o melhor celular para sua necessidade, tente novamente.' });
  }


}
