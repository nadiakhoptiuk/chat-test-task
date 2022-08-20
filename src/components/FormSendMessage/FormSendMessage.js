import { GrSend } from 'react-icons/gr';
import useFormFields from 'hooks/useFormFields';
import s from './FormSendMessage.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectedContactIdSelector } from 'redux/chat/chatSelectors';
import { useCallback, useEffect } from 'react';
import getChuckResponce from 'service/chuckNorrisApi';
import {
  useAddMessageToContactMutation,
  // useGetContactByIdQuery,
} from 'redux/contacts';

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

  // useEffect(() => {
  //   if (!messageList || !messageList[messageList?.length - 1].isSendedByMe) {
  //     console.log('return');

  //     return;
  //   } else {
  //     console.log('set time out');
  //     setTimeout(() => {
  //       getChuckResponce()
  //         .then(message => {
  //           generateNewMessageList(message, false);
  //         })
  //         .catch(error => {
  //           // handle error
  //           console.log(error);
  //         });
  //     }, 10000);
  //   }
  // }, [generateNewMessageList, messageList, setMessageList]);

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
