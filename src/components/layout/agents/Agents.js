import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import useSound from 'use-sound'
import SoundMp3 from '../../../assets/SoundMp3.mp3'

export const Agents = () => {
  const [play] = useSound(SoundMp3)
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>وطن فيت | وكلائنا</title>
        <meta
          name='description'
          content=' وطن للأدوية البيطرية (وطن فيت), من الشركات الرائدة في مجال الأدوية البيطرية في سوريا. تطبق الشركة تقنيات حديثة بهدف ضمان الفاعالية الممتازة في علاج مختلف الأمراض.'
        />
        <link rel='canonical' href='https://watanvet.netlify.app/agents' />
      </Helmet>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to='/' onClick={play}>
            الرئيسية
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>وكلائنا</BreadcrumbItem>
      </Breadcrumb>
      <div className='agents-page'>
        <div>وكلائنا</div>
      </div>
    </>
  )
}
