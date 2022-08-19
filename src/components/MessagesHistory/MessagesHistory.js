import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { openedChat } from 'redux/chat/chatSelectors';
import s from './MessageHistory.module.css';

export default function MessagesHistory({
  selectedContact,
  messageList,
  setMessageList,
}) {
  useEffect(() => {
    const messageHistory = [...selectedContact?.messages].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    setMessageList(messageHistory);
  }, [selectedContact, setMessageList]);

  return (
    <ul className={s.messageList}>
      {messageList.map(({ message, isSendedByMe, date }, index) => {
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
  );
}
