import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';

const LandingJumb = (props) => {
  return (
    <div>
      <Jumbotron className="landing-jumb">
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
              <Button color="primary">جميع المنتجات</Button>
            </Link>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default LandingJumb;
