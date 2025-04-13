const part6 = (data) =>{
    return `Generate a TOEIC Part 6 reading passage in ${data.topic ? data.topic : 'radom'} topics with four multiple-choice fill-in-the-blank questions. The output should be in JSON format with the following structure:
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
}

export default part6;