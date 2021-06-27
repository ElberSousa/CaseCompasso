import React, { useState, useCallback, useEffect } from 'react';
import { InputsContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { BASE_URL } from '../../constants/urls';
import UserContainer from '../../components/UserContainer/UserContainer';
import { ScreenContainer } from './styled';
import { useParams } from 'react-router-dom';

const SearchForm = () => {
  const [data, setData] = useState({});
  const [userName, setUserName] = useState('');
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);
  const { nickName } = useParams();

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const loadProfile = useCallback(async (nickName) => {
    const profile = await fetch(`${BASE_URL}/${nickName}`);
    const profileJson = await profile.json();
    return profileJson;
  }, []);

  const loadRepos = useCallback(async (repos_url) => {
    const repos = await fetch(repos_url);
    const reposJson = await repos.json();
    return reposJson;
  }, []);

  const loadStarred = useCallback(async (nickName) => {
    const starred = await fetch(`${BASE_URL}/${nickName}/starred`);
    const starredJson = await starred.json();
    return starredJson;
  }, []);

  const loadData = useCallback(
    async (nickName) => {
      const profile = await loadProfile(nickName);
      const repos = await loadRepos(profile.repos_url);
      const starred = await loadStarred(nickName);

      if (profile) {
        setData(profile);
        setRepos(repos);
        setStarred(starred);
      }
    },
    [loadProfile, loadRepos, loadStarred]
  );

  useEffect(() => {
    if (nickName) {
      loadData(nickName);
    }
  }, [loadData, nickName]);

  const submitHandler = async (e) => {
    e.preventDefault();
    await loadData(userName);
  };

  return (
    <ScreenContainer>
      <InputsContainer>
        <TextField
          name={'userName'}
          value={userName}
          onChange={onChangeHandler}
          label={'Nome de usuário'}
          variant={'outlined'}
          margin={'dense'}
          fullWidth
          required
        />
        <Button
          type={'submit'}
          onClick={submitHandler}
          variant={'contained'}
          color={'primary'}
          margin={'dense'}
          fullWidth
        >
          Pesquisar
        </Button>
      </InputsContainer>
      <UserContainer data={data} repos={repos} starred={starred} />
    </ScreenContainer>
  );
};

export default SearchForm;
