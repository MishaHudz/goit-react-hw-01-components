import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  padding: 0;
  border-radius: 10px;
  border: 2px solid black;

  background-color: #f8f8f8;

  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 40px;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  background-color: teal;
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 100px;
  padding: 20px;

  color: white;
  background-color: teal;
`;

export const UserName = styled.p`
  font-size: 25px;
  line-height: 1.5;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const UserInfo = styled.p`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 400;
  color: #686868;
  text-decoration: dashed;
  font-style: italic;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
