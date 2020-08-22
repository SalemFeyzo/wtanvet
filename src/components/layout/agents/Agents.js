import React from 'react';
import { Link } from 'react-router-dom';
import { AgentMap } from './AgentMap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export const Agents = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">الرئيسية</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>وكلائنا</BreadcrumbItem>
      </Breadcrumb>
      <div className="agents-page">
        <div>
          <AgentMap />
        </div>
        <div>Agents</div>
      </div>
    </>
  );
};
