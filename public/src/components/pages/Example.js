import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1281px)'})
  const isBigLandscapeDesktop = useMediaQuery({ query: '(max-width: 1224px)' })

  const isPortraitSmartphone = useMediaQuery({query: '(min-width: 320px)'})
  const isLandscapeSmartphone = useMediaQuery({ query: '(min-width: 480px)' })
  
  const isPortraitTablet = useMediaQuery({ query: '(min-Width: 600px)'})
  const isLandscapeTablet = useMediaQuery({query: '(min-width: 802px)'})

  return (
    <div>
      {isDesktopOrLaptop}
      {isBigLandscapeDesktop}

      {isPortraitSmartphone}
      {isLandscapeSmartphone}
      
      {isPortraitTablet}
      {isLandscapeTablet}
    </div>
  )
}

export default Example;