import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { ContactInfoBox } from 'components/ContactInfoBox/ContactInfoBox';

export default function ContactItem({
  contactData,
  selectedContact,
  setSelectedContact,
}) {
  function checkIsContactSelected() {
    return JSON.stringify(contactData) === JSON.stringify(selectedContact);
  }

  const IsContactSelected = checkIsContactSelected();

  return (
    <li className={s.contactItem}>
      <button
        type="button"
        onClick={() => setSelectedContact(contactData)}
        className={IsContactSelected ? s.selectedBtn : s.noneSelectedBtn}
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
