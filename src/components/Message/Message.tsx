import classes from './Message.module.scss'
import {useAuthState} from "react-firebase-hooks/auth";
import {useContext} from "react";
import {AppContext} from "../../main.tsx";

interface MessageProps {
  message: any
}

const Message = ({ message }: MessageProps) => {
  const { auth } = useContext(AppContext)
  const [ user ] = useAuthState(auth)
  const isMessageByCurrentUser: boolean = message.uid === user?.uid

  return (
    <div className={`${classes.Message} ${isMessageByCurrentUser && classes.SendByCurrentUser}`}>
      { !isMessageByCurrentUser && <h4>{ message.displayName }</h4> }
      <p>{ message.text }</p>
      <span>{ '19:30' }</span>
    </div>
  );
};

export default Message;