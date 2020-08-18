import React from 'react';
import { AgentMap } from './AgentMap';
import { Container, Row, Col } from 'reactstrap';

export const Agents = () => {
  return (
    <div className="agents-page">
      <div>
        <AgentMap />
      </div>
      <div>Agents</div>
    </div>
  );
};
