/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React, { Component } from 'react';
import styled from '@emotion/styled/macro';
import ConversationListItem from '../ConversationListItem';
import { ReactComponent as Loader } from '../../../images/loading.svg';

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

const LoadMore = () => {
  
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
    <LoadMoreBox>
      <Loader width={60} height={60} />
    </LoadMoreBox>
  </div>
);

export default class extends Component {
  state = {
    chosenId: 1,
    loadingInitial: false,
    conversations: []
  }

  render() {
    const { chosenId, conversations } = this.state;
    return (
      <ConversationListWrapper>
        <EmptyBox
         chosenId={chosenId}
         conversations={conversations} />

        {/* <LoadMore /> */}
      </ConversationListWrapper>
    );
  }

}