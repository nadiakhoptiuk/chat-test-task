import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { ContactInfoBox } from 'components/ContactInfoBox/ContactInfoBox';
import { useDispatch, useSelector } from 'react-redux';
import { openedChat } from 'redux/chat/chatSelectors';
import { setSelectedContact } from 'redux/chat/chatActions';

export default function ContactItem({ contactData }) {
  const selectedContact = useSelector(openedChat);
  const dispatch = useDispatch();

  function checkIsContactSelected() {
    return (
      JSON.stringify(contactData?.username) ===
      JSON.stringify(selectedContact?.username)
    );
  }

  const isContactSelected = checkIsContactSelected();

  return (
    <li className={s.contactItem}>
      <button
        type="button"
        onClick={() => dispatch(setSelectedContact(contactData))}
        className={isContactSelected ? s.selectedBtn : s.noneSelectedBtn}
      >
        <ContactInfoBox contactData={contactData} />
      </button>

      {/* {isLoading &
        (
          <LoadingButton loading variant="outlined" className={s.btnDelete}>
            Submit
          </LoadingButton>
        )} */}
    </li>
  );
}

ContactItem.propTypes = {
  contactData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        isSendedByMe: PropTypes.bool.isRequired,
      })
    ),
    id: PropTypes.string.isRequired,
  }),
};
