import part5 from './part5';
import part6 from './part6';
import part7 from './part7';

const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  generationConfig: {
    responseMimeType: 'application/json'
  }
});

const testGenerator = async (data) => {
  try {
    let prompt;
    switch (data.part) {
        case 5:
            prompt = part5(data);
            break;
        case 6:
            prompt = part6(data);
              break;
        case 7:
            prompt = part7(data);
            break;
        default:
            break;
    }
    const res = await model.generateContent(prompt);
    return JSON.parse(res.response.text());
  } catch (error) {
    console.log(error);
  }
};

export default testGenerator;
