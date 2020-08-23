import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import useSound from 'use-sound';
import SoundMp3 from '../../../assets/SoundMp3.mp3';

const LandingJumb = (props) => {
  const [play] = useSound(SoundMp3);
  return (
    <div>
      <Jumbotron className="landing-jumb shadowBlue">
        <div>
          <h1 className="display-4">وطن لصناعة الأدوية البيطرية</h1>
          <p className="lead">
            تعتبر شركة وطن لصناعة الأدوية البيطرية (وطن فيت), من الشركات الرائدة
            في صناعة الأدوية البيطرية في سوريا و لبنان و العراق و الأردن و
            السعودية, فقد تأسست في عام 1993 بتقنيّة و مواصفات عالية و بهدف ضمان
            الفاعالية الممتازة في علاج مختلف الأمراض.
          </p>
          <hr className="my-2" />

          <p className="lead">
            <Link to="/products">
              <button onClick={play}>جميع المنتجات</button>
            </Link>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default LandingJumb;
