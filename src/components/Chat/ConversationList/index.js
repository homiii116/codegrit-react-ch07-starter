import React, { Component } from 'react';
import styled from '@emotion/styled/macro';
import ConversationListItem from '../ConversationListItem';
import { ReactComponent as Loader } from '../../../images/loading.svg';

const LoadingiInitialWrapper = styled.div({
  "height": "360px",
  "width": "360px",
  "display": "flex",
  "alignItems": 'center',
  "justifyContent": 'center',
  "border": "1px solid #ddd",
})

const ConversationListWrapper = styled.ul({
  "height": "360px",
  "width": "360px",
  "overflowY": "scroll",
  "display": "flex",
  "flexDirection": "column",
  "border": "1px solid #ddd",
  "list-style": 'none',
})

const LoadMoreBox = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: 10
})

const LoadMoreMessage = styled.div({
  color: '#999',
  fontSize: '0.8em',
}, ({ hasMore }) => {
  const styles = []
  if (hasMore) {
    styles.push({
      cursor: 'pointer',
    })
  }
  return styles;
});

const LoadMore = ({ loadingInitial, loadingMore, hasNextPage }) => {
  if (loadingInitial) return <div />
  
  if (loadingMore) {
    return (
      <LoadingiInitialWrapper>
        <Loader />
      </LoadingiInitialWrapper>
    )
  }
  
  if (hasNextPage) {
    return (
      <LoadMoreBox>
        <LoadMoreMessage hasMore={true}>
          更に読み込む
        </LoadMoreMessage>
      </LoadMoreBox>
    )
  } else {
    return (
      <LoadMoreBox>
        <LoadMoreMessage hasMore={false}>
          これ以上ありません
        </LoadMoreMessage> 
      </ LoadMoreBox>
    )
  }

}

const EmptyBox = () => (
  <div css={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "360px",
    width: "360px",
    border: "1px solid #ddd",
  }}>
    <Loader width={60} height={60} />
  </div>
);

export default class extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }
  handleClick = (e) => {
    e.preventDefault();

  }

  render() {

    const { loadingInitial, loadingMore, conversations, chosenId, hasNextPage } = this.props;
    if (loadingInitial) {
      return (
        <LoadingiInitialWrapper>
          <EmptyBox />
        </ LoadingiInitialWrapper>
      )
    }
    const conversationList = conversations.map((conversation) => {
      const { isChosen } = chosenId === conversation.id;
      return <ConversationListItem 
          key={conversation.id}  
          isChosen={isChosen}
          hasNextPage={hasNextPage}
          conversation={conversation}
        />
    })
    
    return (
      <ConversationListWrapper>
        {conversationList}
        <LoadMore 
          loadingInitial={loadingInitial}
          loadingMore={loadingMore} />
      </ConversationListWrapper>
    );
  }

}