'use client';
import useFetch from '@/Hooks/useFetch';
import { faArrowRight, faSquarePlus, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as motion from 'motion/react-client';

const Dictionary = () => {
  const [vocab, setVocab] = useState('');
  const [result, setResult] = useState();
  const [fetch, setFetch] = useState(0);
  const [flashcardId, setFlashcardId] = useState('');
  const { data: flashcards } = useFetch(`/v1/flashcard`, true);
  const token = useSelector((state) => state.auth.currentUser?.accessToken);
  const handleLookup = async () => {
    try {
      setFetch(0);
      if(!vocab) return;
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${vocab}`);
      setResult(res.data[0]);
      setFetch(1);
    } catch (error) {
      setFetch(2);
    }
  };
  const handlePlayAudio = (url) => {
    const audio = new Audio(url);
    audio.play();
  };
  const handleAddVocab = (word, meaning, phonetic) => {
    if (!flashcardId) return;
    try {
      axios.post(
        `/v1/vocab`,
        { word, meaning, phonetic, flashcardId },
        { headers: { token: `Bearer ${token}` } }
      );
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className='h-[400px] w-[90vw] max-w-[550px] rounded-xl bg-[#FFFFFF] p-7 text-gray-600 shadow-lg md:w-[50vw] lg:w-[40vw]'
    >
      <div className='mb-7 flex items-center justify-between'>
        <input
          onChange={(e) => {
            setVocab(e.target.value);
          }}
          type='text'
          className='w-[73%] border-b-[1.5px] border-[#12a483] p-1 text-xs outline-none'
        />
        <div
          onClick={handleLookup}
          className='flex h-7 w-11 items-center justify-center rounded-lg bg-[#12a483] text-white'
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      {result ? (
        <div>
          <div className='flex items-center justify-between'>
            <h2>{result.word}</h2>
            <FontAwesomeIcon
              icon={faVolumeHigh}
              onClick={() => {handlePlayAudio(result.phonetics[1].audio);}}
            />
          </div>
          <p className='text-xs text-gray-500'>{result.phonetics[1].text}</p>

          <div className='my-5 flex h-30 flex-col gap-y-2 overflow-auto'>
            {result.meanings.map((meaning, index) => (
              <div key={index} className='text-[10px]'>
                <h5 className='uppercase'>{meaning.partOfSpeech}</h5>
                <p>{meaning.definitions[0].definition}</p>
              </div>
            ))}
          </div>
          <div className='flex flex-col items-center justify-between gap-y-4 text-sm'>
            <select
              value={flashcardId}
              onChange={(e) => {
                setFlashcardId(e.target.value);
              }}
            >
              <option value=''>--Choose Flashcard--</option>
              {flashcards?.map((flashcard) => (
                <option key={flashcard._id} value={flashcard._id}>
                  {flashcard.name}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                handleAddVocab(result.word, result.meanings[0].definitions[0].definition, result.phonetics[1].text);
              }}
              className='h-8 w-[90%] rounded-lg bg-[#ff723d] font-bold text-white'
            >
              <FontAwesomeIcon icon={faSquarePlus} /> ADD
            </button>
          </div>
        </div>
      ) : (
        <div className='flex h-[80%] items-center justify-center'>
          <img src='dictionary_backdop.png' className='h-full' />
        </div>
      )}
    </motion.div>
  );
};
export default Dictionary;
