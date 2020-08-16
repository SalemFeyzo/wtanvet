import React from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
const ContactInfo = () => {
  return (
    <div>
      <h5>معلومات الاتصال:</h5>
      <div className="contact-info">
        <p>
          <LocationOnOutlinedIcon /> هاتاي - انطاكيا - ساحة السمك بالقرب من
          الكراج
        </p>
        <p>
          <PhoneIcon />
          <a href="tel:00905357129073"> 00905357129073</a>
        </p>
        <p>
          <WhatsAppIcon />
          <a href="tel:00905357129073"> 00905357129073</a>
        </p>
        <p>
          <EmailOutlinedIcon />
          <a href="mailto:f1989salim@gmail.com"> f1989salim@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
