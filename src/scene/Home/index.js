import React, { useState } from 'react';
import { Card } from '../../components';
import {
  Container,
  Left,
  Right,
} from './styles';

const Home = () => {
  const [state, setState] = useState({
    reverse: false,
    cardNumber: '0000 0000 0000 0000',
    validThru: '12/34',
    securityCode: '123',
  });

  const handleReverseCard = () => setState({ ...state, reverse: !state.reverse });

  return (
    <Container >
      <Left onClick={handleReverseCard}>
        <Card
          reverse={state.reverse}
          cardNumber={state.cardNumber}
          validThru={state.validThru}
          securityCode={state.securityCode}
        />
      </Left>
      <Right />
    </Container>
  )
};
export default Home;