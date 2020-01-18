import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

function Section({ title, children }) {
  return (
    <Container>
      {title && <h2>{title}</h2>}
      {children}
    </Container>
  );
}

Section.defaultProps = {
  title: '',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
