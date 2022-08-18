import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { filterSelector } from 'redux/filter/filterSelector';
import s from './ContactsList.module.css';
import FilterInput from 'components/FilterInput';
import Section from 'components/Section';

export default function ContactsList({
  data,
  selectedContact,
  setSelectedContact,
}) {
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
    <Section title="Chats" isHidden={false}>
      <FilterInput />
      <ul className={s.contactsList}>
        {filteredContacts?.map(filteredContact => (
          <ContactItem
            key={filteredContact.id}
            contactData={filteredContact}
            selectedContact={selectedContact}
            setSelectedContact={setSelectedContact}
          />
        ))}
      </ul>
    </Section>
  );
}
