import React from 'react'

/* ================================================== start Component ================================================== */
export default function Retirement () {
  return (
    <div className="retirement-container">
      <div className="retirement">
        <div className="image-container">
          <div className="wrap">
          <img
            src="/globalassets/images/campaigns/2023-outlook/retirement.jpg?v=011923."
            alt=""
          />
          </div>
        </div>
        <div className="retirement-content">
          <div className="wrap">
            <h2>Retirement Research</h2>
            <p>
              Our new retirement research results look beyond the surface to
              challenge conventional wisdom and gain insights for stakeholders to
              take action.
            </p>
            <a
              href="https://www.allspringglobal.com/globalassets/assets/public/pdf/insights/investing/2022-retirement-study-hiding-behind-the-averages.pdf"
              className="btn btn-primary  retirement-button"
              role="button"
              tabIndex={0}
              target="_blank"
              rel="noreferrer"
              aria-label="Download brochure"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
/* ==================================================  end Component  ================================================== */
