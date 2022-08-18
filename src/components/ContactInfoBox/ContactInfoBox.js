import s from './ContactInfoBox.module.css';

export function ContactInfoBox({ contactData }) {
  return (
    <>
      <div className={s.avatarWrapper}>
        <img
          src={contactData.avatar}
          alt={`${contactData.username} avatar`}
          className={s.avatar}
        />
        <div
          className={
            contactData.isOnline
              ? s.statusIndicatorOnline
              : s.statusIndicatorOffline
          }
        ></div>
      </div>

      <p className={s.contactName}>{contactData.username}</p>
    </>
  );
}
