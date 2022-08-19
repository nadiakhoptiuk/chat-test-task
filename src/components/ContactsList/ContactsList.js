import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { filterSelector } from 'redux/filter/filterSelector';
import s from './ContactsList.module.css';
import FilterInput from 'components/FilterInput';
import Section from 'components/Section';
import { useGetContactsQuery } from 'redux/contacts';

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
    <Section title="Chats" isHidden={false} width="300px" flexShrink={0}>
      <FilterInput />
      <ul className={s.contactsList}>
        {filteredContacts?.map(filteredContact => (
          <ContactItem key={filteredContact.id} id={filteredContact.id} />
        ))}
      </ul>
    </Section>
  );
}
