/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react'
import MultiAssetContent from './MultiAssetContent'
import EquityContent from './EquityContent'
import FixedIncomeContent from './FixedIncomeContent'
import SustainableContent from './SustainableContent'

interface Props {
  data: any;
  isUSA: boolean;
}

export default function Navigation (props: Props) {
  return (
    <>
      <div className="navigation stickytabs">
        <div className="navigation-tabs block">
          <div id="stickytabs-navbar" role="tablist">
            <a href="#equities" role="tab" className="active">
              <span>Equities</span>
            </a>
            <a href="#fixed-income" role="tab">
              <span>Fixed Income</span>
            </a>
            <a href="#multi-asset" role="tab">
              <span>Multi-Asset</span>
            </a>
            <a href="#sustainable-investing" role="tab">
              <span>Sustainable Investing</span>
            </a>
          </div>
        </div>
        <div className="navigation-tabs-content">
          <div className="">
            <div id="equities-tab-content" className="stickytabs-pane active">
              <div className="tab-content">
                <EquityContent data={props.data} isUSA={props.isUSA} />
              </div>
            </div>
            <div id="fixedincome-tab-content" className="stickytabs-pane">
              <div className="tab-content">
                <FixedIncomeContent data={props.data} isUSA={props.isUSA} />
              </div>
            </div>
            <div id="multiasset-tab-content" className="stickytabs-pane">
              <div className="tab-content">
                <MultiAssetContent data={props.data} isUSA={props.isUSA} />
              </div>
            </div>
            <div id="sustainable-tab-content" className="stickytabs-pane">
              <div className="tab-content">
                <SustainableContent data={props.data} isUSA={props.isUSA} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {loadStikytabsScript()}
    </>
  )
}

function loadStikytabsScript () {
  const script = document.createElement('script')
  script.src = '/Static/js/3rd-party/asg-sticky-tabs.min.js'
  document.body.append(script)
}
