import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ChapterProgress({ chapter }) {
  const [currentChapter, setCurrentChapter] = useState(50);
  useEffect(() => {
    setCurrentChapter(currentChapter);
  }, [currentChapter]);

  return (
    <div className="flex flex-col gap-2 justify-center items-start w-64 ">
      <span className="text-black-two font-roboto font-light text-sm opacity-50">
        CURRENT CHAPTER
      </span>
      <span className="text-black-two font-roboto font-light">
        {chapter}
      </span>
      <button type="button" className="text-dirty-white bg-azure rounded w-fit font-light font-roboto px-5 py-2 text-sm">UPDATE PROGRESS</button>
    </div>
  );
}

ChapterProgress.propTypes = {
  chapter: PropTypes.string.isRequired,
};
