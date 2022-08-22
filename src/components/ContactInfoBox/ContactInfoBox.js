import PropTypes from 'prop-types';
import { useGetContactByIdQuery } from 'redux/contacts';
import s from './ContactInfoBox.module.css';

export function ContactInfoBox({ id }) {
  const { data } = useGetContactByIdQuery(id);

  return data ? (
    <>
      <div className={s.contactInfoWrapper}>
        <div className={s.avatarWrapper}>
          <img
            src={data?.avatar}
            alt={`${data?.username} avatar`}
            className={s.avatar}
          />
          <div
            className={
              data?.isOnline
                ? s.statusIndicatorOnline
                : s.statusIndicatorOffline
            }
          ></div>
        </div>

        <p className={s.contactName}>{data?.username}</p>
      </div>
    </>
  ) : null;
}

ContactInfoBox.propTypes = {
  id: PropTypes.string,
};
