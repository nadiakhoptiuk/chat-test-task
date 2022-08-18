import { useSelector } from 'react-redux';
import { openedChat } from 'redux/chat/chatSelectors';
import s from './MessageHistory.module.css';

export default function MessagesHistory() {
  const selectedContact = useSelector(openedChat);

  return (
    <ul>
      {selectedContact?.messages?.map(
        ({ message, isSendedByMe, date }, index) => {
          return (
            <li
              key={index}
              className={isSendedByMe ? s.myMessage : s.interlocutorMessage}
            >
              <p>{message}</p>
              <span>{date}</span>
            </li>
          );
        }
      )}
    </ul>
  );
}
