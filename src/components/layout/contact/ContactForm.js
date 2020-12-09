import React from 'react'
import {
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  FormFeedback,
} from 'reactstrap'
import SoundMp3 from '../../../assets/SoundMp3.mp3'

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
      //validation
      name: '',
      company: '',
      phone: '',
      email: '',
      message: '',
      disabled: true,
      invalidname: null,
      nameErr: '',
      validName: null,
      invalidCompany: null,
      validCompany: null,
      companyErr: '',
      invalidPhone: null,
      validPhone: null,
      phoneErr: '',
      invalidEmail: null,
      validEmail: null,
      emailErr: '',
      invalidMessage: null,
      validMessage: null,
      messageErr: '',
    }
  }

  handleChange = (e) => {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const {
      name,
      company,
      phone,
      email,
      message,
      nameErr,
      companyErr,
      phoneErr,
      emailErr,
      messageErr,
    } = this.state
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log(this.state)

    //enable the button if fields not empty
    if (name && company && email && message) {
      // name validation
      if (name.length < 3) {
        this.setState({
          validName: false,
          invalidName: true,
          nameErr: 'يجب ان يكون الاسم 3 احرف او اكثر',
        })
      } else {
        this.setState({
          validName: true,
          invalidName: false,
          nameErr: '',
        })
      }
      // Company validation
      if (company.length < 3) {
        this.setState({
          validCompany: false,
          invalidCompany: true,
          companyErr: 'يجب ان يكون اسم الشركة 3 احرف او اكثر',
        })
      } else {
        this.setState({
          validCompany: true,
          invalidCompany: false,
          companyErr: '',
        })
      }
      // phone validation
      if (phone.length < 9) {
        this.setState({
          validPhone: false,
          invalidPhone: true,
          phoneErr: 'يجب ان يكون الرقم اكثر من 9 خانات',
        })
      } else {
        this.setState({
          validPhone: true,
          invalidPhone: false,
          phoneErr: '',
        })
      }
      // email validation
      if (re.test(email)) {
        this.setState({ validEmail: true, invalidEmail: false, emailErr: '' })
      } else {
        this.setState({
          validEmail: false,
          invalidEmail: true,
          emailErr: 'أدخل ايميل صالح. الايميل الذي ادخلته غير صالح',
        })
      }
      // message validation
      if (message.length < 20) {
        this.setState({
          validMessage: false,
          invalidMessage: true,
          messageErr: 'يجب ان تكون الرسالة 20 حرف على الاقل',
        })
      } else {
        this.setState({
          validMessage: true,
          invalidMessage: false,
          messageErr: '',
        })
      }
      if (nameErr && companyErr && phoneErr && emailErr && messageErr) {
        this.setState({
          disabled: true,
        })
      } else {
        this.setState({
          disabled: false,
        })
      }
    } else {
      return this.state
    }
  }

  render() {
    const clickSound = new Audio(SoundMp3)
    const {
      status,
      invalidName,
      validName,
      nameErr,
      invalidCompany,
      validCompany,
      companyErr,
      invalidPhone,
      validPhone,
      phoneErr,
      invalidEmail,
      validEmail,
      emailErr,
      invalidMessage,
      validMessage,
      messageErr,
      disabled,
    } = this.state
    return (
      <Card className='m-3 shadowBlue'>
        <CardBody>
          <CardTitle>
            <h4>اتصل بنا</h4>
          </CardTitle>
          <Form
            onSubmit={this.submitForm}
            action='https://formspree.io/xwkrjpjn'
            method='POST'
          >
            <input type='hidden' name='_language' value='ar' />
            <FormGroup>
              <Label for='name'>الاسم:</Label>
              <Input
                type='text'
                name='name'
                id='name'
                placeholder='الاسم'
                onChange={this.handleChange}
                invalid={invalidName}
                valid={validName}
              />
              {nameErr && <FormFeedback>{nameErr}</FormFeedback>}
            </FormGroup>
            <FormGroup>
              <Label for='companyname'>اسم الشركة:</Label>
              <Input
                type='text'
                name='company'
                id='companyname'
                placeholder='اسم الشركة'
                onChange={this.handleChange}
                invalid={invalidCompany}
                valid={validCompany}
              />
              {companyErr && <FormFeedback>{companyErr}</FormFeedback>}
            </FormGroup>
            <FormGroup>
              <Label for='phone'>رقم الهاتف:</Label>
              <Input
                type='tel'
                name='phone'
                id='phone'
                placeholder='00905356666666'
                onChange={this.handleChange}
                invalid={invalidPhone}
                valid={validPhone}
              />
              {phoneErr && <FormFeedback>{phoneErr}</FormFeedback>}
            </FormGroup>
            <FormGroup>
              <Label for='email'>الايميل: </Label>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='ادخل الايميل هنا'
                onChange={this.handleChange}
                invalid={invalidEmail}
                valid={validEmail}
              />
              {emailErr && <FormFeedback>{emailErr}</FormFeedback>}
            </FormGroup>
            <FormGroup>
              <Label for='message'>الرسالة:</Label>
              <Input
                type='textarea'
                name='message'
                id='message'
                placeholder='ادخل الرسالة هنا'
                rows='7'
                cols='50'
                onChange={this.handleChange}
                invalid={invalidMessage}
                valid={validMessage}
              />
              {messageErr && <FormFeedback>{messageErr}</FormFeedback>}
            </FormGroup>
            {status === 'SUCCESS' ? (
              <Alert color='success'>
                شكرا لتواصلك معنا. سيتم الرد في اقرب وقت
              </Alert>
            ) : (
              <button
                onClick={() => clickSound.play()}
                disabled={disabled}
                style={
                  disabled
                    ? {
                        cursor: 'not-allowed',
                        backgroundColor: '#ccc',
                        color: 'black',
                        border: 'none',
                        ':hover': { backgroundColor: 'white' },
                      }
                    : null
                }
              >
                أرسل
              </button>
            )}
            {status === 'ERROR' && (
              <Alert className='mt-3' color='danger'>
                حدث خطأ الرجاء المحاولة مرة أخرى
              </Alert>
            )}
          </Form>
        </CardBody>
      </Card>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
