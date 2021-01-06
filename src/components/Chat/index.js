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
  
  async componentDidMount() {
    // fetchChatDataファンクションを利用してデータを取得しましょう。
    const chatData = await fetchChatData();
      this.setState({
        loadingInitial: false, 
        conversations: chatData.conversations
      })
  }
  
  fetchMoreConversations = () => {
    // 2ページ目以降のデータを取得しましょう。

  }

  render() {
    const {
      chosenId,
      page,
      hasNextPage,
      conversations,
      loadingInitial,
      loadingMore
    } = this.state;
    return (
      <ConversationList
        chosenId={chosenId}
        page={page}
        hasNextPage={hasNextPage}
        conversations={conversations}
        loadingInitial={loadingInitial}
        loadingMore={loadingMore}
      />
    );
  }
}