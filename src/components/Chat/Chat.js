import { ContactInfoBox } from 'components/ContactInfoBox/ContactInfoBox';
import MessagesHistory from 'components/MessagesHistory';
import Section from 'components/Section';
import { useEffect, useRef } from 'react';
import { useGetContactByIdQuery } from 'redux/contacts';

export default function Chat({ id }) {
  const { data } = useGetContactByIdQuery(id);

  useEffect(() => {
    if (!data || data?.messages?.length === 0) {
      return;
    } else {
      const sortArrayByDate = array => {
        return [...array].sort((a, b) => new Date(a.date) - new Date(b.date));
      };

      const sortedArray = sortArrayByDate(data?.messages);
      messageListRef.current = sortedArray;
    }
  }, [data]);

  const messageListRef = useRef(null);

  return (
    <Section title="Chat" isHidden={true} width="100%" flexShrink={1}>
      <ContactInfoBox id={id} />
      <MessagesHistory id={id} messageListRef={messageListRef.current} />
    </Section>
  );
}
