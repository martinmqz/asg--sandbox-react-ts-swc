/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import React from 'react'
import fixedIncomeChartData from '../../../../data/fixedincome-chart-data'
import LineChart from '../../../Charts/LineChart/LineChart'
import renderFundCard from '../../helpers/render-fund-card'
import renderRightrailBackgrounds from '../../helpers/render-righrail-backgrounds'
import Brochuredownload from '../Brochuredownload'

interface Props {
  data: any;
  isUSA: boolean;
}
/* ================================================== start Component ================================================== */
export default function FixedIncomeContent (props: Props) {
  const usaTabData = props.data.usa.fixedIncome
  const intlTabData = props.data.international.fixedIncome
  const isUSA = props.isUSA
  const fixedIncomeData = isUSA ? usaTabData : intlTabData

  return (
    <>
      {/* <!--Tab-content heading--> */}
      <div className="box-heading">
        <div className="wrap">
          <h2 id="fixed-income" className="stickytabs-anchor">
            There IS an Alternative
          </h2>
          <div className="foot">Fixed Income Road Map–2023</div>
        </div>
      </div>

      {/* <!--Authors--> */}
      <div className="box-authors">
        <div className="wrap">
          <div className="eyebrow">Author</div>
          <div className="authors">
            <div className="author">
              <p>
                <strong>George Bory, CFA</strong>
                <br /> Chief Investment Strategist, Fixed Income
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Topic content sections--> */}
      <div className="box-topic-1">
        <div className="wrap">
          <p>
            <strong className="strong">For much of the past 15 years,</strong>{' '}
            the Fed maintained a zero-interest-rate policy. Other global central
            banks took rates deep into negative territory. This period of
            ultra-low rates across global fixed income markets was a game
            changer for cash investors and for those looking to preserve
            principal and earn income above the rate of inflation. With few
            options to generate income and a meaningful return, many investors
            felt the pressure of TINA (“There Is No Alternative” to adding risk)
            and shifted allocations from traditional publicly traded fixed
            income markets into equities and private markets.
          </p>
          <p>
            Toward the end of this period, ultra-loose monetary policy collided
            with two massive global supply-side shocks within a two-year span:
            COVID-19 and war in Eastern Europe. This ignited an inflationary
            surge not seen in nearly half a century. To realign monetary policy
            with the new macroeconomic landscape, the Fed raised rates faster
            and higher in 2022 than at any other time in history. Byproducts of
            this record-breaking policy shift were an increase in yields at the
            front end of the yield curve and a sharp repricing of much of the
            global bond market. Today, yields are close to their highest levels
            in 15 years.
          </p>
        </div>
      </div>
      <div className="box-topic-2">
        <div className="wrap">
          <p>
            The landscape has changed yet again. After 15 years in the
            wilderness, meet TIA (<strong>T</strong>here <strong>I</strong>s an{' '}
            <strong>A</strong>lternative). Looking forward, we believe publicly
            traded bonds can provide investors with three long-awaited benefits:
          </p>
        </div>
      </div>
      <div className="box-topic-3">
        <div className="wrap">
          <p>
            Below, we suggest ways that all three of these benefits can be
            extracted from rejuvenated bond markets.
          </p>
        </div>
      </div>
      <div className="box-topic-4">
        <div className="wrap">
          <h3 className="headnum n01">Income generation</h3>
          <p>
            Much of the bond market has followed the upward move in front-end
            yields, and wider spreads have pushed credit yields even higher. As
            a result, all-in yields across many fixed income sectors are close
            to their highest levels in over a decade and are well clear of the
            now-higher cash hurdle rate.
          </p>
        </div>
      </div>
      <div className="box-topic-5">
        <div className="wrap">
          <p>
            With average yields for U.S. Treasuries at about 4%,
            investment-grade corporates and tax-exempt municipals at roughly 6%,
            and high yield bonds and leveraged loans at 8% to 10%, we believe
            fixed income investors should be compensated for both inflation and
            credit risks this year and beyond.
          </p>
          <p>
            Core inflation (as measured by the Consumer Price Index [CPI]
            excluding food and energy) recently peaked at 6.25%. The Fed has
            stated it intends to drive this measure down toward 2.00% over the
            next two years. To do so, it will likely need to raise rates above
            current inflation and maintain that rate until inflation falls close
            to target. Since both the inflation rate and the federal funds rate
            are moving targets, we expect them to cross at around 5% sometime
            during the first half of 2023. If and when this occurs, the Fed
            would be viewed as “ahead of the curve” and would likely become more
            deliberate and, importantly, patient with monetary policy changes.
            Indeed, Fed Chair Powell suggested as much during a recent Brookings
            Institute speech (30-Nov-22).
          </p>
        </div>
      </div>
      <div className="box-topic-6">
        <div className="wrap">
          <h3>Taming inflation</h3>
          <p>
            To protect purchasing power, returns must beat inflation. Inflation
            is a curious beast, resulting from the interplay between supply and
            demand with many factors affecting both sides of the equation. The
            cost of debt is a dominant factor because borrowing costs directly
            influence economic behavior. Tighter policy has begun to reduce
            inflationary pressures but has yet to fully tame inflation. Over
            time, however, tighter policy should dampen demand and shake out
            weak borrowers.
          </p>
        </div>
      </div>
      <div className="box-topic-6-2">
        <div className="wrap">
          <p>
            The supply side of the economy suffered a sequence of meaningful
            shocks in 2020 and early in 2022. Recent data suggest supply chains
            are slowly realigning but are still far from pre-COVID-19
            conditions. Frictional costs will likely remain high, and supply
            constraints should persist. We expect further improvement this year,
            but there are looming threats that suggest improvements will be slow
            and hard fought. These include tight labor markets, volatile energy
            supplies, global drought conditions, and China&apos;s seemingly
            perennial zero-COVID-19 policy. Despite these risks, supply-side
            improvements should help reduce inflationary pressures.
          </p>
        </div>
      </div>
      <div className="box-topic-7">
        <div className="wrap">
          <p>
            Against a backdrop of tight monetary policy and tangled supply
            chains, it is no surprise that global growth continues to slow. Some
            countries are worse off than others, especially the U.K. and
            countries in the eurozone. Their proximity to the war in Ukraine and
            their continued adjustment away from Russian energy loom over their
            outlooks. Slowdowns in areas like Australia and China may be mild
            and short-lived, especially since China&apos;s slowdown is
            self-inflicted from its zero-COVID-19 policy. U.S. consumption has
            shown resilience, but manufacturing is still struggling. Consumer
            preferences are quickly shifting toward lower-priced items, and
            rate-driven demand is well past its peak. These trends are likely to
            persist deep into 2023 as economies groan under the weight of
            tighter monetary policy and slide toward recession. However,
            continued growth challenges will likely aid the Fed&apos;s plight to
            tame inflation as weaker demand eases price pressures.
          </p>
          <p>
            In sum, tight monetary policy, slowly improving supply chains, and
            sluggish demand should help constrain inflation pressures and
            preserve the purchasing power of income generated from bond funds
            going forward.
          </p>
        </div>
      </div>
      <div className="box-topic-8">
        <div className="wrap">
          <h3 className="headnum n02">Building a buffer</h3>
          <p>
            In addition to building a generous income stream, current yield
            levels offer a larger buffer against volatility than offered in the
            recent past. For example, in late 2021, the U.S. Treasury 2-year
            note yielded about 0.50%. From this level, yields could rise only 25
            bps (bps; 100 bps equal 1.00%) before an investor would generate a
            mark-to-market loss over a one-year holding period. However, in
            December 2022, the same note yielded about 4.25%, which implies a
            breakeven buffer of 225 bps. In other words, the U.S. Treasury
            2-year note would need to rise to 6.50% for an investor to generate
            a negative mark-to-market return over a one-year holding period.
            While such a move is certainly possible—and to be fair, a move of
            that magnitude already happened in 2022—the economic conditions are
            much different today from a year ago. With the Fed deep into a
            tightening cycle, growth decelerating, and inflation showing signs
            of cooling, it seems unlikely that this much cushion would be
            necessary to cover the risk. For bond investors, this presents an
            attractive opportunity to capture positive real yield over time.
          </p>
        </div>
      </div>
      <div className="box-topic-heading-1">
        <div className="wrap">
          <h2 className="quote-contentTitle">
            With bonds more attractively priced and yields more appropriately
            aligned with the current economic environment,{' '}
            <span>bonds are better positioned to offset cyclical risks.</span>
          </h2>
        </div>
      </div>
      <div className="box-topic-9">
        <div className="wrap">
          <h3 className="headnum n03">Benefits of diversification</h3>
          <p>
            All financial assets were negatively affected by the surge in
            inflation caused by COVID-19, the war in Ukraine, and the subsequent
            increase in yields. The math tells us that future cash flows are
            worth less as discount rates increase. As such, it is no surprise
            that bonds—especially long-duration bonds—proved an inadequate hedge
            against other long-duration assets such as equities in 2022 as
            inflation surged and the Fed increased policy yields to combat
            inflation. However, with bonds more attractively priced and yields
            more appropriately aligned with the current economic environment,
            bonds are better positioned to offset cyclical risks. As a result,
            there is a good chance that bonds should once again provide an
            effective counterbalance to the more cyclical assets in
            investors&apos; broad portfolios.
          </p>
        </div>
      </div>
      <div className="box-topic-10">
        <div className="wrap">
          <p>
            <strong>One step beyond: Climate transition</strong>
            <br />
            Climate-transition investing is top of mind for many bond investors
            around the world. The need to balance both financial and climate
            objectives is critical to a successful strategy. Successful
            climate-transition investing for fixed income portfolios rests on
            the principles of building a globally diversified portfolio of
            credits with a clear climate focus whose investment performance is
            intended to beat the broad market.
          </p>
          <p>
            A robust investment process anchored in deep, fundamental research
            is paramount to identifying, correctly quantifying, and sizing
            climate risks and opportunities in a borrower&apos;s operating plan.
            Combining securities of targeted companies into a cohesive portfolio
            can dramatically reduce its carbon intensity against that of the
            broad market. Furthermore, targeted credit selection and systematic
            corporate engagement can help further decarbonize the portfolio on a
            go-forward basis.
          </p>
          <p>
            Security selection should be the cornerstone of any
            climate-transition strategy. Rigorous analysis is necessary to
            quantify a borrower&apos;s carbon intensity and its path toward
            carbon reduction. Forward-looking insights help establish an
            informational edge over what is readily available in widely followed
            databases. It is also critically important to wed financial
            objectives with climate objectives. Identifying balance sheet
            strength, durable cash flow generation, and managerial integrity is
            fundamental to an investment process well equipped to deliver
            high-conviction recommendations.
          </p>
        </div>
      </div>
      <div className="box-topic-10-2">
        <div className="wrap">
          <p>
            <strong>Fixed income road map—2023</strong>
            <br />
            After some serious heavy lifting in 2022, central banks are poised
            to slow their pace of tightening in 2023. While this is good news
            for bond investors, it is still a far cry from the all-clear signal.
            The balance of risks has shifted more toward growth and away from
            inflation, but both will still be challenges going forward. However,
            with the Fed poised to move at a slower pace, markets should be less
            volatile and investors should be able to recalibrate portfolios in
            response to economic shifts in an orderly fashion. More predictable
            policy changes combined with scheduled cash flows should support
            steady returns in bond portfolios. This is good news for bond
            investors.
          </p>
          <p>
            Last year, we set out a five-step process for bond investors to
            consider. Below is an updated version of our views.
          </p>
        </div>
      </div>
      <div className="box-topic-11">
        <div className="wrap">
          <h3>TINA, meet TIA</h3>
          <p>
            After 15 years of TINA, TIA (There Is an Alternative) has finally
            arrived. A dramatically repriced publicly traded bond market—which
            offers higher yields, more attractive risk premiums, and better
            underwriting standards—should work to the benefit of fixed income
            investors over the coming months and years. At the very least, the
            additional income generated from bonds should compensate investors
            for inflation and credit risks, provide a generous buffer against
            future volatility, and offer diversification against cyclical
            economic risks.
          </p>
        </div>
      </div>

      {/* <!--Charts--> */}
      <div className="box-chart-1">
        <div className="chart-title">
          <div className="wrap">
            TREASURY BILL (T-BILL) YIELDS SURGED HIGHER IN 2022
          </div>
        </div>
        <div className="chart-container">
          <LineChart
            data={fixedIncomeChartData}
            yAxisTitle="Yield (%)"
            seriesName="% Yield"
          />
        </div>
        <div className="chart-disclosure">
          <div className="wrap">
            Source: Bloomberg, as of 05-Dec-22; U.S. 3-month T-bill (USGG3M
            Index)
          </div>
        </div>
      </div>
      <div className="box-chart-2">
        <div className="wrap">
          <div className="chart-container">
            <img src="/globalassets/images/campaigns/2023-outlook/fixedincome_chart-2.png?v=011923." />
          </div>
        </div>
      </div>
      <div className="box-chart-3">
        <div className="wrap">
          <div className="chart-title">
            HIGHER YIELDS GENERATE HIGHER INCOME
          </div>
          <div className="chart-container">
            <img src="/globalassets/images/campaigns/2023-outlook/fixedincome_chart-3.png?v=011923." />
          </div>
          <div className="chart-disclosure">
            Sources: Bloomberg and ICE BofA, as of 5-Dec-22. Yield to worst for
            each index less the U.S. Treasury 3-month T-bill (USGG3M Index)
            yield. Treasury = Bloomberg U.S. Treasury Index (LUATTRUU Index),
            short-term gov/corp = Bloomberg 1-3 Year Gov/Credit Index (LGC3TRUU
            Index), U.S. aggregate = Bloomberg U.S. Aggregate Bond Index
            (LUBSTRUU Index), IG corporate = Bloomberg U.S. Corporate Bond Index
            (LUACTRUU Index), municipal = Bloomberg Municipal Index (LMBITR
            Index), 1-3 Year BB = ICE BofA 1-3 Year BB Index (J1A1 Index), high
            yield = Bloomberg U.S. Corporate High Yield Index (LF98TRUU Index).
            <br />
            <br />
            *Pre-tax municipal yield adjusted for 37% federal tax bracket and
            3.7% Medicare tax.
          </div>
        </div>
      </div>
      <div className="box-chart-4">
        <div className="wrap">
          <div className="chart-title">
            REAL CASH YIELDS AND CPI SHOULD CONVERGE IN THE FIRST HALF OF 2023
          </div>
          <div className="chart-container">
            <img src="/globalassets/images/campaigns/2023-outlook/fixedincome_chart-4.png?v=011923." />
          </div>
          <div className="chart-disclosure">
            Sources: Allspring Global Investments and Bloomberg, as of 5-Dec-22;
            U.S. Treasury 3-month T-bill (USGG3M Index), CPIx (CPI XYOY Index)
          </div>
        </div>
      </div>
      <div className="box-chart-5">
        <div className="wrap">
          <div className="chart-title">
            LOWER AGGREGATE DEMAND SHOULD HELP TAME INFLATION
          </div>
          <div className="sub-title">GDP GROWTH AND INFLATION EXPECTATIONS</div>
          <div className="chart-container">
            <img src="/globalassets/images/campaigns/2023-outlook/fixedincome_chart-5.png?v=011923." />
          </div>
          <div className="chart-disclosure">
            Sources: Allspring Global Investments and Bloomberg, as of
            05-Dec-22; inflation = U.S. GDP Personal Consumption Price Index
            (GDPCPRIY Index), GDP = U.S. Real GDP QoQ % SAAR (GHGDUS Index)
            <br />
            *Consensus forecast
          </div>
        </div>
      </div>
      <div className="box-chart-6">
        <div className="wrap">
          <div className="chart-title">
            A FIVE-STEP PROCESS FOR BOND INVESTORS
          </div>
          <div className="chart-container">
            <img
              src="/globalassets/images/campaigns/2023-outlook/fixedincome_chart-6.png?v=011923."
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <!--Cards--> */}
      <div className="box-card-1">
        <div className="wrap">{renderFundCard(fixedIncomeData, 1)}</div>
      </div>
      <div className="box-card-2">
        <div className="wrap">{renderFundCard(fixedIncomeData, 2)}</div>
      </div>
      <div className="box-card-3">
        <div className="wrap">{renderFundCard(fixedIncomeData, 3)}</div>
      </div>
      <div className="box-card-4">
        <div className="wrap">{renderFundCard(fixedIncomeData, 4)}</div>
      </div>

      {/* <!--Brochure download--> */}
      <div className="box-download">
        <div className="wrap">
          <Brochuredownload />
        </div>
      </div>

      {/* <!--Background images for right-rail--> */}
      {renderRightrailBackgrounds('discmachine.376x376')}
      <div className="box-bgimg2"></div>
    </>
  )
}
/* ==================================================  end Component  ================================================== */
