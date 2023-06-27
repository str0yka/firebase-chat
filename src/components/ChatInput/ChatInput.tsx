import React from "react";
import classes from './ChatInput.module.scss'
import {useContext, useState} from "react";
import {AppContext} from "../../main.tsx";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";

const ChatInput = () => {
  const { firestore, auth } = useContext(AppContext)

  const [ user ] = useAuthState(auth)
  const [ messageText, setMessageText ] = useState('')
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 50) {
      setMessageText(event.target.value.slice(0, 50))
      return
    }
    setMessageText(event.target.value)
  }
  const sendMessage = async () => {
    if (!messageText.trim()) return

    firestore.collection('messages').add({
      uid: user?.uid,
      displayName: user?.displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      photoURL: user?.photoURL,
      text: messageText,
    })

    setMessageText('')
  }

  return (
    <label className={classes.ChatInput}>
      <input
        type="text"
        placeholder='Write your message here...'
        value={messageText}
        onChange={handleInput}
        onKeyDown={event => event.key === 'Enter' && sendMessage()}
      />

      <span
        style={messageText.length >= 50 ? {color: 'red'} : undefined}
      >{ `${messageText.length}/50` }</span>

      <button
        onClick={sendMessage}
      >
        <svg viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_33)">
            <path
              d="M41.1583 21.75L6.32499 4.875L5.49999 4.6875C5.01376 4.6875 4.54744 4.88504 4.20363 5.23667C3.85981 5.58831 3.66666 6.06522 3.66666 6.5625L9.16666 23.4375L3.66666 40.3125C3.66666 40.8098 3.85981 41.2867 4.20363 41.6383C4.54744 41.99 5.01376 42.1875 5.49999 42.1875L6.32499 42L41.1583 25.125C41.4683 24.9715 41.7297 24.7317 41.9126 24.4333C42.0955 24.1348 42.1925 23.7897 42.1925 23.4375C42.1925 23.0853 42.0955 22.7402 41.9126 22.4417C41.7297 22.1433 41.4683 21.9035 41.1583 21.75ZM8.70832 36.6562L12.375 25.3125H22C22.4862 25.3125 22.9525 25.115 23.2964 24.7633C23.6402 24.4117 23.8333 23.9348 23.8333 23.4375C23.8333 22.9402 23.6402 22.4633 23.2964 22.1117C22.9525 21.76 22.4862 21.5625 22 21.5625H12.375L8.70832 10.2187L36.025 23.4375L8.70832 36.6562Z"
              fill="#ACACAC"/>
          </g>
          <defs>
            <clipPath id="clip0_1_33">
              <rect width="44" height="45" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </label>
  );
};

export default ChatInput;