const part7 = (data) =>{
    return `Generate a TOEIC Part 7 reading section with multiple-choice comprehension questions. The output should be in JSON format with the following structure:
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
}

export default part7;