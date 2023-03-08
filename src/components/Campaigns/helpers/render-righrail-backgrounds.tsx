import React from 'react'
import settings from '../../../config/settings'

export default function renderRightrailBackgrounds (filename: string) {
  // Render for desktop only
  if (window.screen.width > settings.screen.width.small) {
    return (
      <>
        <div className="box-bgimg1">
          <div className="wrap">
            <video autoPlay muted loop>
              <source
                src={`/globalassets/assets/videos/campaigns/2023-outlook/${filename}.webm`}
                type="video/webm"
              ></source>
              <source
                src={`/globalassets/assets/videos/campaigns/2023-outlook/${filename}.mp4`}
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      </>
    )
  }
}
