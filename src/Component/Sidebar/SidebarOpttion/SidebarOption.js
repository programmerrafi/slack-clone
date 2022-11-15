import React from "react";
import { useHistory } from "react-router";
import db from "../../../Firebase/firebase";
import "./SidebarOption.css";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please Enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sidebarOptions"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebaroption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
