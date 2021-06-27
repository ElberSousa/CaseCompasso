import React from 'react';
import { LogoImage, ScreenContainer } from './styled';
import avatar from '../../assets/avatar.png';
import SearchForm from '../../components/Search/SearchForm';

const HomePage = () => {
  return (
    <ScreenContainer>
      <LogoImage src={avatar} />
      <SearchForm />
    </ScreenContainer>
  );
};

export default HomePage;
