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
          <h1 className="display-4">وطن للأدوية البيطرية</h1>
          <p className="lead">
            تعتبر شركة وطن للأدوية البيطرية (وطن فيت), من الشركات الرائدة في
            مجال الأدوية البيطرية في سوريا. تطبق الشركة تقنيات حديثة بهدف ضمان
            الفاعالية الممتازة في علاج مختلف الأمراض.
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default LandingJumb;
