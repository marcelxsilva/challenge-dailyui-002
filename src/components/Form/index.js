import React from 'react';
import UserIcon from '../../assets/user.png';
import CardIcon from '../../assets/card.png';
import DoneIcon from '../../assets/done.png';

import {
  Container,
  HeaderForm,
  IconIMG,
  ItemImg,
  Line,
  Form,
  Input,
  Text,
  WrapperInputLine,
  InputSmall,
  InputMedium,
  WrapperInputSmall,
  WrapperButton,
  Button,
} from './styles';

const FormComponent = ({
  onChange,
  onReverse,
  cardNumber
}) => {
  return (
    <Container >
      <HeaderForm>
        <Line />
        <ItemImg done>
          <IconIMG src={UserIcon} />
        </ItemImg>

        <ItemImg done>
          <IconIMG src={CardIcon} />
        </ItemImg>

        <ItemImg>
          <IconIMG src={DoneIcon} />
        </ItemImg>
      </HeaderForm>
      <Form>
        <Text>TITULAR DO CARTAO</Text>
        <Input onFocus={() => onReverse(false)} name="name" onChange={onChange} />

        <Text>NUMERO DO CARTAO</Text>
        <Input
          value={cardNumber.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4')}
          onFocus={onReverse}
          name="cardNumber"
          onChange={onChange}
          maxLength="19"
        />

        <WrapperInputLine>
          <WrapperInputSmall>
            <Text>DATA DE VALIDADE</Text>
            <InputSmall name="validThruOne" onChange={onChange} placeholder="MM" maxLength="2" />
            <InputSmall name="validThruTwo" onChange={onChange} placeholder="MM" maxLength="2" />
          </WrapperInputSmall>

          <WrapperInputSmall>
            <Text>CODIGO DE SEGURANCA</Text>
            <InputMedium name="securityCode" onChange={onChange} placeholder="MM" maxLength="3" />
          </WrapperInputSmall>
        </WrapperInputLine>

        <WrapperButton>
          <Button cancel>Cancelar</Button>
          <Button>Pagar Agora</Button>
        </WrapperButton>
      </Form>
    </Container>
  )
};
export default FormComponent;