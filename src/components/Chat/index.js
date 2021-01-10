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
    const chatData = await fetchChatData(1);
      this.setState({
        loadingInitial: false, 
        conversations: chatData.conversations
      })
  }
  
  fetchMoreConversations = async() => {
    // 2ページ目以降のデータを取得しましょう。
    const moreChatData = await fetchChatData(2);
    moreChatData.conversations.map((data) => {
      return this.state.conversations.push(data)
    })
    console.log(this.state.conversations);
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