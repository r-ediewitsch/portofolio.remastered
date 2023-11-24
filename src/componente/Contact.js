import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 0px 0px 80px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const ContactForm = styled.form`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.card};
    padding: 32px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 24px;
    margin-top: 28px;
    gap: 12px;
`;

const ContactTitle = styled.div`
    font-size: 24px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
      border: 1px solid ${({ theme }) => theme.primary};
    }
`;

const ContactInputMessage = styled.textarea`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
      border: 1px solid ${({ theme }) => theme.primary};
    }
`;

const ContactButton = styled.input`
    width: 100%;
    text-decoration: none;
    text-align: center;
    border: 2px solid #deebdd;
    cursor: pointer;
    padding: 13px 16px;
    margin-top: 2px;
    border-radius: 12px;
    color: ${({ theme }) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
    &:hover {
      background-color: #edf4ec;
    }
`;

const Contact = () => {

  const getElement = (identifier = "") => document.querySelector(identifier);

  function verifySubmission() {
    let subjectElement = getElement("#subject").value;
    let messageElement = getElement("#message").value;
    let nameElement = getElement("#yourname").value;

    if (subjectElement && messageElement && nameElement) {
      let body = encodeURIComponent("From: " + nameElement + "\n" + messageElement);
      window.location.href = "mailto:mriyansatriow@gmail.com?subject=" + subjectElement + "&body=" + body;
    } 
    else {
      alert("Please fill in all required fields.");
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <ContactForm>
          <ContactTitle>Contact Me</ContactTitle>
          <ContactInput placeholder="Your Name" id="yourname" type="text" />
          <ContactInput placeholder="Subject" id="subject" type="subject" />
          <ContactInputMessage placeholder="Enter your message" rows="4" id="message" />
          <ContactButton placeholder="Send" onClick={verifySubmission} />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;