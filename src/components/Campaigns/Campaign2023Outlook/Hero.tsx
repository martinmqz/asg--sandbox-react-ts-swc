import React from 'react'
import settings from '../../../config/settings'
import delay from '../../../utils/delay'
import renderHeroSubtitle from '../helpers/render-hero-subtitle'

/* ================================================== start Component ================================================== */
export default function Hero () {
  const [stateScreenWidth, setStateScreenWidth] = React.useState(window.screen.width)

  React.useEffect(() => {
    const delayedHandleScreenResize = delay((e: UIEvent) => {
      const win = e.target as Window
      setStateScreenWidth(win.screen.width)
    }, 250)

    window.addEventListener('resize', delayedHandleScreenResize)
    return () => {
      window.removeEventListener('resize', delayedHandleScreenResize)
    }
  }, [])

  return (
    <div className="hero-banner">
      <div className="hero-banner-media">
        {renderVideo(stateScreenWidth)}
        <div className="hero-banner-content">
          <div className="wrapper">
            <h1>Purposefully Divergent</h1>
            {renderHeroSubtitle()}
          </div>
        </div>
        <div className="hero-banner-gradient"></div>
      </div>
    </div>
  )
}
/* ==================================================  end Component  ================================================== */

//
/// Helpers
//
function renderVideo (screenWidth: number) {
  const webmSize1280x475 = '/globalassets/assets/videos/campaigns/2023-outlook/craddle-looping.1280x475.webm'
  const mp4Size1280x475 = '/globalassets/assets/videos/campaigns/2023-outlook/craddle-looping.1280x475.mp4'
  const webmSize412x412 = '/globalassets/assets/videos/campaigns/2023-outlook/craddle-looping.412x412.webm'
  const mp4Size412x412 = '/globalassets/assets/videos/campaigns/2023-outlook/craddle-looping.412x412.mp4'
  const breakpoint = settings.screen.width.xsmall
  const webmSrc = screenWidth <= breakpoint ? webmSize412x412 : webmSize1280x475
  const mp4Src = screenWidth <= breakpoint ? mp4Size412x412 : mp4Size1280x475

  return (
    <React.Fragment key={webmSrc}> {/* Unique key needed */}
      <video autoPlay muted loop>
        <source src={webmSrc} type="video/webm"></source>
        <source src={mp4Src} type="video/mp4"></source>
        Your browser does not support HTML video.
      </video>
    </React.Fragment>
  )
}
