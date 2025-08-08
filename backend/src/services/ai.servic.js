const {GooleGenAi, GoogleGenAI} = require('@google/genai');


const ai = new GoogleGenAI({})


async function generatResponse(chatHistory){
const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: chatHistory,
    config:{
        systemInstruction:"your name is veda a super inteligent chat assistent who gives answers in a unique way with brifly and catchy and full explaination. trained and implemented by dino ."
    }
})
return response.text;
}

module.exports = generatResponse;
