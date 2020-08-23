import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from 'reactstrap';
import SoundMp3 from '../../../assets/SoundMp3.mp3';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const clickSound = new Audio(SoundMp3);
    const { status } = this.state;
    return (
      <Card className="m-3">
        <CardBody>
          <CardTitle>
            <h4>اتصل بنا</h4>
          </CardTitle>
          <Form
            onSubmit={this.submitForm}
            action="https://formspree.io/xwkrjpjn"
            method="POST"
          >
            <input type="hidden" name="_language" value="ar" />
            <FormGroup>
              <Label for="name">الاسم:</Label>
              <Input type="text" name="name" id="name" placeholder="الاسم" />
            </FormGroup>
            <FormGroup>
              <Label for="companyname">اسم الشركة:</Label>
              <Input
                type="text"
                name="company"
                id="companyname"
                placeholder="اسم الشركة"
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">رقم الهاتف:</Label>
              <Input
                type="tel"
                name="_phone"
                id="phone"
                placeholder="00905356666666"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">الايميل: </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="ادخل الايميل هنا"
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">الرسالة:</Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="ادخل الرسالة هنا"
                rows="7"
                cols="50"
              />
            </FormGroup>
            {status === 'SUCCESS' ? (
              <Alert color="success">
                شكرا لتواصلك معنا. سيتم الرد في اقرب وقت
              </Alert>
            ) : (
              <button onClick={() => clickSound.play()}>أرسل</button>
            )}
            {status === 'ERROR' && (
              <Alert className="mt-3" color="danger">
                حدث خطأ الرجاء المحاولة مرة أخرى
              </Alert>
            )}
          </Form>
        </CardBody>
      </Card>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
