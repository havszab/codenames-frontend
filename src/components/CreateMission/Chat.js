import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

class Chat extends Component {
    componentDidMount() {
        addResponseMessage("Welcome to this awesome chat!");
    }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message through the backend API
    }

    render() {
        return (
            <div>
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    title={this.props.title}
                    subtitle={this.props.subTitle}
                />
            </div>
        );
    }
}

export default Chat;
