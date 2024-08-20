import React, { Component } from 'react'
import styled from 'styled-components'

const CustomA = styled.a`
    text-decoration: none;
    color: #0E201F;
    font-size: 24px;
    margin: 1em;
`;

export default class StyledA extends Component {
  render() {
    const {content} = this.props;
    return (
      <CustomA>{content}</CustomA>
    )
  }
}
