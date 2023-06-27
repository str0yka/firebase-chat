import classes from './Chat.module.scss'
import ChatInput from "../ChatInput/ChatInput.tsx";
import ChatMessages from "../ChatMessages/ChatMessages.tsx";

const Chat = () => {
  return (
    <div className={classes.Chat}>
      <ChatMessages/>
      <ChatInput/>
    </div>
  );
};

export default Chat;