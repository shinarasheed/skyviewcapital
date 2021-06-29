import styled from 'styled-components';

export const LoginForm = styled.article`
  width: ${(props) => (props.step === 8 ? '80%' : '50%')};
  padding-bottom: 5rem;
  padding: 5rem 4rem 2rem 4rem;
  opacity: 0.9;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  .form-control {
    font-size: 1.5rem;
    padding: 10px;
    height: auto !important;

    &::placeholder {
      font-size: 1.5rem;
    }
  }

  .formLabel,
  .label {
    font-size: 1.5rem !important;
    color: white !important;
  }

  .formText {
    font-size: 1.3rem;
    color: white;
  }

  button {
    font-size: 1.5rem;
    margin-top: 1rem;
    background-color: $primary-color;
    border: none;
    padding: 0.7rem 3rem;
  }

  button:first-of-type {
    margin-right: 1rem;
    @media screen and (max-width: 768px) {
      margin-right: 0;
    }
  }

  .buttonContainer {
    display: flex;
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .sinupCta {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: white;
    font-size: 1.5rem;
  }
`;
