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
            <div className="hint">
              Your profile information and all the things about yourself
            </div>
            <div className="fields">
              <label for="user">Username</label>
              <input type="email" id="user" />
              <label for="email">E-mail</label>
              <input type="email" id="email" />
              <label for="password">Password</label>
              <button type="button" id="password" className="button-secondary">
                Change password
              </button>
              <label for="language">Language</label>
              <select id="language">
                <option>Choose</option>
                <option>One</option>
              </select>
              <label for="avatar">Avatar</label>
              <button type="button" id="avatar" className="button-secondary">
                Change avatar image
              </button>
              <label for="about">About you</label>
              <textarea id="about" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Notifications</legend>
          <div className="field-block">
            <div className="hint">
              Tell us how much you want to hear from us
            </div>
            <div className="fields">
              <label>
                <input type="checkbox" id="weekly" />
                Weekly newsletter
              </label>
              <label>
                <input type="checkbox" id="daily" />
                Daily announcements
              </label>
              <label>
                <input type="checkbox" id="security" />
                Security warnings
              </label>
              <label>
                <input type="checkbox" id="promotions" />
                Promotions from our partners
              </label>
            </div>
          </div>
        </fieldset>
        <div className="form-confirmation">
          <button type="button" className="button-cancel">
            Cancel
          </button>
          <button type="button" className="button-primary">
            Save changes
          </button>
        </div>
      </form>
    </Content>
  </Container>
);

export default Settings;
