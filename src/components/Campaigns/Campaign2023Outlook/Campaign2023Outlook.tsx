import React from 'react'
import Highcharts from 'highcharts'
import antiClickjack from '../../../helpers/anti-clickjack'
import VideoModule from './VideoModule'
import Navigation from './Navigation/Navigation'
import asgTheme from '../../Charts/themes/asg-theme'
import campaign2023OutlookData from '../../../data/campaign2023OutlookData'
import Brochure from './Brochure'
import Hero from './Hero'
import highchartReflow from '../../../utils/highchart-reflow'
import VideoTranscript from './VideoTranscript'
import Retirement from './Retirement'
import renderHeroSubtitle from '../helpers/render-hero-subtitle'

// Apply the theme
Highcharts.setOptions(asgTheme) // Highcharts.theme)

interface Props {
  isUSA: boolean;
}
/* ================================================== start Component ================================================== */
export default function Campaign2023Outlook (props: Props) {
  const data = campaign2023OutlookData

  antiClickjack()
  window.addEventListener('hashchange', () => {
    Highcharts.charts.forEach((chart) => {
      highchartReflow(chart)
    })
  })

  if (props.isUSA) {
    // Overwrite footer disclosures
    const template = window.document.getElementById(
      'disclosures-template'
    ) as HTMLTemplateElement
    const footers = window.document.getElementsByClassName('footer')
    if (template.content.textContent) {
      const wrapper = document.createElement('div')
      if (footers.length > 0) {
        wrapper.innerHTML = template.content.textContent
        footers[0].innerHTML = wrapper.outerHTML
      } else {
        wrapper.innerHTML = template.content.textContent
        window.document.body.append(wrapper)
      }
    }
  }

  return (
    <>
      <div className="hero-banner-block block">
        <Hero />
      </div>
      <div className="mobile-hero-subtitle-block block">
        {renderHeroSubtitle()}
      </div>
      <div className="video-block block">
        <VideoModule />
      </div>
      <div className="vidtranscript-block block">
        <VideoTranscript />
      </div>
      <div className="brochure-block block">
        <Brochure />
      </div>
      <div className="block">
        <div className="title-block">
          <div className="title">
            <h2>Investment playbook by asset classes</h2>
            <p>
              How will themes influence asset classes in 2023? In our four
              breakout pieces, we deliver views across fixed income, equities,
              multi-asset, and sustainable investing.
            </p>
          </div>
        </div>
      </div>
      <div className="navigation-block block">
        <Navigation data={data} isUSA={props.isUSA} />
      </div>
      <div className="retirement-block block">
        <Retirement />
      </div>
    </>
  )
}
/* ==================================================  end Component  ================================================== */
