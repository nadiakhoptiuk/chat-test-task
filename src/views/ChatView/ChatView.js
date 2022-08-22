import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { Watch } from 'react-loader-spinner';
// import Section from 'components/Section';
import Container from 'components/Container';
import ContactsList from 'components/ContactsList';
import { useEffect } from 'react';
import Chat from 'components/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedContactId } from 'redux/chat/chatActions';
import { useGetContactsQuery } from 'redux/contacts';

export default function ChatView() {
  const dispatch = useDispatch();
  const selectedContactId = useSelector(state => state.selectedContactId);
  const { data, isFetching } = useGetContactsQuery('', {
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (!data) return;
    if (!isFetching && selectedContactId === null) {
      dispatch(setSelectedContactId(data[0].id));
    }
  }, [data, dispatch, isFetching, selectedContactId]);

  return (
    <>
      <Container style={{ display: 'flex' }}>
        <ContactsList />
        <Chat id={selectedContactId} />
      </Container>
    </>
  );
}
