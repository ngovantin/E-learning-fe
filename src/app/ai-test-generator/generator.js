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
            prompt = `Generate 10 TOEIC Part 5 questions in JSON format based on the given question type and topic. Each question should have the following structure:
            {    
                questions: {
                "id": "id of question start with 1(type: number)"
                "question": "The sentence with a blank to be filled",
                "options": {
                    "A": "Option A",
                    "B": "Option B",
                    "C": "Option C",
                    "D": "Option D"
                    },
                "answer": "The correct option (A, B, C, D), randomly distributed among the options",
                "explanation": "A detailed explanation of the correct answer"
                },
                "allAnswers": "An array contain all correct answers"
            }
                Question Type: ${data.typePart5 ? data.typePart5.join(',') : 'random'}
                Topic: ${data.topic ? data.topic : 'random'} 
                Ensure that the correct answer is randomly distributed among A, B, C, D. Return only the JSON object without extra text.`;
            break;
        case 6:
            prompt = `Generate a TOEIC Part 6 reading passage in ${data.topic ? data.topic : 'radom'} topics with four multiple-choice fill-in-the-blank questions. The output should be in JSON format with the following structure:
                {
                "title": "<Insert passage title>",
                "passages": [
                {
                    "type": "<Type of passage, e.g., Email, Article, Notice>",
                    "content": "<Insert passage content>"
                }
                ],
                "questions": [
                    {
                    "id": "id of question start with 1(type: number)",
                    "question": "empty",
                    "options": {
                        "A": "<Option A>",
                        "B": "<Option B>",
                        "C": "<Option C>",
                        "D": "<Option D>"
                    },
                    "answer": "<Correct option>",
                    "explanation": "<Why this option is correct>"
                    }
                ],
                "allAnswers": "An array contain all correct answers"
                }

                - The passage should have a title relevant to the topic.
                - Ensure the passage is around 100-150 words long.
                - The passage should have four blanks, each corresponding to a specific question.
                - The 4 questions must correspond to the following 4 categories:
                    Word Form (Noun, Verb, Adjective, Adverb)
                    Grammar (Verb Tenses, Conditional Sentences, Passive Voice, Relative Clauses, Reported Speech, Parallel Structure, Comparisons)
                    Vocabulary (Synonyms & Antonyms, Phrasal Verbs, Idioms, Collocations, Word Choice)
                    Full linking statement insertion with completely sentence structure
                - The answer choices should be plausible, with one clearly correct option.
                - The explanations should clarify why the correct answer is the best choice.
                - The correct answers should be randomly distributed among options A, B, C, D.`;
              break;
        case 7:
          console.log('part7')
            prompt = `Generate a TOEIC Part 7 reading section with multiple-choice comprehension questions. The output should be in JSON format with the following structure:
            {
                "title": "<Insert passage title>",
                "passages": [
                {
                    "type": "<Type of passage, e.g., Email, Article, Notice>",
                    "content": "<Insert passage content>"
                }
                ],
                "questions": [
                {
                    "id": "id of question start with 1(type: number)"
                    "type": "Inference",
                    "question": "What can be inferred from the passage?",
                    "options": {
                    "A": "<Option A>",
                    "B": "<Option B>",
                    "C": "<Option C>",
                    "D": "<Option D>"
                    },
                    "answer": "<Correct option>",
                    "explanation": "<Why this option is correct>"
                }
                ],
                "allAnswers": "An array contain all correct answers"
            }
            The passage should have a title relevant to the topic.
            Generate a passage with ${data.typePart7} passages.
            The passage should be about ${data.topic ? data.topic : 'random topic'}.
            The number of passages and questions should follow these rules:
                1 passage: 2–3 questions
                2 passages: 3–5 questions
                3 passages: always 5 questions
            The passages array contains 1 objects, each with:
            type: Describes the type of text (e.g., Email, Notice, Article, Advertisement).
            content: The actual passage content.
            The questions array contains multiple-choice questions related to one or more passages.
            Ensure answer choices are plausible, with one clearly correct option.
            The explanations should clarify why the correct answer is the best choice.
            The correct answers should be randomly distributed among options A, B, C, and D.
            Possible question types include:
            - Main Idea
            - Detail
            - Inference
            - Vocabulary in Context
            - Purpose of the Passage
            - Reference (e.g., "What does 'it' refer to?")`;
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
