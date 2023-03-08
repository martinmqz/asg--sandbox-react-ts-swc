/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import React from 'react'
import equitiesChartData from '../../../../data/equities-chart-data'
import MultiLineChart from '../../../Charts/MultiLineChart'
import renderFundCard from '../../helpers/render-fund-card'
import renderRightrailBackgrounds from '../../helpers/render-righrail-backgrounds'
import Brochuredownload from '../Brochuredownload'

interface Props {
  data: any;
  isUSA: boolean;
}

/* ================================================== start Component ================================================== */
export default function EquityContent (props: Props) {
  const usaTabData = props.data.usa.equities
  const intlTabData = props.data.international.equities
  const isUSA = props.isUSA
  const equitiesData = isUSA ? usaTabData : intlTabData

  return (
    <>
      {/* <!--Tab-content heading--> */}
      <div className="box-heading">
        <div className="wrap">
          <h2 id="equities" className="stickytabs-anchor">
            Equity Market Risks and Opportunities:
          </h2>
          <div className="foot">Four Independent Views</div>
        </div>
      </div>

      {/* <!--Authors--> */}
      <div className="box-authors">
        <div className="wrap">
          <div className="eyebrow">Authors</div>
          <div className="authors">
            <div className="author">
              <p>
                <strong>Bryant VanCronkhite, CFA</strong> Managing Director,
                Senior Portfolio Manager, and Co-Team Leader, Special Global
                Equity
              </p>
            </div>
            <div className="author">
              <p>
                <strong>Michael Smith, CFA</strong>
                <br /> Managing Director and Senior Portfolio Manager, Discovery
                Growth Equity
              </p>
            </div>
            <div className="author">
              <p>
                <strong>Alison Shimada</strong>
                <br /> Senior Portfolio Manager and Head, Total Emerging Markets
                Equity
              </p>
            </div>
            <div className="author">
              <p>
                <strong>Peter Weidner</strong>
                <br /> Portfolio Manager and Head, Systematic Edge Equity
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Topic content sections--> */}
      <div className="box-topic-1">
        <div className="wrap">
          <div className="eyebrow">Value Equities</div>
          <h3 className="question">
            What is the biggest risk that equity investors face today?
          </h3>
          <p>
            <strong>Bryant VanCronkhite:</strong> In my view, the most
            underappreciated development for equity markets today is the
            paradigm shift that has taken place in monetary policy following the
            pandemic. The Federal Reserve (Fed) has a dual mandate of supporting
            price stability and full employment. Other central banks have
            similar competing objectives. The fundamental challenge today is
            that pursuing both goals will require increasingly different policy
            prescriptions going forward. Something will have to give, and I
            think this fact is still dawning on markets.
          </p>
          <p>
            What changed? In the decades leading up to the pandemic,
            inflationary pressures created by massive liquidity injections and
            ultra-low interest rates were offset by deflationary megatrends,
            including the offshoring of production to low-cost centers,
            productivity improvements from technology and automation, and
            relatively cheap and flexible energy supplies. Today, some of the
            deflationary trends related to globalization have been reversed by
            ongoing supply chain disruptions, reduced exploration and
            development of traditional energy supplies, and emerging
            geopolitical tensions, and it looks like these changes may be long
            lasting. Markets are now coming to terms with structurally higher
            prices and a growing recognition that central banks may be unwilling
            or unable to step in and spur growth as they had in the past.
            Everyone is talking about this now, but I think few have fully
            comprehended the end game.
          </p>
        </div>
      </div>
      <div className="box-topic-2">
        <div className="wrap">
          <div className="eyebrow">Growth Equities</div>
          <h3 className="question">
            What happened in U.S. growth equities in 2022, and what concerns are
            top of mind for investors in 2023?
          </h3>
          <p>
            <strong>Michael Smith:</strong> It&apos;s no secret that U.S. growth
            stocks had a dismal year last year, underperforming value stocks and
            broad equity markets. A main contributor to this outcome was sharply
            rising interest rates throughout the year. The effect of higher
            rates on growth stocks has been outsized because a greater
            proportion of their value is tied to distant earnings that are now
            subject to significantly higher discount rates. This has brought
            growth valuations down considerably. However, growth company
            earnings estimates have shown impressive resiliency and, in some
            cases, have even <i>risen</i> over the course of the year. This
            suggests to us that multiple compression has been responsible for
            most of the growth equity declines in 2022. Against this backdrop,
            the most common concern investors have looking into 2023 is whether
            the coast is clear to reallocate to growth equities or whether fears
            of a recession should keep investors on the sidelines for now.
          </p>
        </div>
      </div>
      <div className="box-topic-3">
        <div className="wrap">
          <div className="eyebrow">Emerging Market Equities</div>
          <h3 className="question">
            What risks are top of mind for investors in emerging market equities
            today?
          </h3>
          <p>
            <strong>Alison Shimada:</strong> Two headline risks preoccupied
            investors for much of 2022. One of these was the conflict in
            Ukraine. It&apos;s not clear yet what the end game looks like, but
            the war has upset global markets for agricultural and energy
            commodities and is shifting longstanding trade and political
            alignments. Another concern was China, which always looms large on
            investors&apos; minds. We are encouraged by China&apos;s recent
            policies to support its property sector, its pivot away from
            zero-COVID-19 policies, and the improved potential for reopening.
            However, the lockdowns have created further impetus for corporate
            managers to rethink supply chains. Moreover, President Xi has
            solidified political control and challenged regional competitors
            over its Taiwan reunification and “Belt and Road” ambitions. All of
            these geopolitical risks have weighed on global growth.
          </p>
        </div>
      </div>
      <div className="box-topic-3-2">
        <div className="wrap">
          <p>
            In fact, the International Monetary Fund downgraded its 2023 global
            growth forecast from 3.8% to 2.7% in October. Emerging market growth
            expectations have been downgraded from 4.7% to 3.7%, but developed
            market growth expectations have been hit harder, falling from 2.6%
            to 1.1%. Emerging markets have been more resilient in sustaining
            growth—historically, a rising growth differential between emerging
            and developed markets has led to emerging market outperformance.
          </p>
          <p>
            Emerging market currencies have held up better than major developed
            market currencies against a strengthening U.S. dollar. Some
            countries were proactive in managing monetary policy against rising
            inflation expectations back in 2021, which is paying off now. The
            Brazilian real, Mexican peso, and Peruvian sol appreciated against
            the U.S. dollar in 2022, and certain Latin American countries are
            well positioned to capture a greater share of global agricultural
            trade and investment from realignment of supply chains. So, overall,
            emerging markets present a mixed bag of risks and opportunities.
          </p>
        </div>
      </div>
      <div className="box-topic-4">
        <div className="wrap">
          <div className="eyebrow">Systematic Equities</div>
          <h3 className="question">
            Given equity market turmoil, how can Systematic Edge help investors
            face these challenges?
          </h3>
          <p>
            <strong>Peter Weidner:</strong> The sharp and simultaneous drawdown
            in equities and fixed income in 2022 led to significant losses
            across investors&apos; broad portfolios—all at a time when inflation
            has been climbing. There are two elements at play: seeking return in
            the face of market headwinds and delivering income to meet investor
            needs. Fortunately, technology has made targeting these attributes
            simpler, cheaper, and more accessible to nearly any investor.
            We&apos;ve done a lot of work in this area.
          </p>
        </div>
      </div>
      <div className="box-topic-4-2">
        <div className="wrap">
          <p>
            When equities and bonds both sell off, it can feel like there&apos;s
            nowhere to hide. But liquid alternatives strategies can help
            generate return with less exposure to these asset classes. Our
            approach is to build portfolios that are designed to harness some of
            these dynamics to the benefit of our clients. For instance, high
            beta, or highly market-sensitive assets, are often darlings in bull
            markets. Their riskiness can be beneficial when all assets are
            rising together. However, they come with significant volatility.
            This may not be an earth-shattering observation, but consider that
            high volatility reduces one of the most powerful effects in
            investing: compounding. The chart below shows average and compound
            returns of market beta quintiles of the MSCI World Index since
            January 1997. Over the long run, more volatile assets have generated
            similar average returns but much lower compound returns. The
            compound return of the highest-beta stocks is up to 40% lower than
            peers!
          </p>
        </div>
      </div>

      {/* <!--Charts--> */}
      <div className="box-chart-1">
        <div className="chart-title">
          <div className="wrap">MULTIPLE COMPRESSION WAS THE STORY OF 2022</div>
        </div>
        <div className="chart-container">
          <MultiLineChart
            data1={equitiesChartData.russel3kGrowthIndexNTMEPS}
            data2={equitiesChartData.russel3kGrowthIndexNTMPE}
            dates={equitiesChartData.dates}
            series1Name="Russell 3000 Growth Index &mdash; NTM EPS"
            series2Name="Russell 3000 Growth Index &mdash; NTM P/E"
            yAxisTitle="Percent"
          />
        </div>
        <div className="chart-disclosure">
          <div className="wrap">
            Sources: Allspring and FactSet. NTM stands for next 12 months.
          </div>
        </div>
      </div>
      <div className="box-chart-2">
        <div className="wrap">
          <div className="chart-title">
            HIGH BETA TENDS TO UNDERPERFORM OVER TIME
          </div>
          <div className="chart-subtitle">
            VOLATILITY QUINTILES WITHIN MSCI WORLD | JAN 1997-SEP 2022
          </div>
          <div className="chart-container">
            <img
              src="/globalassets/images/campaigns/2023-outlook/equities_chart1.png?v=011923."
              alt=""
            />
          </div>
          <div className="chart-disclosure">Source: Bloomberg</div>
        </div>
      </div>

      {/* <!--Cards--> */}
      <div className="box-card-1">
        <div className="wrap">{renderFundCard(equitiesData, 1)}</div>
      </div>
      <div className="box-card-2">
        <div className="wrap">{renderFundCard(equitiesData, 2)}</div>
      </div>
      <div className="box-card-3">
        <div className="wrap">{renderFundCard(equitiesData, 3)}</div>
      </div>
      <div className="box-card-4">
        <div className="wrap">{renderFundCard(equitiesData, 4)}</div>
      </div>

      {/* <!--Brochure download--> */}
      <div className="box-download">
        <div className="wrap">
          <Brochuredownload />
        </div>
      </div>

      {/* <!--Background image 1 for right-rail--> */}
      {renderRightrailBackgrounds('sphere.376x376')}
    </>
  )
}
/* ==================================================  end Component  ================================================== */
