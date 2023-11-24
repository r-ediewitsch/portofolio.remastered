import React from "react";
import styled from "styled-components";
import { education } from "../data/const";
import EducationCard from "./Cards/EducationCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    margin-bottom: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 20px;
    color: ${({theme}) => theme.text_primary};
    @media (max-width: 768px){
        margin-top: 50px;
        font-size: 32px;
    }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`;

const Education = () => {
    return (
        <Container id="education">
            <Title>Education</Title>
            <Wrapper>
                <CardContainer>
                    {education.map((education) => <EducationCard education={education} />)}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Education;
