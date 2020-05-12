import React from 'react';
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
  Description,
  BarReader,
  Text,
  Selo,
  ItemInformation,
  WrapperInformations,
  NumberText,
  Sup,
} from './styles';

const Card = ({
  reverse,
  name = 'Marcelo Silva',
  cardNumber = '0000 0000 0000 0000',
  validThru = '12/34',
  securityCode = '123',
}) => {
  return (
    <Container >
      <Flipper flip={reverse}>
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
          <Description>
            issue by Nubank under license by Mastercard internacional.
          </Description>
          <BarReader />
          <Text>gold</Text>
          <Selo />
          <Text>{cardNumber}</Text>
          <WrapperInformations>
            <ItemInformation>
              <Sup>
                MEMBER
                SINCE
              </Sup>
              <NumberText>01/18</NumberText>
            </ItemInformation>

            <ItemInformation>
              <Sup>
                VALID
                THRU
              </Sup>
              <NumberText>{validThru}</NumberText>
            </ItemInformation>

            <ItemInformation>
              <Sup>
                SECURITY
                CODE
              </Sup>
              <NumberText>{securityCode}</NumberText>
            </ItemInformation>
          </WrapperInformations>
        </Back>
      </Flipper>
    </Container>
  )
};
export default Card;