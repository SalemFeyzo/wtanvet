import React from 'react';
import { Jumbotron } from 'reactstrap';

const LandingJumb = (props) => {
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
