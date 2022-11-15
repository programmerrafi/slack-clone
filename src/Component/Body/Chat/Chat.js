import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Chat.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoIcon from "@mui/icons-material/Info";
import db from "../../../Firebase/firebase";
import Message from "./Message/Message";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessage, setRoomMessage] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("mwssages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessage(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  //   console.log(roomDetails);
  console.log(roomMessage);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {roomMessage.map(({ message, timestamp, user, useImage }, index) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={useImage}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Chat;
