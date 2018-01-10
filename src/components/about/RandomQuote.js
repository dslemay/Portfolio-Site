import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import withSlideshow from '../withSlideshow';
import Card from '../Card';

import quotesData from '../../assets/js/quotesData';

const QuoteContainer = styled.div`
  position: relative;
  padding: 1rem 1rem 0rem 2rem;

  &::before {
    content: '\\201C';
    font-family: Georgia;
    font-style: bold;
    font-size: 4rem;
    color: ${props => props.theme.baseColor};
    position: absolute;
    left: 0.1rem;
  }

  &::after {
    content: '\\201D';
    font-family: Georgia;
    font-style: bold;
    font-size: 4rem;
    color: ${props => props.theme.baseColor};
    position: absolute;
    right: 0.1rem;
  }
`;

const RandomQuote = props => {
  const { slideData: quote } = props;

  return (
    <Card>
      <QuoteContainer>
        <div>{quote.quote}</div>
        <div>{quote.attribution}</div>
      </QuoteContainer>
    </Card>
  );
};

RandomQuote.propTypes = {
  slideData: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    attribution: PropTypes.string.isRequired
  }).isRequired
};

export default withSlideshow(RandomQuote, quotesData);
