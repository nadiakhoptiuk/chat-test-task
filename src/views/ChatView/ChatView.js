import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { Watch } from 'react-loader-spinner';
// import Section from 'components/Section';
import Container from 'components/Container';
import ContactsList from 'components/ContactsList';
import { useEffect } from 'react';
import Chat from 'components/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedContactId } from 'redux/chat/chatActions';
import { useGetContactByIdQuery, useGetContactsQuery } from 'redux/contacts';
// import { selectedContactIdSelector } from 'redux/chat/chatSelectors';

export default function ChatView() {
  const dispatch = useDispatch();
  const selectedContactId = useSelector(state => state.selectedContactId);
  const { data, isFetching } = useGetContactsQuery();
  console.log(data);

  useEffect(() => {
    if (!isFetching && selectedContactId === null) {
      dispatch(setSelectedContactId(data[0].id));
    }
  }, [data, dispatch, isFetching, selectedContactId]);

  return (
    <>
      <Container>
        <ContactsList />
        <Chat id={selectedContactId} />
      </Container>
    </>
  );
}
