import React from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider,
  StyledSlider,
} from './style';

import {
  FiVolume2,
  FiShuffle,
  FiSkipBack,
  FiPlay,
  FiPause,
  FiSkipForward,
  FiRepeat,
} from 'react-icons/fi';

const Player = () => (
  <Container>
    <Current>
      <>
        <img
          src="https://images.unsplash.com/photo-1536722138786-c6ea8e7461c4"
          alt="Title"
        />

        <div>
          <span>Title</span>
          <small>The Band</small>
        </div>
      </>
    </Current>

    <Progress>
      <Controls>
        <button type="button" title="Shuffle">
          <FiShuffle />
        </button>
        <button type="button" onClick={() => {}} title="Go back">
          <FiSkipBack />
        </button>
        <button type="button" onClick={() => {}} title="Pause">
          <FiPause />
        </button>
        <button type="button" onClick={() => {}} title="Go forward">
          <FiSkipForward />
        </button>
        <button type="button" title="Repeat">
          <FiRepeat />
        </button>
      </Controls>

      <Time>
        <span>02:00</span>
        <ProgressSlider>
          <StyledSlider type="position" value={40} />
        </ProgressSlider>
        <span>05:00</span>
      </Time>
    </Progress>

    <Volume>
      <FiVolume2 />
      <StyledSlider type="volume" value={70} />
    </Volume>
  </Container>
);

export default Player;
