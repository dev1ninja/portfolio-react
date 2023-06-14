import React, { useContext } from 'react';
import { ContactSection, ContactTitle, ContactSubtitle, ContactButton } from './styledContact';
import { DraculaContext } from '../app/App';

function Contact() {
  const draculaMode = useContext(DraculaContext);

  return (
    <ContactSection id='contact'>
      <ContactTitle>Interested in working on a project together?</ContactTitle>
      <ContactSubtitle>Drop me a line, and let's see what we can build.</ContactSubtitle>
      <ContactButton type='submit' href='mailto:romanskok7@gmail.com' draculaMode={draculaMode}>
        Send me an email
      </ContactButton>
      <ContactSubtitle>Address: st. Radyshcheva 7B, Kyiv 03124 Ukraine</ContactSubtitle>
      <ContactSubtitle>Phone: +380 978402071</ContactSubtitle>
    </ContactSection>
  );
}

export default Contact;
