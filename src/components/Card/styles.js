import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  width: 25em;
  height: 15em;
  perspective: 1000px; 
`;

export const Flipper = styled.div`
  position: relative;
  width: 25em;
  height: 15em;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  transform: ${(props) => props.flip ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

export const Front = styled.div`
  position: absolute;
  width: 25em;
  height: 15em;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  background-color: #8A05BE;
  border-radius: 1em;
`;

export const Back = styled.div`
  border-radius: 1em;
  position: absolute;
  width: 25em;
  height: 15em;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  background-color: #8A05BE;
  color: white;
  transform: rotateY(180deg);
  -webkit-transform:rotateY(180deg);
  -moz-transform:rotateY(180deg);
  -o-transform:rotateY(180deg);
  -ms-transform:rotateY(180deg);
  unicode-bidi:bidi-override;
  direction:rtl;
`;

export const HeaderFront = styled.div`
  width: 95%;
  height: 2em;
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const WrapperBoll = styled.div`
  display: flex;
`;

export const BollPrimary = styled.div`
  position: relative;
  right: -1.5em;
  background: rgba(241,114,114, 0.90);
  width: 3em;
  height: 3em;
  border-radius: 3em;
`;

export const BollSecondary = styled.div`
  background: rgba(241,190,114, 0.90);
  width: 3em;
  height: 3em;
  border-radius: 3em;
`;

export const ChipWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1em;
  margin-left: 1.5em;
`;

export const ImgChip = styled.img`
  width: 4em;
`;

export const Logo = styled.img`
  margin-left: .7em;
  width: 7em;
`;

export const WrapperName = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.h3`
  color: #fff;
`;