import React from 'react';
import styled, { keyframes } from 'styled-components';

const type = (fromScale, toScale, fromRotate, toRotate) => keyframes`
  from {
    transform: scale(${fromScale}) rotate(${fromRotate}deg);
  }
  
  to {
    transform: scale(${toScale}) rotate(${toRotate}deg);
  }
`;

const StyledLetter = styled.div`
  animation: 2s ${props => type(props.fromScale, props.toScale, props.fromRotate, props.toRotate)} forwards;
  margin: 1px 3px 4px 2px;
  font-size: 100px;
`;

const Letter = ({children}) => {
    return (
        <StyledLetter
            fromScale={(Math.random() * (0.5 - 1.0) + 0.5).toFixed(4)}
            toScale={(Math.random() * (1.5 - 2.5) + 1.5).toFixed(4)}
            fromRotate={(Math.random() * (-10 - 10) + 10).toFixed(4)}
            toRotate={(Math.random() * (-10 - 10) + 10).toFixed(4)}
        >
            {children}
        </StyledLetter>
    );
};

export default React.memo(Letter);

