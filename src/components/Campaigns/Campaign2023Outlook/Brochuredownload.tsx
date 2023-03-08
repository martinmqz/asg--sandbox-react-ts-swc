import React from 'react'

/* ================================================== start Component ================================================== */
export default function Brochuredownload () {
  return (
    <div className="brochureDownload">
      <div className="brochure-text">
        <p className="brochure-text-title ">Explore our 2023&nbsp;Outlook</p>
        <p className="brochure-text-content">
          Download the full brochure for our 2023 insights and beyond.
        </p>
        <a
          href="/assets/public/pdf/insights/investing/2023-investment-outlook-come-together.pdf"
          className="btn-primary brochure-text-button"
          role="button"
          tabIndex={0}
          target="_blank"
          aria-label="Download brochure"
        >
          DOWNLOAD
        </a>
      </div>
      <div className="brochure-image">
        <img
          src="/globalassets/images/campaigns/2023-outlook/brochuremobile.jpg?v=012023"
          alt=""
          width="182"
        />
      </div>
    </div>
  )
}
/* ==================================================  end Component  ================================================== */
