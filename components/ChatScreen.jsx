import styled from "styled-components";
import { useRouter } from "next/router"
function ChatScreen() {
    const router = useRouter()
  return <Container>
      {router.query.id}
  </Container>;
}

export default ChatScreen;

const Container = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
