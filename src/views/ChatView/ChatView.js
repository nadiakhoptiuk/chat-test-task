/* eslint-disable react-hooks/exhaustive-deps */
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Watch } from 'react-loader-spinner';
import Section from 'components/Section';
import Container from 'components/Container';
import ContactsList from 'components/ContactsList';
import { useGetContactsQuery } from 'redux/contacts';
import { useEffect } from 'react';
import Chat from 'components/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedContact } from 'redux/chat/chatActions';
import { openedChat } from 'redux/chat/chatSelectors';

export default function ChatView() {
  const { data, isFetching } = useGetContactsQuery();
  const dispatch = useDispatch();
  const selectedContact = useSelector(openedChat);

  useEffect(() => {
    if (!isFetching && selectedContact === null) {
      dispatch(setSelectedContact(data[0]));
    }
  }, [isFetching, selectedContact]);

  return (
    <>
      {isFetching ? (
        <Watch
          height={48}
          width={48}
          radius={45}
          color="#1a75cfb3"
          wrapperClass="loader"
          ariaLabel="loading-indicator"
        />
      ) : (
        <Container>
          <ContactsList data={data} />
          <Chat />
        </Container>
      )}
    </>
  );
}
