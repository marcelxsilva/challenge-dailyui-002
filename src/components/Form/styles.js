import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 4em;
  width: 100%;
  height: 85%;
`;


export const HeaderForm = styled.div`
  width: 90%;
  height: auto;
  margin: 2em auto;

  display: flex;
  justify-content:space-evenly;
`;

export const ItemImg = styled.div`
  background: ${props => props.done ? '#28B463' : '#8A05BE'};
  width: 6em;
  height: 6em;
  border-radius: 6em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border: 0;
`;

export const IconIMG = styled.img`
  width: 3em;
`;

export const Line = styled.div`
  width: 45vw;
  height: .5em;
  background: #8A05BE;
  border-radius: 2em;
  position: absolute;
  top: 8.5em;
`;

export const Form = styled.form`
  width: 76%;
  margin: 2em auto;
`;

export const Text = styled.h3`
  font-weight: 300;
  margin-top: 1.3em;
  margin-bottom: .5em;
`;


export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: .4em;
  border: .1em solid #C4C4C4;
  height: 4vh;
  color: #555;
  font-size: 1em;
  padding: 1em;
`;

export const InputSmall = styled.input`
  width: 20%;
  border: none;
  border-radius: .4em;
  border: .1em solid #C4C4C4;
  height: 6vh;
  color: #555;
  margin-right: 1em;
  font-size: 1em;
  text-align: center;

  ::placeholder {
    text-align: center;
    font-size: 1em;
  }
`;

export const WrapperInputSmall = styled.div`
  width: 50%;
`;
export const InputMedium = styled.input`
  width: 36vw;
  border: none;
  border-radius: .4em;
  border: .1em solid #C4C4C4;
  height: 6vh;
  color: #555;
  margin-right: 1em;
  font-size: 1em;
  margin-left: -11.5em;
  text-align: center;
  ::placeholder {
    text-align: center;
    font-size: 1em;
  }
`;

export const WrapperInputLine = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 16vw;
  height: 6vh;
  border: 0;
  border-radius: .7em;
  background: ${props => props.cancel ? '#fff' : '#28B463'};
  border: .1em solid ${props => props.cancel ? '#FF7373' : '#28B463'};
  color: ${props => props.cancel ? '#FF7373' : '#fff'};
`;


export const WrapperButton = styled.div`
  margin: 0 auto;
  margin-top: 8em;
  width: 48vw;
  display: flex;
  justify-content: space-between;
`;