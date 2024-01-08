import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'


export const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
     <InfinitySpin  width='200' color="#4fa94d"/>
    </Stack>
  )
}
