import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import useFormFields from 'hooks/useFormFields';
import { register } from 'redux/auth/authOperations';
import { resetError } from 'redux/auth/authActions';
import { getError } from 'redux/auth/authSelectors';
import Section from 'components/Section';
import Container from 'components/Container';
import s from './RegisterView.module.css';

export default function RegisterView() {
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

  const handleRegisterSubmit = evt => {
    evt.preventDefault();
    dispatch(register({ email: userEmail, password: userPassword }));
    formReset();
  };

  const formReset = () => {
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <Section
      title="Please register"
      isHidden={false}
      width="100%"
      flexShrink={0}
    >
      <Container style={{ display: 'block' }}>
        <form className={s.form} onSubmit={handleRegisterSubmit}>
          <TextField
            id="outlined-basic"
            label="Email:"
            variant="outlined"
            type="email"
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
            Register now
          </Button>
        </form>

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
