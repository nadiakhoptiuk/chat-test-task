import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelectedContactId } from 'redux/chat/chatActions';
import { selectedContactIdSelector } from 'redux/chat/chatSelectors';
import { ContactInfoBox } from 'components/ContactInfoBox/ContactInfoBox';
import s from './ContactItem.module.css';

export default function ContactItem({ id }) {
  const selectedContactId = useSelector(selectedContactIdSelector);
  const dispatch = useDispatch();

  function checkIsContactSelected() {
    return JSON.stringify(id) === JSON.stringify(selectedContactId);
  }

  const isContactSelected = checkIsContactSelected();

  return (
    <li className={s.contactItem}>
      <button
        type="button"
        onClick={() => dispatch(setSelectedContactId(id))}
        className={isContactSelected ? s.selectedBtn : s.noneSelectedBtn}
      >
        <ContactInfoBox id={id} />
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
};
