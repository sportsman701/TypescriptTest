import React, { useEffect, useState, useCallback } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import ScrollBody from '../../components/ScrollBody'
import axios from 'axios';

const Main = () => {
  const [usersData, setUsersData] = useState([] as User[])
  const [isLoading, setIsLoading] = useState(true)

  const fetchUsersData = useCallback(async () => {
    setIsLoading(true)
    const response = await axios.get('https://random-data-api.com/api/users/random_user?size=10')
    setUsersData(response.data)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchUsersData()
  }, [fetchUsersData])
  
  if (isLoading) {
    return <CircularProgress disableShrink />;
  }

  return (
    <ScrollBody
      usersData={usersData}
      handleScrollEnd={fetchUsersData}
    />
  );
}

export default Main;
