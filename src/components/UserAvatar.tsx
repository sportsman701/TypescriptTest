import React from "react";
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

interface UserAvatarProps {
  fullName: string
  profileImageUrl: string
  trust: number
}

const Trustness = styled('div')(() => ({
  backgroundColor: '#6A3EEA',
  color: 'white',
  borderRadius: '50%',
  width: '2em',
  height: '2em',
  lineHeight: '2em',
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translate(-50%, -60%)',
  zIndex: 1
}))

const AvatarContainer = styled('div')(() => ({
  position: 'relative',
  display: 'inline-block',
  transform: 'translate(0, -16px)',
}))


const AvatarCircleContainer = styled('div')(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: '100px',
  transform: 'translate(-50%, -50%)'
}))

const UserAvatarImage = styled(Avatar)<AvatarProps>(() => ({
  width: 80,
  height: 80,
}))

const AvatarCircle = styled(CircularProgress)<CircularProgressProps>(() => ({
  circle: {
    stroke: "url(#linearColors)",
  },
  '& .MuiCircularProgress-svg': {
    strokeLinecap: 'round'
  },
}))

const UserAvatar: React.FC<UserAvatarProps> = ({
  fullName,
  profileImageUrl,
  trust
}) => {
  return (
    <div>
      <AvatarContainer>
        <Trustness>{trust}</Trustness>
        <UserAvatarImage alt={fullName} src={profileImageUrl} />
        <AvatarCircleContainer>
          <AvatarCircle variant="determinate" value={trust} size={100} />
          <svg width="100" height="100">
            <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
              <stop offset="6.7%" stopColor="#FA5D75" />
              <stop offset="65.76%" stopColor="rgba(120, 100, 246, 0.67)" />
            </linearGradient>
          </svg>
        </AvatarCircleContainer>
      </AvatarContainer>
    </div>
  )
}

export default UserAvatar;