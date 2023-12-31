import React from "react";
import styled from "styled-components";
import { education } from "../../data/const";

const Card = styled.div`
    width: 680px;
    height: 135px;
    background-color: ${({theme}) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.2);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media (max-width: 732px){
        width: 340px;
        height: 150px;
    }
    &:hover{
        transform: translateY(-5px);
        box-shadow: 0 0 8px 4px rgba(0,0,0,0.25);
    }
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`;

const Image = styled.img`
    height: 75px;
    background-color: none;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 75px;
    }
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const Date = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin-left: 2px;
    color: ${({theme}) => theme.text_secondary+80};
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({theme}) => theme.text_secondary+99};
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    margin-top: 8px;
    max-width: 100%
`;

const EducationCard = ({education}) => {
    const handleClick = () => {
        window.location.href = education.link
    }
    return( 
    <Card onClick = {handleClick}>
        <Top>
            <Image src={education.img} />
            <Details>
                <Title>{education.school}</Title>
                <Date>{education.date}</Date>
                <Description>{education.description}</Description>
            </Details>
        </Top>
    </Card>
    );
};

export default EducationCard;
