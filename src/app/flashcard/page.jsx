'use client';
import AddFlashcard from '@/components/cards/AddFlashcard';
import Flashcard from '@/components/cards/Flashcard';
import useFetch from '@/Hooks/useFetch';
import ListLayout from '@/layout/ListLayout';


const TITLE = `Vocabulary Flashcards | Learn Faster, Remember Longer | Tinn.edu.vn`;
const DESCRIPTION = `Supercharge your language learning with smart flashcards on Tinn.edu.vn! Dive into themed word sets, reinforce your memory with scientifically proven spaced repetition, and watch your vocabulary grow effortlessly. Whether you're a student, professional, or language enthusiast, our interactive flashcards make learning fun, engaging, and effective. Start today and take your language skills to the next level!`;


const page = () => {
  const { data: flashcards } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/flashcard`, true);

  return (
    <ListLayout title={TITLE} description={DESCRIPTION}>
      <div className='grid gap-3 lg:grid-cols-2'>
        <AddFlashcard/>
        {flashcards &&
          flashcards.map((flashcard) => (
            <Flashcard
              key={flashcard._id}
              name={flashcard.name}
              createdDate={flashcard.createdAt}
              vocabCount={flashcard.vocabulary}
              description={flashcard.description}
              language={flashcard.language}
              flashcardId={flashcard._id}
            />
          ))}
      </div>
    </ListLayout>
  );
};
export default page;
