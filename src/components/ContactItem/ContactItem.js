import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { ContactInfoBox } from 'components/ContactInfoBox/ContactInfoBox';
import { useDispatch, useSelector } from 'react-redux';
import { selectedContactIdSelector } from 'redux/chat/chatSelectors';
import { setSelectedContactId } from 'redux/chat/chatActions';

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

      {/* {isLoading &
        (
          <LoadingButton loading variant="outlined" className={s.btnDelete}>
            Submit
          </LoadingButton>
        )} */}
    </li>
  );
}

// ContactItem.propTypes = {
//   contactData: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     messages: PropTypes.arrayOf(
//       PropTypes.shape({
//         message: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//         isSendedByMe: PropTypes.bool.isRequired,
//       })
//     ),
//     id: PropTypes.string.isRequired,
//   }),
// };
