import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Helmet from 'react-helmet'
import Header from './components/layout/header/Header'
import { Footer } from './components/layout/footer/Footer'
import Routes from './Routes'

class App extends Component {
  state = {
    lang: null,
  }
  render() {
    return (
      <>
        <Helmet>
          <meta charSet='utf-8' />
          <title>وطن للأدوية البيطرية(وطن فيت)</title>
          <meta
            name='description'
            content=' وطن للأدوية البيطرية (وطن فيت), من الشركات الرائدة في مجال الأدوية البيطرية في سوريا. تطبق الشركة تقنيات حديثة بهدف ضمان الفاعالية الممتازة في علاج مختلف الأمراض.'
          />
          <link rel='canonical' href='https://watanvet.netlify.app' />
        </Helmet>
        <Router>
          <div dir='rtl'>
            <Header />
            <div className='body'>
              <Routes />
              <Footer />
            </div>
          </div>
        </Router>
      </>
    )
  }
}

export default App
