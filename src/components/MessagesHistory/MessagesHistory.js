import { compareAsc, format } from 'date-fns';
import { useSelector } from 'react-redux';
import { openedChat } from 'redux/chat/chatSelectors';
import s from './MessageHistory.module.css';

export default function MessagesHistory() {
  const selectedContact = useSelector(openedChat);

  const messageList = [...selectedContact?.messages].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <ul>
      {messageList.map(({ message, isSendedByMe, date }, index) => {
        const newDate = format(new Date(date), 'PP, p');

        return (
          <li
            key={index}
            className={isSendedByMe ? s.myMessage : s.interlocutorMessage}
          >
            <p className={s.messageText}>{message}</p>
            <span className={s.messageDate}>{newDate}</span>
          </li>
        );
      })}
    </ul>
  );
}
