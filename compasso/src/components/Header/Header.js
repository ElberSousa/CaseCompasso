import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { StyledA } from './styled';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}));

const Header = () => {
  const classNames = useStyles();

  return (
    <div className={classNames.root}>
      <AppBar position="static">
        <Toolbar className={classNames.toolbar}>
          <StyledA
            href="https://www.linkedin.com/in/elber-sousa"
            className="button"
          >
            <LinkedInIcon></LinkedInIcon>
          </StyledA>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
