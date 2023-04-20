import React from 'react';
import styled from 'styled-components';

const Street = ({
    // imageURL,
    name
}) => {
    return (
        <Wrapper>
        {/**   <Image src={imageURL} /> */}  
            <Text>{name}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
border-radius:1rem;
padding:1rem;
border:2px solid black;
display:flex;
flex-flow:column nowrap;
width:20rem;
height:20rem;

`
/** 
const Image = styled.img`
width:auto;
height:85%;
object-fit:contain;
`
*/

const Text = styled.div`
padding:0.5rem;
font-size:1.25rem;
`
export default Street;