import React from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts';
import { filterSelector } from 'redux/filter/filterSelector';
import ContactItem from 'components/ContactItem';
import FilterInput from 'components/FilterInput';
import Section from 'components/Section';
import s from './ContactsList.module.css';

export default function ContactsList() {
  const { data } = useGetContactsQuery();
  const filter = useSelector(filterSelector);

  const filterContacts = () => {
    const normalizedString = filter?.toLowerCase();

    return filter
      ? data?.filter(contact =>
          contact.username.toLowerCase().includes(normalizedString)
        )
      : data;
  };

  const filteredContacts = filterContacts();

  return (
    <Section
      title="Chats"
      isHidden={false}
      width={window.innerWidth < 768 ? '150px' : '300px'}
      flexShrink={0}
    >
      <FilterInput />
      <ul className={s.contactsList}>
        {filteredContacts
          ? filteredContacts?.map(filteredContact => (
              <ContactItem key={filteredContact.id} id={filteredContact.id} />
            ))
          : null}
      </ul>
    </Section>
  );
}
