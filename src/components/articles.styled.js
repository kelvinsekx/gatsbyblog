import styled, { css } from "styled-components"

export const WrapperContainer = styled.div`
  width: 70vw;
  margin: 0.5em auto;
  font-size: 1.2rem;
  line-spacing: 5px;
  @media (max-width: 720px) {
    width: 90vw;
  }
`

export const StyledLogo = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  color: rgb(255, 167, 196);

  ${props =>
    props.theme === "dark" &&
    css`
      color: #fff;
      text-shadow: 0 0 0.033em #fff, 0 0 0.08em #fff,
        0 0 0.1em ${props => props.color.name},
        0 0 0.2em ${props => props.color.name},
        0 0 0.3em ${props => props.color.name},
        0 0 1em ${props => props.color.name},
        0 0 1.5em ${props => props.color.name};
    `}
`

export const StyledLink = styled.div`
  color: inherit;
  width: 60vw;
  margin-top: 2rem;
  @media (max-width: 768px) {
    width: 80vw;
  }
`

export const StyledH3 = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "DM Mono", monospace;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const StyledParagraph = styled.p`
  font-size: 1.1em;
  font-weight: 50;
`

export const StyledSmall = styled.small`
  margin-top: 1.2em;
`

export const TypingP = styled.p`
  margin: 0;
  padding: 0;
`

export const FooterDiv = styled.a`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`

export const Smalled = styled.small`
  font-size: 1rem;
  color: #555555;
`

export const NAV = styled.nav`
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2em;
`
