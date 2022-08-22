import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useGetContactByIdQuery } from 'redux/contacts';
import FormSendMessage from 'components/FormSendMessage';
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
      setMessageList(data?.messages);
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

MessagesHistory.propTypes = {
  id: PropTypes.string,
  messageListRef: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      isSendedByMe: PropTypes.bool.isRequired,
    })
  ),
};
