import React from 'react';
import { ScreenContainer, ButtonContainer } from './styled';

const UserContainer = ({ data, repos, starred }) => {
  return (
    <ScreenContainer>
      <div className="ui card">
        <div className="image">
          <img src={data.avatar_url} alt={data.avatar_url} />
        </div>
        <div className="content">
          {data.name}
          <div className="meta">
            <span className="date">{data.location}</span>
          </div>
          <div className="description">{data.bio}</div>
        </div>
        <div className="extra content">
          <i className="user icon"></i>
          {data.followers} seguidores
        </div>
      </div>
      <ButtonContainer>
        <div className="ui compact menu">
          <div className="ui simple dropdown item">
            Repos
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="item">
                {repos.map((repo) => (
                  <div className="ui relaxed divided list" key={repo.name}>
                    <div className="item">
                      <i className="large github middle aligned icon"></i>
                      <div className="content">
                        <a
                          href={repo.html_url}
                          className="header"
                          target="blank"
                        >
                          {repo.name}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="ui compact menu">
          <div className="ui simple dropdown item">
            Starred
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="item">
                {starred.map((repo) => (
                  <div className="ui relaxed divided list" key={repo.name}>
                    <div className="item">
                      <i className="large github middle aligned icon"></i>
                      <div className="content">
                        <a
                          href={repo.html_url}
                          className="header"
                          target="blank"
                        >
                          {repo.name}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ButtonContainer>
    </ScreenContainer>
  );
};

export default UserContainer;
