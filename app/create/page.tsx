'use client'

import ReduxProvider from '@/src/redux/redux-provider'
import { useAppSelector } from '@/src/redux/store';
import React from 'react'

const Create = () => {
  const dashboardState = useAppSelector((state) => state.dashboard);
  console.log(dashboardState);
  return (
      <div>Create</div>
  )
}

export default Create