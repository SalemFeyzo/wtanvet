import React from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { connect } from 'react-redux';
const ContactInfo = ({ contactInfo }) => {
  return (
    <div>
      <h5>معلومات الاتصال:</h5>
      <div className="contact-info">
        <p>
          <LocationOnOutlinedIcon />
          {contactInfo.address}
        </p>
        <p>
          <PhoneIcon />
          <a href="tel:00905357129073"> {contactInfo.phone}</a>
        </p>
        <p>
          <WhatsAppIcon />
          <a href="tel:00905357129073">{contactInfo.mobile}</a>
        </p>
        <p>
          <EmailOutlinedIcon />
          <a href="mailto:f1989salim@gmail.com">{contactInfo.email}</a>
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  const contactInfo = state.contactInfo[0];
  return {
    contactInfo,
  };
};

export default connect(mapStateToProps)(ContactInfo);
