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
    loadingMore: false,
  }

  handleChooseConversation = (id) => {
    this.setState({
      chosenId: id
    })
  }
  
  async componentDidMount() {
    // fetchChatDataファンクションを利用してデータを取得しましょう。
    const chatData = await fetchChatData();
    this.setState({
      loadingInitial: false, 
      conversations: chatData.conversations
    })
  }

  fetchMoreConversations = async (e = null) => {
    // 2ページ目以降のデータを取得しましょう。
    if(e) e.preventDefault();
    this.setState({
      loadingMore: true
    })
    let morePage = this.state.page + 1;
    const moreChatData = await fetchChatData(morePage);
    this.setState(state => {
      return {
        page: morePage,
        hasNextPage: moreChatData.hasNextPage,
        conversations: state.conversations.concat(moreChatData.conversations),
        loadingMore: false
      }
    });
    console.log(moreChatData);
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

    const conversationListProps = {        
      chosenId,
      page,
      hasNextPage,
      conversations,
      loadingInitial,
      loadingMore,
      fetchMoreConversations: this.fetchMoreConversations,
      handleChooseConversation: this.handleChooseConversation
    } 

    return (
      <ConversationList
        {...conversationListProps}
      />
    );
  }
}