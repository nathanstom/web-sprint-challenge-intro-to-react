// Write your Character component here
import React from 'react'
import styled from 'styled-components'



const Info = styled.div`
    color: yellow;
    background: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    margin: 5%;
`;

const Wrap = styled.div`
    opacity: 0.7;
    width: 100%;
    height: 100%;
`;

function Character(info) {
    const charInfo = info.props;

    return (
        <Wrap>
            {charInfo.map((data, idx) => {
                return (
                    <Info key={idx}>
                        Name: {data.name}<br />Birth Year: {data.birth_year}<br />Films: {data.films.join(' - ')}
                    </Info>
                );
            })}
        </Wrap>
    );
}

export default Character;