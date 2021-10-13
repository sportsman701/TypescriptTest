import React, { useCallback } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import SearchContactCard from './SearchContactCard';

interface ScrollBodyProps {
  usersData: User[]
  handleScrollEnd: () => void
}

const Container = styled('div')(() => ({
  backgroundColor: 'lightgray',
  width: '410px',
  height: '100vh',
  borderRadius: '8px 8px 0px 0px',
  padding: '0 12px',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: '10px'
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1'
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555'
  }
}))

const ScrollBody: React.FC<ScrollBodyProps> = ({
  usersData,
  handleScrollEnd
}) => {
  const handleScroll = useCallback((event) => {
    const node = event.target;
    const bottom = Math.abs(node.scrollHeight - node.scrollTop - node.clientHeight) < 2;
    if (bottom) {
      handleScrollEnd()
    }
  }, [handleScrollEnd])

  if (!usersData) {
    return (
      <Typography style={{fontSize:'1.5em'}}>{'No Result'}</Typography>
    )
  }

  return (
    <Container onScroll={handleScroll}>
      {usersData.map((user) => (
        <SearchContactCard
          userId={user.id}
          fullName={`${user.first_name} ${user.last_name}`}
          profileImageUrl={user.avatar}
          trust={Number(user.id) % 100}
        />
      ))}      
    </Container>
    )
  }
  
  export default ScrollBody;