import React, { useState } from 'react';
import Chip from '../../assets/chip.png';
import ImgLogo from '../../assets/logo.png';

import {
  Container,
  Flipper,
  Front,
  Back,
  WrapperBoll,
  HeaderFront,
  BollPrimary,
  BollSecondary,
  ImgChip,
  ChipWrapper,
  WrapperName,
  Name,
  Logo,
} from './styles';

const Card = ({
  reverse,
  name = 'Marcelo',
  cardNumber,
  validThru,
  securityCode,
}) => {
  const [state, setState] = useState(false);
  const handleFlip = () => { setState(!state) };

  return (
    <Container >
      <Flipper onClick={handleFlip} flip={state}>
        <Front>
          <HeaderFront>
            <WrapperBoll>
              <BollPrimary />
              <BollSecondary />
            </WrapperBoll>
          </HeaderFront>
          <ChipWrapper>
            <ImgChip src={Chip} />
          </ChipWrapper>
          <WrapperName>
            <Logo src={ImgLogo} />
            <Name>{name.toUpperCase()}</Name>
          </WrapperName>
        </Front>
        <Back>
          <div>
            <input placeholder="teste" />
            <label>nome</label>
          </div>
        </Back>
      </Flipper>
    </Container>
  )
};
export default Card;