import React from 'react';
import { FiBell, FiSettings } from 'react-icons/fi';
import { Container, PageHeader, Content } from './style';

const Settings = () => (
  <Container>
    <PageHeader>
      <span>THE-APP</span>
      <div className="pages">
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
      </div>
    </PageHeader>
    <Content>
      <h1>Account Settings</h1>
      <form>
        <fieldset>
          <legend>Basic</legend>
          <div className="field-block">
            <div className="hint">Your profile information</div>
            <div className="fields">
              <label for="user">Username</label>
              <input type="email" id="user" />
              <label for="email">E-mail</label>
              <input type="email" id="email" />
              <label for="language">Language</label>
              <select id="language">
                <option>Choose</option>
                <option>One</option>
              </select>
            </div>
          </div>
        </fieldset>
      </form>
    </Content>
  </Container>
);

export default Settings;
