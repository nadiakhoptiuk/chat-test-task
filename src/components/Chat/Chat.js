import { ContactInfoBox } from 'components/ContactInfoBox/ContactInfoBox';
import FormSendMessage from 'components/FormSendMessage';
import MessagesHistory from 'components/MessagesHistory';
import Section from 'components/Section';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedContact } from 'redux/chat/chatActions';
import { openedChat } from 'redux/chat/chatSelectors';
import {
  useAddMessageToContactMutation,
  useGetContactByIdQuery,
} from 'redux/contacts';

export default function Chat({ selectedContact }) {
  const [messageList, setMessageList] = useState(
    [...selectedContact?.messages].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    )
  );
  const { data } = useGetContactByIdQuery(selectedContact.id);

  const dispatch = useDispatch();
  const [addMessage, { isLoading }] = useAddMessageToContactMutation();

  useEffect(() => {
    const newContactData = {
      ...selectedContact,
      messages: messageList,
    };

    addMessage({
      id: selectedContact.id,
      contact: newContactData,
    });
    dispatch(setSelectedContact(data));
  }, [addMessage, data, dispatch, messageList, selectedContact]);

  return (
    <Section title="Chat" isHidden={true} width="100%" flexShrink={1}>
      <ContactInfoBox contactData={selectedContact} />
      <MessagesHistory
        selectedContact={selectedContact}
        messageList={messageList}
        setMessageList={setMessageList}
      />
      <FormSendMessage
        id={selectedContact.id}
        messageList={messageList}
        setMessageList={setMessageList}
      />
    </Section>
  );
}
