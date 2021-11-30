import styled from "styled-components";
import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen";
import { db, auth } from "../../firebase";
import {
  collection,
  query,
  orderBy,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth"
import getRecipientEmail from "../../utils/getRecipientEmail";

function Chat({ messages, chat }) {
  const [user] = useAuthState(auth)
  return (
    <Container>
      <Head>
        <title>{getRecipientEmail(chat.users,user)}</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
    </Container>
  );
}

export default Chat;
// await getDoc(query(chatRef, orderBy("timestamp", "asc")));
export async function getServerSideProps(context) {
  const chatRef = query(
    collection(db, "chats", context.query.id, "messages"),
    orderBy("timestamp", "asc")
  );
  const messagesRes = await getDocs(chatRef);
  const messages = messagesRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));
  // console.log(messages);

  const chatRes = await getDoc(doc(db, "chats", context.query.id));
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };
  console.log(chat, messages, chatRes.data(), context.query.id);
  return { props: { messages: JSON.stringify(messages), chat: chat } };
}

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div``;
