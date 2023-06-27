import classes from './ChatMessages.module.scss'
import Message from "../Message/Message.tsx";
import {useContext} from "react";
import {AppContext} from "../../main.tsx";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "../Loader/Loader.tsx";

const ChatMessages = () => {
  const { firestore } = useContext(AppContext)
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )

  return (
    <div className={classes.ChatMessages}>
      { loading ?
        <Loader/>
        :
        messages?.map(message =>
          <Message key={message.createdAt} message={message}/>
        )
      }
    </div>
  );
};

export default ChatMessages;