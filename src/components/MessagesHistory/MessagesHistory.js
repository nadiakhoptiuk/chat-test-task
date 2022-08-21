import FormSendMessage from 'components/FormSendMessage';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useGetContactByIdQuery } from 'redux/contacts';
import s from './MessageHistory.module.css';

export default function MessagesHistory({ id, messageListRef }) {
  const [messageList, setMessageList] = useState(messageListRef?.current);
  const { data } = useGetContactByIdQuery(id, {
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (document?.getElementById('chat') === null) {
      return;
    } else {
      function scrollToBottom(element) {
        element.scroll({ top: element.scrollHeight, behavior: 'smooth' });
      }
      scrollToBottom(document.getElementById('chat'));
    }
  }, [id, messageList]);

  useEffect(() => {
    if (data && data?.length !== 0) {
      const messageHistory = [...data?.messages].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      setMessageList(messageHistory);
    }
  }, [data, setMessageList]);

  return (
    <>
      <ul className={s.messageList} id="chat">
        {messageList
          ? messageList?.map(({ message, isSendedByMe, date }, index) => {
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
            })
          : null}
      </ul>
      <FormSendMessage
        id={id}
        setMessageList={setMessageList}
        data={data}
        messageList={messageList}
      />
    </>
  );
}
