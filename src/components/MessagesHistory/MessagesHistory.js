import FormSendMessage from 'components/FormSendMessage';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectedContactIdSelector } from 'redux/chat/chatSelectors';
import { useGetContactByIdQuery } from 'redux/contacts';
import s from './MessageHistory.module.css';

export default function MessagesHistory({ id, messageListRef }) {
  const [messageList, setMessageList] = useState(messageListRef);
  // const id = useSelector(selectedContactIdSelector);
  const { data } = useGetContactByIdQuery(id);
  console.log(messageListRef.current);

  useEffect(() => {
    const messageHistory = [...data?.messages].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    setMessageList(messageHistory);
  }, [data, setMessageList]);

  return (
    <>
      <ul className={s.messageList}>
        {messageList?.map(({ message, isSendedByMe, date }, index) => {
          const newDate = format(new Date(date), 'PP, p');

          return (
            <li
              key={index}
              className={isSendedByMe ? s.myMessage : s.interlocutorMessage}
            >
              <p
                className={
                  isSendedByMe ? s.myMessageText : s.interlocutorMessageText
                }
              >
                {message}
              </p>
              <span className={s.messageDate}>{newDate}</span>
            </li>
          );
        })}
      </ul>
      <FormSendMessage id={id} />
    </>
  );
}
