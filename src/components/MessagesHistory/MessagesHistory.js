import { useSelector } from 'react-redux';
import { openedChat } from 'redux/chat/chatSelectors';
import s from './MessageHistory.module.css';

export default function MessagesHistory() {
  const selectedContact = useSelector(openedChat);

  return (
    <ul>
      {selectedContact?.messages?.map(
        ({ message, isSendedByMe, date }, index) => {
          const newDate = new Date(date).toLocaleString();
          console.log(newDate);

          return (
            <li
              key={index}
              className={isSendedByMe ? s.myMessage : s.interlocutorMessage}
            >
              <p className={s.messageText}>{message}</p>
              <span className={s.messageDate}>{newDate}</span>
            </li>
          );
        }
      )}
    </ul>
  );
}
