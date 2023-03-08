/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import React from 'react'
import multiassetChartData from '../../../../data/multiasset-chart-data'
import ColumnComparisonChart from '../../../Charts/ColumnComparisonChart/ColumnComparisonChart'
import renderFundCard from '../../helpers/render-fund-card'
import renderRightrailBackgrounds from '../../helpers/render-righrail-backgrounds'
import Brochuredownload from '../Brochuredownload'

interface Props {
  data: any;
  isUSA: boolean;
}
/* ================================================== start Component ================================================== */
export default function MultiAssetContent (props: Props) {
  const usaTabData = props.data.usa.multiAsset
  const intlTabData = props.data.international.multiAsset
  const isUSA = props.isUSA
  const multiAssetData = isUSA ? usaTabData : intlTabData

  return (
    <>
      {/* <!--Tab-content heading--> */}
      <div className="box-heading">
        <div className="wrap">
          <h2 id="multi-asset" className="stickytabs-anchor">
            Purposeful Refinement
          </h2>
          <div className="foot">
            Positioning Multi-Asset Portfolios for Tomorrow
          </div>
        </div>
      </div>

      {/* <!--Authors--> */}
      <div className="box-authors">
        <div className="wrap">
          <div className="eyebrow">Authors</div>
          <div className="authors">
            <div className="author">
              <p>
                <strong>Matthias Scheiber Ph.D., CFA</strong>
                <br /> Head, Systematic Multi-Asset, Systematic Edge
              </p>
            </div>
            <div className="author">
              <p>
                <strong>Brian Jacobsen Ph.D., CFA, CFP®, CAIA</strong>
                <br /> Senior Investment Strategist, Systematic Edge Multi-Asset
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Topic content sections--> */}
      <div className="box-topic-1">
        <div className="wrap">
          <p>
            <strong>
              In the depths of the COVID-19 crisis in early 2022,{' '}
            </strong>
            the market expected a gradual recovery back to the long-term
            averages for inflation and growth. It didn&apos;t work out that way.
            COVID-19 didn&apos;t cause a typical demand-driven slowdown that
            could be corrected by the traditional policy response of easier
            monetary policy plus loose fiscal policy. Instead, the pandemic
            triggered a wave of demand crashing against a wall of supply-chain
            disruptions. By late 2021, higher prices caused central banks to
            tighten monetary policy. At the same time, governments were
            confronted with the effects of higher rates.
          </p>
          <p>
            With unusual policies and economic consequences, major asset classes
            didn&apos;t behave in their traditional fashion during most of 2022.
            This led to some disappointing results for multi- asset investors.
            But that doesn&apos;t mean traditional approaches are doomed to
            disappoint in 2023.
          </p>
          <p>
            We believe the traditional approaches just need{' '}
            <i>purposeful refinements</i>—adjustments based on our firm&apos;s
            assessment of how assets may perform and correlate differently in a
            potentially changed environment.
          </p>
        </div>
      </div>
      <div className="box-topic-1-2">
        <div className="wrap">
          <p>
            <strong>Did any traditional approach work for us in 2022?</strong>
          </p>
          <p>
            Yes—downside risk management worked. Our risk management framework
            considers the time horizon of the protection needed, the reactivity
            of the downside protection, and the protection&apos;s costs. If
            wrongly designed, downside protection can be very costly and may not
            provide enough protection.
          </p>
          <p>
            From 2019 through 2022, there were two significant equity
            drawdowns—for very different reasons and with very different
            drawdown profiles. These events confirmed our prior research that no
            single protection strategy works all the time and that a combination
            of carefully assembled strategies may work better. For example, our
            futures-based downside strategies worked very well in 2020 because
            the drawdown was quick and the recovery was aggressive. The drawdown
            of 2022 was very different: It was more like a grinding drawdown
            without a sharp downside move until late summer.
          </p>
          <p>
            Each different type of drawdown calls for a different solution.
            Given that it&apos;s hard to predict what a future drawdown will
            look like, it makes sense to us to diversify: Use a mixture of
            explicit downside protection, such as options, or more implicit
            protection from alternative strategies, like trend-following
            strategies, which performed very well in 2022.
          </p>
        </div>
      </div>
      <div className="box-topic-2">
        <div className="wrap">
          <h3 className="headnum n01">
            A messy macro mosaic isn&apos;t all bad.
          </h3>
          <p>
            We examine the macro drivers of asset returns and risk through the
            lens of what we call a “macro mosaic.” This means we consider the
            interactions of the level, breadth, persistence, volatility, and
            uncertainty of growth, interest rates, and inflation. The macro
            story of 2022 was mostly about inflation. Inflation isn&apos;t a
            problem for traditional assets as long as it starts low, goes slow,
            and is supported by economic growth. That&apos;s what we saw in the
            first part of 2021. But then, inflation started to rise more
            meaningfully as growth struggled and became more volatile.
          </p>
          <p>
            In 2023, the macroeconomic picture might not improve much, but at
            least markets have had an opportunity to adjust to the uncertainty
            of rather somber growth and inflation outlooks. Late in 2021, our
            analysis flagged a possible recession in early 2022, and it also
            indicated an unusually high amount of inflation uncertainty. Now, we
            think things have flipped: Inflation is likely to slow materially,
            and there is unusually high growth uncertainty. Rates may have
            already reset—if not overshot—to the upside. Considering the equity
            market drawdown in 2022, we&apos;re also constructive on the outlook
            for the broad equity market.
          </p>
        </div>
      </div>
      <div className="box-topic-3">
        <div className="wrap">
          <h3 className="headnum n02">
            Factors flipped in favor of fundamentals.
          </h3>
          <p>
            Factors are the features of assets that matter. There are many
            factors, but the most basic ones include momentum (how prices moved
            over the past year), carry (things like dividend yield and interest
            income), and value (prices relative to long-term fundamentals).
            Central bank influence over the past 15 years caused higher
            correlations and lower volatilities across assets, rewarding
            momentum more than value. In 2022, though, carry and value were
            resurrected.
          </p>
        </div>
      </div>
      <div className="box-topic-4">
        <div className="wrap">
          <p>
            In the first half of 2022, momentum did relatively better than value
            or carry, but the market&apos;s worries about waning growth and
            persistently high inflation triggered a return to fundamentals,
            prompting investors to refocus on valuations and carry in the second
            half of the year. We believe investors&apos; preference for strong
            fundamentals at reasonable prices is unlikely to fade quickly.
          </p>
          <p>
            Diversifying across factors could potentially make a portfolio more
            resilient than simply diversifying across traditional asset classes.
            This is important because a better-diversified portfolio may allow
            investors to stay invested, avoiding the whipsaw risk of abandoning
            a long-term strategy at the bottom of the market and missing out on
            a market recovery. Considering the disappointing performance of
            traditional assets in 2022, a sharp recovery in 2023 can&apos;t be
            ruled out.
          </p>
        </div>
      </div>
      <div className="box-topic-5">
        <div className="wrap">
          <h3 className="headnum n03">
            We see an environment of abundant idiosyncratic opportunities.
          </h3>
          <p>
            In any market environment, there are winners and losers. However,
            when the broad market sells off, as in January‒October 2022, the
            “winners” might only be relative winners, meaning that they declined
            in value less than others did. So, focusing on finding
            relative-value opportunities, especially in a year like 2022, can
            potentially add value to investors&apos; portfolios. For example, we
            identified a number of companies in consumer staples—a relatively
            defensive sector without a lot of rate sensitivity—that delivered
            positive results compared with the broader market during 2022.
          </p>
          <p>
            Also, regional divergences were amplified in 2022, so preferring
            U.S. equities over international equities was helpful. We don&apos;t
            think these regional differences will go away, but the market may
            have already priced in the U.S.&apos;s brighter growth outlook
            compared with Europe&apos;s and the Federal Reserve&apos;s
            (Fed&apos;s) tighter monetary policy compared with the Bank of
            Japan&apos;s, which is still doing quantitative easing.
          </p>
        </div>
      </div>
      <div className="box-topic-6">
        <div className="wrap">
          <p>
            There are two specific areas we believe may offer tactical
            opportunities in 2023. The first is currency related. Over the past
            10 years, half of emerging market underperformance relative to U.S.
            equities can be explained by currency moves as the dollar
            strengthened. We think this may change going forward, with currency
            moves instead becoming neutral to additive to emerging market
            performance.
          </p>
          <p>
            The second potential opportunity we see for 2023 is adding duration
            back into portfolios. We think the Fed&apos;s rate hikes will likely
            end, the inflation rate will likely fall, and that growth is highly
            uncertain. To us, this combination seems like a favorable
            environment for longer-term bonds. However, tactical ideas can
            change quickly. As the data change—including market prices—so will
            our views.
          </p>
        </div>
      </div>
      <div className="box-topic-7">
        <div className="wrap">
          <h3 className="headnum n04">
            Downside protection is a strategy for all seasons.
          </h3>
          <p>
            When markets sell off, it can be hard to find places to hide. When
            inflation risk is the markets&apos; dominant risk, stocks and bonds
            can sell off together, as we saw in the first three quarters of
            2022. Those “nowhere-to-hide markets” call for patience, downside
            risk management, or both. But nowhere-to-hide markets can give rise
            to “everyone-wins markets,” where stocks and bonds both do well once
            inflation risk subsides.
          </p>
          <p>
            During the past few decades, investors got accustomed to “risk-on”
            and “risk-off” markets, where growth risks were dominant and bonds
            rallied while equities sold off, or vice versa. These four different
            regimes—nowhere to hide, everyone wins, risk on, and risk off—are
            linked to the macroeconomic context and to central banks&apos;
            reactions to the macroeconomic outlook. When inflation was low and
            stable, it was easy for central banks to intervene by cutting rates
            or expanding their balance sheets to deal with any prospective
            growth slowdown. Now, with inflation at the forefront, central banks
            are more concerned with inflationary risks than with growth risks.
          </p>
          <p>
            Whether central banks&apos; retreat from direct financial market
            intervention via shrinking their balance sheets is a structural
            (somewhat permanent) change remains to be seen. It&apos;s likely,
            though, that the banks will be more careful in coming back given
            their recent experience with high inflation. We think that different
            speeds of monetary adjustment should continue to create interesting
            relative-value opportunities for investors.
          </p>
          <p>
            We also believe that the absence of central bank interventions will
            likely mean that the famous “Fed put” (an implicit safety net
            provided through ample central bank liquidity) will be missing for a
            while. Structurally higher volatility is likely back, and it favors
            downside protection strategies. In our view, diversification is not
            dead despite its “heart attack” in 2022. However, adding more
            explicit protection strategies on top of diversification makes sense
            to us.
          </p>
        </div>
      </div>
      <div className="box-topic-8">
        <div className="wrap">
          <h3 className="headnum n05">
            Prudent liquidity management—overlooked by many investors—gives us
            the flexibility to be patient.
          </h3>
          <p>
            Many investors have largely ignored liquidity over the past several
            market cycles. When liquidity was abundant, they tended to seek
            higher returns and more diversification through illiquid assets. The
            smoother return streams were artificial because the assets&apos;
            prices weren&apos;t marked to market daily. But the smoothness and
            knowledge that the money was locked up led them to take a longer
            view of illiquid investment opportunities.
          </p>
        </div>
      </div>
      <div className="box-topic-heading-1">
        <div className="wrap">
          <h2 className="quote-contentTitle">
            Multi-asset liquidity management, we believe,{' '}
            <span>
              can potentially bridge the trade-off between safety of principal
              and achieving attractive returns
            </span>{' '}
            by addressing both strategic goals and short-term liquidity needs at
            the same time.
          </h2>
        </div>
      </div>
      <div className="box-topic-9">
        <div className="wrap">
          <p>
            There can be too much of a good thing, though. We believe some
            investors likely over-allocated to illiquid assets, which, by their
            nature, are illiquid. It&apos;s hard to meet liquidity needs with an
            illiquid asset.
          </p>
          <p>
            In contrast, it&apos;s our view that cash and short-duration fixed
            income strategies have value beyond just their yields. Their value
            includes meeting spending needs and the peace of mind that comes
            with having the flexibility to be patient in the midst of market
            volatility.
          </p>
          <p>
            Multi-asset liquidity management, we believe, can potentially bridge
            the trade-off between safety of principal and achieving attractive
            returns by addressing both strategic goals and short-term liquidity
            needs at the same time.
          </p>
          <p>
            <strong className="strong">
              Learn from the past—don&apos;t invest for the past.
            </strong>
          </p>
          <p>
            In 2022, we saw the aftermath of the traditional monetary and fiscal
            policy responses to an unconventional problem: COVID-19. Traditional
            diversification strategies were not up to the task of handling
            unusual economic consequences. That&apos;s why we think investors
            may want to purposefully refine their view of portfolio construction
            by holistically considering the potential risks and opportunities of
            these five key dimensions of multi-asset investment management.
          </p>
          <p>
            Even if investors weren&apos;t well positioned for the year that
            was, that doesn&apos;t mean there weren&apos;t lessons learned—or
            relearned—that can be applied for better years ahead.
          </p>
        </div>
      </div>

      {/* <!--Charts--> */}
      <div className="box-chart-1">
        <div className="wrap">
          <div className="chart-title">
            LOOKING AHEAD, WE HAVE A FIVE-DIMENSION APPROACH FOR POSITIONING
            MULTI-ASSET STRATEGIES
          </div>
          <div className="chart-container">
            <img
              src="/globalassets/images/campaigns/2023-outlook/charts_multiasset.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="box-chart-2">
        <div className="chart-title">
          <div className="wrap">FOR FACTORS, 2022 WAS A YEAR OF TWO PARTS</div>
        </div>
        <div className="chart-container">
          <ColumnComparisonChart
            // title="For factors, 2022 was a year of two parts"
            data1={multiassetChartData.firstHalf2022}
            data2={multiassetChartData.secondHalf2022}
            series1Name="First half of 2022"
            series2Name="Second half of 2022"
            yAxisTitle="Six-month return for each factor (%)"
          />
        </div>
        <div className="chart-disclosure">
          <div className="wrap">Sources: Allspring and Bloomberg</div>
        </div>
        <div className="chart-disclosure">
          <div className="wrap">
            The momentum, carry, and value factor returns are represented,
            respectively, by the returns of the Bloomberg U.S. PURE Momentum
            Portfolio, the Bloomberg U.S. PURE Dividend Yield Portfolio, and the
            Bloomberg U.S. PURE Value Portfolio from the Bloomberg U.S. Equity
            Model.
          </div>
        </div>
      </div>

      {/* <!--Cards--> */}
      <div className="box-card-1">
        <div className="wrap">{renderFundCard(multiAssetData, 1)}</div>
      </div>
      <div className="box-card-2">
        <div className="wrap">{renderFundCard(multiAssetData, 2)}</div>
      </div>

      {/* <!--Brochure download--> */}
      <div className="box-download">
        <div className="wrap">
          <Brochuredownload />
        </div>
      </div>

      {/* <!--Background image 1 for right-rail--> */}
      {renderRightrailBackgrounds('slide.376x376')}
      <div className="box-bgimg2"></div>
    </>
  )
}
/* ==================================================  end Component  ================================================== */
