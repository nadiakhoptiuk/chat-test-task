import { ContactInfoBox } from 'components/ContactInfoBox/ContactInfoBox';
import MessagesHistory from 'components/MessagesHistory';
import Section from 'components/Section';
import { useSelector } from 'react-redux';
import { openedChat } from 'redux/chat/chatSelectors';

export default function Chat() {
  const selectedContact = useSelector(openedChat);

  return (
    <Section title="Chat" isHidden={true} width="100%" flexShrink={1}>
      <ContactInfoBox contactData={selectedContact} />
      <MessagesHistory />
      {/* <form action=""></form> */}
    </Section>
  );
}
