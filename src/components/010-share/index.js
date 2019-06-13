import React, { useState } from 'react';
import { FiShare2, FiFacebook, FiTwitter, FiGithub } from 'react-icons/fi';

import { Container } from './style';

const Share = ({ expanded }) => (
  <Container expanded={expanded}>
    <button className="share" title="Share on social networks">
      <FiShare2 />
    </button>
    <button className="social fb" title="Share on Facebook">
      <FiFacebook />
    </button>
    <button className="social tw" title="Share on Twitter">
      <FiTwitter />
    </button>
    <button className="social gh" title="Share on Github">
      <FiGithub />
    </button>
  </Container>
);

export default Share;
