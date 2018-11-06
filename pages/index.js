import React, { Component } from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const MyButton = styled.button`
    background: blue;
    font-size: ${props => props.huge ? '100px' : '50px'};
    .hee{
        color: green;
    }
    span{

    }
`;

export default class Index extends Component {
    render() {
        return (
            <div>
                Home

            </div>
        )
    }
}
