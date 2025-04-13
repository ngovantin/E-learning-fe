const part5 = (data) =>{
    return `Generate 10 TOEIC Part 5 questions in JSON format based on the given question type and topic. Each question should have the following structure:
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
}
export default part5;