import React from 'react'
type IconComponent = React.ElementType<{ className?: string }>

export type SideBarType = {
  id: number
  title: string
  icon: IconComponent
}
