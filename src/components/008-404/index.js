import React from 'react';
import { Container } from './style';

const Error404 = () => (
  <Container>
    <header>
      <span>THE-APP</span>
      {/* <div className="pages">
        <a href="">Home</a>
        <a href="">House</a>
        <a href="">Abode</a>
      </div>
      <div className="settings">
        <a title="Notifications" href="">
          <FiBell />
        </a>
        <a title="Settings" href="">
          <FiSettings />
        </a>
        <a href="" title="User page">
          <img
            src="https://avatars0.githubusercontent.com/u/8916632?v=4"
            alt="User avatar"
          />
        </a>
      </div> */}
    </header>
    <main className="content">
      <div className="label-404">404</div>
      <div className="description">
        The requested URL /page was not found on this server. That's an error.
        Check back our <a href="/">home</a> or look for more content at the{' '}
        <a href="/search">search page</a>.
      </div>
    </main>
  </Container>
);

export default Error404;
