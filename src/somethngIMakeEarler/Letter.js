import React from 'react';
import styled, { keyframes } from "styled-components";

const grow = (fromScale, toScale, fromRotation, toRotation) => keyframes`
  from {
    transform: rotate(${fromRotation}deg) scale(${fromScale});
  }

  to {
    transform: rotate(${toRotation}deg) scale(${toScale});
  }
`;


const StyledLitter = styled.div`
  animation: 2s ${props => grow(props.from, props.to, props.fromRotation, props.toRotation)} forwards;
  margin: 0 5px 0 5px;
  font-size: 100px;
`;

const Letter = ({ children }) => {
    const fromScale =  (Math.random() * (0.5 - 1.0) + 0.5).toFixed(4);
    const toScale =  (Math.random() * (1.5 - 2.5) + 1.5).toFixed(4);

    const fromRotation =  (Math.random() * (-5 - 5) + 5).toFixed(4);
    const toRotation =  (Math.random() * (-5 - 5) + 5).toFixed(4);

    console.log('RENDERED');

    return (
        <StyledLitter
            from={fromScale}
            to={toScale}
            fromRotation={fromRotation}
            toRotation={toRotation}
        >
            {children}
        </StyledLitter>
    );
};

export default React.memo(Letter);

