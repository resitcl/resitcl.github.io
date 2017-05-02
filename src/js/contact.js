/**
 * Created by luisurrutiaf on 5/1/17.
 */
import { $ } from 'jquery';


class ContactDetails {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
  }

  valid() {
    return this.name.length > 0 && this.email.length > 0 && this.message.length > 0;
  }
}


export default class ContactForm {

  constructor() {
    this.submit = $('#submit-contact');
  }

  getInfo() {
    return ContactDetails(
      $('#contact-form-name').val(),
      $('#contact-form-mail').val(),
      $('#contact-form-message').val(),
    );
  }

  send() {
    const contact = this.getInfo();

    if (!contact.valid()) {
      this.submit.css('background', '#bf0000');
      this.submit.val('Faltan datos');
    }

    $.post('https://hooks.slack.com/services/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',
      JSON.stringify({
        channel: '#contacto-landing',
        username: 'Contact-Bot',
        text: `${'Se recibió el siguiente mensaje desde la página web: \n' +
        '*Nombre:* '}${contact.name}\n` +
        `*Mail:* ${contact.email}\n` +
        `*Mensaje:* \n${contact.message}`,
        icon_emoji: ':warning:',
      }),
    ).done(() => {
      this.submit.css('background', '#27ae60');
      this.submit.val('Mensaje enviado');
    });
  }
}

