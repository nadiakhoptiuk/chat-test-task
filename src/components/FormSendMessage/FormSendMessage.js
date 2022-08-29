import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import getChuckResponce from 'service/chuckNorrisApi';
import { GrSend } from 'react-icons/gr';
import { useAddMessageToContactMutation } from 'redux/contacts';
import useFormFields from 'hooks/useFormFields';
import s from './FormSendMessage.module.css';

export default function FormSendMessage({
  id,
  setMessageList,
  data,
  messageList,
}) {
  const {
    state: message,
    setState: setMessage,
    handleChange: handleMessageChange,
  } = useFormFields('');
  const [addMessageToContact] = useAddMessageToContactMutation();

  const generateNewMessageList = useCallback(
    async (message, bool) => {
      const newMessage = {
        message: message,
        date: new Date().toISOString(),
        isSendedByMe: bool,
      };

      const newList = [...data?.messages, newMessage].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      await setMessageList(newList);

      await addMessageToContact({
        id: id,
        contact: { ...data, messages: newList },
      });
    },
    [addMessageToContact, data, id, setMessageList]
  );

  const handleSubmit = async evt => {
    evt.preventDefault();
    generateNewMessageList(message, true);
    setMessage('');
  };

  useEffect(() => {
    if (!messageList) {
      return;
    }

    const dateNow = new Date().getTime();
    const lastMessage = messageList[messageList?.length - 1];
    const lastMessageDate = new Date(lastMessage?.date).getTime();

    if (!lastMessage?.isSendedByMe || dateNow - lastMessageDate > 10000) {
      return;
    } else {
      const timeOut = setTimeout(() => {
        getChuckResponce()
          .then(message => {
            generateNewMessageList(message, false);
          })
          .catch(error => {
            console.log(error);
          });
      }, 10000);

      return () => {
        clearTimeout(timeOut);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageList]);

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          className={s.input}
          placeholder="Type your message... and wait 10 seconds for answer :)"
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

FormSendMessage.propTypes = {
  id: PropTypes.string,
  setMessageList: PropTypes.func,
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        isSendedByMe: PropTypes.bool.isRequired,
      }).isRequired
    ),
  }),
};
