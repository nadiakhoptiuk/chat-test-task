import { ContactInfoBox } from 'components/ContactInfoBox/ContactInfoBox';
import Section from 'components/Section';

export default function Chat({ selectedContact }) {
  console.log(selectedContact);

  return (
    <Section title="Chat" isHidden={true}>
      <ContactInfoBox contactData={selectedContact} />
      {/* <div></div> */}
      {/* <form action=""></form> */}
    </Section>
  );
}
