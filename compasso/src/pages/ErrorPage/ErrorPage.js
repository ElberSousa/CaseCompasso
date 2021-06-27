import React from 'react';
import { ErrorPageContainer, ErrorImage } from './styled';
import github_sad from '../../assets/github_sad.jpg';
import { Typography } from '@material-ui/core/';

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src={github_sad} />
      <Typography color={'primary'} variant={'h4'} align={'center'}>
        Erro 404 - Página não encontrada
      </Typography>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
