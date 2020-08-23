import React from 'react';
import { Link } from 'react-router-dom';
import { AgentMap } from './AgentMap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import useSound from 'use-sound';
import SoundMp3 from '../../../assets/SoundMp3.mp3';

export const Agents = () => {
  const [play] = useSound(SoundMp3);
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/" onClick={play}>
            الرئيسية
          </Link>
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
