import React, { Component } from 'react'
import styled from 'styled-components'

const CustomA = styled.a`
    text-decoration: none;
    color: #0E201F;
    font-size: 24px;
    margin: 1em;

    &:hover {
      color: #071110;
      cursor: pointer;
    }
`;

export default class StyledA extends Component {
  render() {
    const {content, click} = this.props;
    
    return (
      <CustomA onClick={() => click()}>{content}</CustomA>
    )
  }
}
