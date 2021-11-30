import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../firebase";
import moment from "moment";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);
  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;
  return (
    <Container>
      <TypeOfMessage>
        {message.message}
        <Timestamp>
          {message.timestamp ? moment(message.timestamp).format("LT") : `...`}
        </Timestamp>
      </TypeOfMessage>
    </Container>
  );
}

export default Message;

const Container = styled.div``;

const MessageElement = styled.p`
  position: relative;
  width: fit-content;
  min-width: 60px;
  padding: 15px;
  padding-bottom: 26px;
  text-align: right;
  border-radius: 8px;
  margin: 10px;
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;

const Receiver = styled(MessageElement)`
  background-color: whitesmoke;
  text-align: left;
`;

const Timestamp = styled.span`
  font-size: 9px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
  color: gray;
  padding: 10px;
`;
