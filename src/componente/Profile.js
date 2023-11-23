import React from "react";
import styled from "styled-components";
import { meinBio } from "../data/const";
import fotos from "../imaji/fotos.jpg"

const ProfileContainer = styled.div`
    background-color: ${({theme}) => theme.card};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    
    @media screen and (max-width: 960px){
        padding: 66px 16px;
    }

    @media screen and (max-width: 640px){
        padding: 32px 16px;

    z-index: 1;
    }
`;

const ProfileInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    
    @media screen and (max-width: 960px){
        flex-direction: column;
    }
`;

const ProfileLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media screen and (max-width: 960px){
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    @media screen and (max-width: 640px){
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

const ProfileRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;
    gap: 12px;
    @media screen and (max-width: 960px){
        order: 1;
        margin-bottom: 80px;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 640px){
        order: 1;
        margin-bottom: 30px;
        justify-content: center;
        align-items: center;
    }
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    color: ${({theme}) => theme.text_primary};
    line-height: 68px;
    padding-bottom: 12px;
    @media screen and (max-width: 960px){
        text-align: center;
    }
    @media screen and (max-width: 640px){
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

const SubTitle = styled.div`
    font-size: 20px;
    color: ${({theme}) => theme.text_primary+95};
    line-height: 32px;
    margin-bottom: 32px;
    @media screen and (max-width: 960px){
        text-align: center;
    }
    @media screen and (max-width: 640px){
        font-size: 16px;
        line-height: 32px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 50%;
    max-width: 400px;
    max-height: 400px;
    object-fit: cover;
    object-position: center;
    @media screen and (max-width: 768px){
        max-width: 400px;
        max-height: 400px;
    }
    @media screen and (max-width: 640px){
        max-width: 280px;
        max-height: 280px;
    }
`;

const Button = styled.button`
    appearance: none;
    border: 2px solid #deebdd;
    background-color: ${({theme}) => theme.card};
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;

    &:hover {
      transform: scale(1.05);
      transition: all 0.4s ease-in-out;
      background-color: #edf4ec;
    }
`;

const Profile = () => {
  const handleClick = () => {
    window.location.href = meinBio.resume;
  };

  return (
    <div id="about">
      <ProfileContainer>
        <ProfileInnerContainer>
          <ProfileLeftContainer>
            <Title>Hello, I'm <br/>{meinBio.name}</Title>
            <SubTitle>{meinBio.description}</SubTitle>
            <Button onClick={handleClick}>Check CV</Button>
          </ProfileLeftContainer>
          <ProfileRightContainer>
            <Image src={fotos} alt="Profile" />
          </ProfileRightContainer>
        </ProfileInnerContainer>
      </ProfileContainer>
    </div>
  );
};

export default Profile;