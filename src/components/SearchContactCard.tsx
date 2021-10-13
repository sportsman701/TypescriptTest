import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import UserAvatar from './UserAvatar'
import Button, { ButtonProps } from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

interface SearchContactCardProps {
    userId: number
    fullName: string
    profileImageUrl: string
    trust: number
} 


const UserNameContainer = styled(Typography)<TypographyProps>(() => ({
  width: '100%',
  margin: '1em 2em',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left'
}))

const ProfileContainer = styled('div')(() => ({
  backgroundColor: 'white',
  height: '100px',
  borderRadius: '8px 8px 0px 0px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 12px',
}))

const AddIconButton = styled(Button)<ButtonProps>(() => ({
  color: '#835BF9',
  backgroundColor: '#EAE8FE',
  width: '50px',
  height: '50px',
  border: '1px solid #835BF9',
  borderRadius: '10px',
  minWidth: '50px',
  '& .MuiButton-startIcon': {
    margin: 0,
    '& .MuiSvgIcon-root': {
      fontSize: 'xx-large'
    }
  }
}))

const InfoContainer = styled(Typography)<TypographyProps>(() => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#EAE8FE',
  color: '#835BF9',
  padding: '0.5em',
  fontSize: '1.2em',
  borderRadius: '0px 0px 8px 8px' 
}))

const SearchContactCard: React.FC<SearchContactCardProps> = ({
  userId,
  fullName,
  profileImageUrl,
  trust
}) => {
  return (
    <div style={{width:'400px', margin: '2em 0'}}>
      <ProfileContainer>
        <UserAvatar 
          fullName={fullName}
          profileImageUrl={profileImageUrl}
          trust={trust}
        />
        <UserNameContainer>
          <Typography style={{fontSize:'1.5em'}}>{fullName}</Typography>
          <Typography style={{color:'grey'}}>nessuna connessione</Typography>
        </UserNameContainer>
        <AddIconButton startIcon={<AddIcon />} />
      </ProfileContainer> 
      <InfoContainer>
        <label>Sta gia condividendo</label>
        <a href="/" style={{margin:'0 4px'}}>Disney Plus</a>
      </InfoContainer>   
    </div>
  )
}
  
export default SearchContactCard;