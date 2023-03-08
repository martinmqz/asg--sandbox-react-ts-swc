import React from 'react'

/* ================================================== start Component ================================================== */
export default function Brochure () {
  return (
    <div className="brochure">
      <div className="brochure-left">
        <div className="brochure-left-left">
          <div className="wrapper">
            <div className="eyebrow">Investment Outlook</div>
            <h2>Come Together</h2>
            <p>
              If there were ever a market environment that called for unbiased
              views and the ability to pivot, this would be it. Allspring&apos;s
              commitment to being purposefully divergent allows us to maintain a
              long-term perspective while looking for shorter- term tactical
              opportunities.
            </p>
            <a
              href="/assets/public/pdf/insights/investing/2023-investment-outlook-come-together.pdf"
              className="btn btn-primary brochure-text-button"
              role="button"
              tabIndex={0}
              target="_blank"
              aria-label="Read now about how macro matters"
            >
              DOWNLOAD
            </a>
          </div>
        </div>
        <div className="brochure-left-right">
          <div className="wrapper">
            <img src="/globalassets/images/campaigns/2023-outlook/brochure.jpg?v=011923." />
          </div>
        </div>
      </div>
      <div className="brochure-right">
        <div className="wrap">
          <h4>What&apos;s inside...</h4>
          <div className="brochure-links">
            <p>
              Fees, fees, fees—how does active investing actually help save in
              the long run?
              <a href="#equities">
                Read more
                <span className="brochure-links-arrow"></span>
              </a>
            </p>
            <p>
              Can income really be generated without adding risk?
              <a href="#fixed-income">
                Read more
                <span className="brochure-links-arrow"></span>
              </a>
            </p>
            <p>
              How can we refine portfolios when asset classes aren&apos;t
              behaving quite like they did before?
              <a href="#multi-asset">
                Read more
                <span className="brochure-links-arrow"></span>
              </a>
            </p>
            <p>
              Ignore at your own risk! What challenges and opportunities does
              climate change present for investors?
              <a href="#sustainable-investing">
                Read more
                <span className="brochure-links-arrow"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
/* ==================================================  end Component  ================================================== */
