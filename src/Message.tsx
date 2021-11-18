import React from "react";

interface UserMessage {
    name: string;
    message: string;
}

interface NumberFunction {
    (number: number): string
}

const Message = (props: UserMessage) => {
    return (
        <p>This is {props.name}'s message, {props.message}</p>
    );
}

export default Message;