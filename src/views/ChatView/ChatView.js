/* eslint-disable react-hooks/exhaustive-deps */
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Watch } from 'react-loader-spinner';
import Section from 'components/Section';
import Container from 'components/Container';
import ContactsList from 'components/ContactsList';
import { useGetContactsQuery } from 'redux/contacts';
import useLocalStorage from 'hooks/useLocalStorage';
import { useEffect } from 'react';
import Chat from 'components/Chat';

export default function ChatView() {
  const { data, isFetching } = useGetContactsQuery();
  const [selectedContact, setSelectedContact] = useLocalStorage(
    'openedChat',
    data ? data[0] : null
  );

  useEffect(() => {
    if (!isFetching && selectedContact === null) {
      setSelectedContact(data[0]);
    }
  }, [selectedContact]);

  return (
    <>
      <Section title="Chat" isHidden={true}>
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
            <ContactsList
              data={data}
              selectedContact={selectedContact}
              setSelectedContact={setSelectedContact}
            />
            <Chat selectedContact={selectedContact} />
          </Container>
        )}
      </Section>
    </>
  );
}
