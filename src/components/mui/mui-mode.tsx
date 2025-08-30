import { Typography, useTheme } from '@mui/material'
import React from 'react'

export const MuiMode = () => {
  const theme = useTheme()
  return (
    <Typography component={'h1'}>{theme.palette.mode} mode</Typography>
  )
}
