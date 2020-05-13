import React, { useState } from 'react';
import { Card, Form } from '../../components';
import {
  Container,
  Left,
  Right,
} from './styles';

const Home = () => {
  const [state, setState] = useState({
    reverse: false,
    cardNumber: '0000 0000 0000 0000',
    validThruOne: '12',
    validThruTwo: '12',
    securityCode: '123',
    name: '',
  });

  const handleReverseCard = (value = true) => setState({ ...state, reverse: value });
  const onChange = ({ target: { name, value } }) => setState({ ...state, [name]: value });

  return (
    <Container >
      <Left onClick={handleReverseCard}>
        <Card
          name={state.name}
          reverse={state.reverse}
          cardNumber={state.cardNumber}
          validThruOne={state.validThruOne}
          validThruTwo={state.validThruTwo}
          securityCode={state.securityCode}
        />
      </Left>
      <Right>
        <Form onChange={onChange} onReverse={handleReverseCard} {...state} />
      </Right>
    </Container>
  )
};
export default Home;