import theme from '@styles/theme';
import styled from 'styled-components';
import ChatBottom from './components/ChatBottom';
import ChatHead from './components/ChatHead';

export default function ChattingRoomPage() {
  return (
    <ContainerLayout>
      <ChatHead />
      <ChatBottom />
    </ContainerLayout>
  );
}

const ContainerLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 100vh;
  background-color: ${theme.colors.blue};
`;
