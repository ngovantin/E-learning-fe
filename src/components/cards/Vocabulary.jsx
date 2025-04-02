import { faPenToSquare, faTrash, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Vocabulary = ({ data }) => {
  const readText = (text) => {
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    synth.speak(utterance);
  };

  return (
    <div className='flex flex-col md:flex-row gap-5 rounded-lg border p-5 shadow-lg'>
      {data?.image && (
        <div className='w-full md:w-1/3'>
          <img src={data.image} alt={data.word} className='w-full h-auto rounded-lg object-cover' />
        </div>
      )}
      <div className='flex flex-col justify-between w-full'>
        <div>
          <div className='mb-4'>
            <div className='flex items-center gap-2'>
              <h2 className='text-xl font-semibold'>{data?.word}</h2>
              {data?.partOfSpeech && (
                <span className='bg-gray-300 text-xs px-2 py-1 rounded-sm'>{data.partOfSpeech}</span>
              )}
              <FontAwesomeIcon
                icon={faVolumeHigh}
                onClick={() => readText(data?.word)}
                className='cursor-pointer text-blue-500 hover:text-blue-700 transition duration-200'
              />
            </div>
            {data?.phonetic && <p className='text-gray-600'>{data.phonetic}</p>}
          </div>
          {data?.meaning && <p className='text-gray-800 mb-2'>{data.meaning}</p>}
          {data?.exampleSentence && (
            <p className='text-gray-700 italic border-l-4 border-gray-400 pl-3'>{data.exampleSentence}</p>
          )}
        </div>
        <div className='flex gap-4 mt-4 md:mt-0 md:self-end'>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className='cursor-pointer transition duration-200'
          />
          <FontAwesomeIcon
            icon={faTrash}
            className='cursor-pointer text-red-500 hover:text-red-700 transition duration-200'
          />
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;
