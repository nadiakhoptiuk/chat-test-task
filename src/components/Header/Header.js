import { useSelector } from 'react-redux';
import Container from '../Container';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import sprite from '../../images/sprite.svg';
import s from './Header.module.css';

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerWrapper}>
          {isLoggedIn ? (
            <>
              <svg className={s.logo}>
                <use href={`${sprite}#icon-chat-logo`}></use>
              </svg>

              <h1 className={s.chatTitle}>Messenger</h1>
              <ThemeSwitch />
              <UserMenu />
            </>
          ) : (
            <AuthNav />
          )}
        </div>
      </Container>
    </header>
  );
}
