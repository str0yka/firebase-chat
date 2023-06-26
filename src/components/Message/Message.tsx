import classes from './Message.module.scss'

// export interface MessageData {
//   createdAt: string
//   displayName: string
//   photoURL: string
//   text: string
//   uid: string
// }

interface MessageProps {
  sendByCurrentUser?: boolean
  message: any
}

const Message = ({ sendByCurrentUser = false, message }: MessageProps) => {
  const date = `${Math.floor(message.createdAt / 60 / 60) % 60}:${Math.floor(message.createdAt / 60) % 60}`

  return (
    <div className={classes.Message}>
      <h4>{ message.displayName }</h4>
      <p>{ message.text }</p>
      <span>{ date }</span>
    </div>
  );
};

export default Message;