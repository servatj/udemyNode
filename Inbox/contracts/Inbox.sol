pragma solidity ^0.4.17;

contract Inbox {
  String public message;

  function Inbox (string initialMmessage) public {
    message = initialMmessage;
  }

  function setMessage(string newMessage) public {
     message = newMessage;
  }
}