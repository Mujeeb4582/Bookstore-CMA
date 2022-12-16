import React from 'react';
import PropTypes from 'prop-types';
import ChapterProgress from './chapter-prograss';
import Progress from './prograss';

export default function BookProgress({ percent, chapter }) {
  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:gap-12">
      <Progress percent={percent} />
      <div className="border-b-2 lg:border-l-2 border-grey-border" />
      <ChapterProgress chapter={chapter} />
    </div>
  );
}

BookProgress.propTypes = {
  percent: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};
