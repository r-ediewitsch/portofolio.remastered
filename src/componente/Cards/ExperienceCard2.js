import React from 'react'
import styled from 'styled-components'


const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 0px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.2px solid #bad6b8;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 8px;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`;

const Image = styled.img`
    height: 50px;
    background-color: none;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`;


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 90};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const ExperienceCard2 = ({ experience2 }) => {
    return (
        <Card>
            <Top>
                <Image src={experience2.img} />
                <Body>
                    <Role>{experience2.role}</Role>
                    <Company>{experience2.organization}</Company>
                    <Date>{experience2.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience2?.desc &&
                    <Span>{experience2?.desc}</Span>

                }
            </Description>
        </Card>
    )
}

export default ExperienceCard2