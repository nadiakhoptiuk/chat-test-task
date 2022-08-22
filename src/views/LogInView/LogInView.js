import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Section from 'components/Section';
import useFormFields from 'hooks/useFormFields';
import { logIn, logInWithGoogle } from 'redux/auth/authOperations';
import { getError } from 'redux/auth/authSelectors';
import sprite from '../../images/sprite.svg';
import s from './LogInView.module.css';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { resetError } from 'redux/auth/authActions';
import Container from 'components/Container';

export default function LogInView() {
  const dispatch = useDispatch();
  const {
    state: userEmail,
    setState: setUserEmail,
    handleChange: handleUserEmailChange,
  } = useFormFields('');
  const {
    state: userPassword,
    setState: setUserPassword,
    handleChange: handleUserPasswordChange,
  } = useFormFields('');
  const error = useSelector(getError);

  const handleLogInSubmit = evt => {
    evt.preventDefault();

    dispatch(logIn({ email: userEmail, password: userPassword }));
    formReset();
  };

  const handleGoogleAuth = evt => {
    dispatch(logInWithGoogle({ email: userEmail, password: userPassword }));
  };

  const formReset = () => {
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <Section
      title="Please sign in to access the site"
      isHidden={false}
      width="100%"
      flexShrink={0}
    >
      <Container style={{ display: 'block' }}>
        <form className={s.form} onSubmit={handleLogInSubmit}>
          <TextField
            id="outlined-basic"
            label="Email:"
            variant="outlined"
            type="email"
            autoFocus={true}
            className={s.input}
            value={userEmail}
            onChange={handleUserEmailChange}
          />
          <TextField
            id="outlined-basic"
            label="Password:"
            variant="outlined"
            type="password"
            required
            className={s.input}
            value={userPassword}
            onChange={handleUserPasswordChange}
          />
          <Button
            variant="contained"
            type="submit"
            disabled={!userEmail || userPassword.length < 7 ? true : false}
            className={s.registerBtn}
            endIcon={<SendIcon />}
          >
            Log In
          </Button>
        </form>

        <p className={s.googleAuthLabel}>Log in with Google:</p>
        <button onClick={handleGoogleAuth} className={s.googleAuthBtn}>
          <svg className={s.googleIcon}>
            <use href={`${sprite}#icon-google`}></use>
          </svg>
        </button>
        {error && (
          <Stack
            sx={{
              width: '500px',
              margin: '10px auto',
              boxShadow: 8,
              backgroundColor: '#fff',
            }}
            spacing={2}
          >
            <Alert
              severity="error"
              variant="outlined"
              onClose={setTimeout(() => {
                dispatch(resetError());
              }, 2000)}
              action={
                <Button
                  color="inherit"
                  size="small"
                  onClick={() => {
                    dispatch(resetError());
                  }}
                >
                  Close
                </Button>
              }
            >
              {error}
            </Alert>
          </Stack>
        )}
      </Container>
    </Section>
  );
}
