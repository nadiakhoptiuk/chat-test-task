import { GrSend } from 'react-icons/gr';
import useFormFields from 'hooks/useFormFields';
import s from './FormSendMessage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { openedChat } from 'redux/chat/chatSelectors';
import { useCallback, useEffect } from 'react';
import getChuckResponce from 'service/chuckNorrisApi';
import { useGetContactByIdQuery } from 'redux/contacts';
import { setSelectedContact } from 'redux/chat/chatActions';

export default function FormSendMessage({ id, messageList, setMessageList }) {
  const {
    state: message,
    setState: setMessage,
    handleChange: handleMessageChange,
  } = useFormFields('');
  const { data } = useGetContactByIdQuery(id);
  const dispatch = useDispatch();

  const selectedContact = useSelector(openedChat);

  const generateNewMessageList = useCallback(
    (message, bool) => {
      const newMessage = {
        message: message,
        date: new Date().toISOString(),
        isSendedByMe: bool,
      };

      const newList = [...selectedContact.messages, newMessage].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setMessageList(newList);
      console.log(messageList);

      dispatch(setSelectedContact(data));
      console.log(selectedContact);
    },
    [selectedContact, setMessageList, messageList, dispatch, data]
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    generateNewMessageList(message, true);
    setMessage('');
  };

  useEffect(() => {
    if (!messageList[messageList.length - 1].isSendedByMe) {
      return;
    } else {
      setTimeout(() => {
        getChuckResponce()
          .then(message => {
            generateNewMessageList(message, false);
          })
          .catch(error => {
            // handle error
            console.log(error);
          });
      }, 10000);
    }
  }, [generateNewMessageList, messageList, setMessageList]);

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          className={s.input}
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
        />
        <button type="submit" className={s.formBtn}>
          <GrSend className={s.btnIcon} />
        </button>
      </form>
    </div>
  );
}
