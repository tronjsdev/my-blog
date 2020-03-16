import React from 'react';
import { styled } from '@utils';

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 4rem 2rem;
  font-size: 1.6rem;
`;

const AvatarStyled = styled.span`
  width: 64px;
  height: 64px;
  border-radius: 999px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
`;

const InfoStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  .name {
    display: block;
  }
  .name h4 {
    margin: 0;
    font-size: 1.6em;
    color: #e9e9e9;
    font-weight: 500;
  }
  .links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    li {
      padding: 0 1em;
      &:first-child {
        padding-left: 0;
      }
      a {
        color: ${({ theme }) => theme.accentColor};
        text-decoration: none;
        font-size: 0.95em;
      }
    }
  }
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <AvatarStyled>
        <img src="https://pbs.twimg.com/profile_images/1059532270577557506/6f6p85he.jpg" />
      </AvatarStyled>
      <InfoStyled>
        <a className="name">
          <h4>Tron Nguyen</h4>
        </a>
        <ul className="links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
        </ul>
      </InfoStyled>
    </HeaderStyled>
  );
};
