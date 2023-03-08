import React from 'react'

/* ================================================== start Component ================================================== */

export default function VideoModule () {
  return (
    <>
      <div className="video">
        <div className="video-left">
          <div className="wrap">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Di1ek04Eags?rel=0"
              frameBorder="0"
              allow="fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="video-right">
          <div className="wrap">
            <div className="eyebrow">CIO Corner</div>
            <h2>A Year of&nbsp;Themes</h2>
            <p>
              Join Sue Herera, award-winning journalist and &quot;anchor at
              large&quot; with CNBC, and our own co-CIOs, Jon Baranko and Dan
              Morris, to discuss what is on the horizon for 2023.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
/* ==================================================  end Component  ================================================== */
