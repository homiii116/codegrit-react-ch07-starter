import React, { Component } from 'react';
import { fetchChatData } from '../../chatData';
import ConversationList from './ConversationList';

export default class extends Component {
  state = {
    chosenId: 1,
    page: 1,
    hasNextPage: true,
    conversations: [],
    loadingInitial: true,
    loadingMore: false
  }

  handleChooseConversation = () => {}
  
  componentDidMount() {
    // fetchChatDataファンクションを利用してデータを取得しましょう。
    fetchChatData().then((data) => {
      this.setState({
        loadingInitial: false, 
        data
      })
    })
  }
  
  fetchMoreConversations = () => {
    // 2ページ目以降のデータを取得しましょう。
  }

  render() {
    const { chosenId, loadingInitial, conversations } = this.state;
    return (
      <ConversationList
        chosenId={chosenId}
        loadingInitial={loadingInitial}
        conversations={conversations} />
    );
  }
}