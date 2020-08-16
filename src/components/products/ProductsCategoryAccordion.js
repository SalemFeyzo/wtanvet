import React from 'react';
import { UncontrolledCollapse, CardTitle, CardBody, Card } from 'reactstrap';

export const ProductsCategoryAccordion = () => {
  return (
    <>
      <Card className="mt-2">
        <CardBody>
          <CardTitle id="toggler"> الشكل الصيدلاني</CardTitle>
          <UncontrolledCollapse toggler="#toggler">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            magni, voluptas debitis similique porro a molestias consequuntur
            earum odio officiis natus, amet hic, iste sed dignissimos esse fuga!
            Minus, alias.
          </UncontrolledCollapse>
        </CardBody>
      </Card>
    </>
  );
};
