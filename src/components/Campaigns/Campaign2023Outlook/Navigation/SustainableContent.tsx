/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react'
import settings from '../../../../config/settings'
import sustainabilityChartData from '../../../../data/sustainability-chart-data'
import LineAnnotationsChart from '../../../Charts/LineAnnotationsChart/LineAnnotationsChart'
import renderFundCard from '../../helpers/render-fund-card'
import renderRightrailBackgrounds from '../../helpers/render-righrail-backgrounds'
import Brochuredownload from '../Brochuredownload'

interface Props {
  data: any;
  isUSA: boolean;
}

/* ================================================== start Component ================================================== */
export default function SustainableContent (props: Props) {
  const usaTabData = props.data.usa.sustainable
  const intlTabData = props.data.international.sustainable
  const isUSA = props.isUSA
  const sustainableData = isUSA ? usaTabData : intlTabData

  return (
    <>
      {/* <!--Tab-content heading--> */}
      <div className="box-heading">
        <div className="wrap">
          <h2 id="sustainable-investing" className="stickytabs-anchor">
            Questioning Consensus
          </h2>
          <div className="foot">The Future Is Now</div>
        </div>
      </div>
      {/* <!--Authors--> */}
      <div className="box-authors">
        <div className="wrap">
          <div className="eyebrow">Authors</div>
          <div className="authors">
            <div className="author">
              <p>
                <strong>H. Thomas Lyons</strong>
                <br /> Head, Climate Investment Research, Global Fixed Income
                Research
              </p>
            </div>
            <div className="author">
              <p>
                <strong>Nashat Moin</strong>
                <br /> Senior ESG Analyst, Sustainable Investments, Global Fixed
                Income Research
              </p>
            </div>
            <div className="author">
              <p>
                <strong>Jamie Newton, CFA</strong>
                <br /> Head, Global Fixed Income Research, and Deputy Head,
                Sustainability
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Topic content sections--> */}
      <div className="box-topic-1">
        <div className="wrap">
          <p>
            <strong className="strong">As we enter 2023, </strong>
            we believe the need to thoroughly evaluate climate change&apos;s
            market impacts has never been clearer. Physical repercussions are
            not a distant prospect. They are current, potentially dire risks
            whose market implications are just beginning to be thoroughly
            evaluated.
          </p>
          <p>Consider several events of the past three years:</p>
          <ul>
            <li>
              Droughts and floods have exacerbated the impacts of COVID-19 and
              Russia&apos;s war in Ukraine, stressing agricultural and energy
              markets globally.
            </li>
            <li>
              Following 22 years of nearly continuous drought, California
              farmers expect to fallow 500,000 water-deprived acres over the
              next four years.
            </li>
            <li>
              Northern Europe suffered a 9-billion-euro economic loss in 2022
              due to drought, on account of record-low water levels in the Rhine
              River and other major river corridors.
            </li>
          </ul>
          <p>
            Each of these events affected commodity and financial markets. Are
            they “one-offs”? Or do they mark the early stages of long-term
            secular shifts? Or both? We don&apos;t know, yet—and there&apos;s
            much to learn and consider. However, while the effects from COVID-19
            and the invasion of Ukraine will likely subside over time, we
            believe the consequences of warmer temperatures are likely to grow
            more pronounced—magnifying market cycles and creating wider ranges
            for commodity and security prices with more volatility.
          </p>
          <p>
            In our view, this challenging situation creates opportunities for
            strategic, purposeful investing with the goal of delivering
            financial benefits for investors while addressing changing risk
            dynamics. To capture these opportunities, we conduct rigorous
            fundamental analyses through a cross-asset-class lens to form clear,
            informed investment perspectives. Our approach requires a strong
            focus on intermediate and longer-term effects of a changing climate,
            including the influence on energy and food prices and differences
            across geographies.
          </p>
          <p>
            To illustrate, we share two contemporary examples: the effects of
            heat-driven drought in the Mississippi River and Rhine River basins.
          </p>
          <p>
            <strong className="strong">
              The Western U.S.&apos;s drought has spread all the way to the
              Mississippi River.
            </strong>
          </p>
          <p>
            The Mississippi River basin is by far the most important
            transportation corridor in the U.S. for crops, fertilizers, and
            energy commodities. The basin accounts for 92% of the country&apos;s
            agricultural exports and most of its livestock. Sixty percent of all
            grain exported from the U.S. is shipped on the Mississippi River
            through the Port of New Orleans and the Port of South Louisiana.
          </p>
          <p>
            It&apos;s therefore unsurprising that in October 2022, when drought
            drove the Mississippi River&apos;s water levels so low that barge
            traffic had to cease on portions of the river, markets reacted
            dramatically. As the first chart below shows, barge rates spiked to
            a multiple of normal levels in the fourth quarter of 2022. In terms
            of economic impact, the drought&apos;s effects on crop growth were
            even more consequential—the second chart below shows the huge drop
            in grain shipments that resulted.
          </p>
        </div>
      </div>
      <div className="box-topic-2">
        <div className="wrap">
          <p>
            These extreme conditions developed at an inopportune time: It was
            the peak of the U.S. harvest, when barges heading downriver normally
            are busy carrying about 60% of U.S. grain exports to the world.
            Further upstream, barges transport petrochemicals, fertilizers, and
            raw materials essential to U.S. industry and agriculture. If barge
            traffic slows for an extended period, negative economic consequences
            are tangible and global. Logistical disruptions like these are among
            the many types of precipitation-driven costs. Another one—reduced
            crop yield—is also costly.
          </p>
          <p>
            What&apos;s more, falling river levels allow salt water from the
            Gulf of Mexico to intrude inland, harming agriculture and cities
            that depend on Mississippi River flows for their water supply. All
            considered, hundreds of millions of dollars for infrastructure
            upgrades to manage these problems may need to be spent soon.
          </p>
        </div>
      </div>
      <div className="box-topic-3">
        <div className="wrap">
          <p>
            <strong className="strong">
              Europe&apos;s 2022 drought affected crops, energy production, and
              major arteries like the Rhine River.
            </strong>
          </p>
          <p>
            Europe experienced a very dry, hot summer in 2022 and its worst
            drought in 500 years. Wildfires ravaged parts of Western Europe in
            July, and droughts led to water scarcity, compromising agriculture,
            power production, and many other industries. The impacts of the war
            in Ukraine, a world recovering from the COVID-19 pandemic, and low
            rainfall drove strong inflationary pressure on food and energy
            prices in Europe and beyond.
          </p>
          <p>
            Crop yields in France, Romania, Spain, Portugal, and Italy suffered.
            In the Po River basin in Northern Italy, the rice harvest declined
            by 30%. Water rationing went into effect across Europe, from big
            cities like Paris to small villages in Southern Romania. In France,
            the drinking water for more than 100 towns had to be delivered by
            truck.
          </p>
        </div>
      </div>
      <div className="box-topic-4">
        <div className="wrap">
          <p>
            Flowing from the Swiss Alps to the North Sea, the Rhine River is a
            major route for transporting chemicals, grains, and coal. During
            recent droughts (including 2022&apos;s), low water levels reduced
            barge capacity to 30% to 40% of normal. Alternatives to river
            transportation involve roads and rail, which are more expensive and
            emit more carbon into the atmosphere.
          </p>
          <p>
            High temperatures combined with low water levels continue to affect
            various areas of Europe&apos;s economy. Power plants depend on cool
            river water, and in France, warmer river water reduced nuclear
            power-generation capacity during the summer months. Hydropower
            generation also has dropped: A leading electricity producer in
            Romania, Hidroelectrica, produced one-third less electricity in the
            first half of 2022, and in Spain, hydropower fell by 44% over the
            same period. As a result, energy prices have climbed for
            Europe&apos;s consumers and businesses.
          </p>
        </div>
      </div>
      <div className="box-topic-5">
        <div className="wrap">
          <p>
            <strong className="strong">
              Our research confirms that active assessment is needed now.
            </strong>
          </p>
          <p>
            We&apos;ve summarized below the key takeaways from our latest
            research on the agri-food value chain.
          </p>
          <p>
            <strong>
              Warmer temperatures increase volatility in weather conditions, not
              just drought.
            </strong>
          </p>
          <ul>
            <li>
              Extreme weather events in recent years made clear that high levels
              of precipitation, hurricanes, and related flooding are more
              frequently and severely disrupting markets in Europe and the U.S.
            </li>
          </ul>
          <p>
            <strong>
              Precipitation volatility, which leads to droughts and floods,
              affects agri-food production in two main ways.
            </strong>
          </p>
          <p></p>
          <ul>
            <li>
              Importantly and unsurprisingly, precipitation levels affect crop
              production. As the distribution of weather events becomes more
              dispersed and asymmetric, so will agricultural output. Further,
              supply deficits of grain will be more likely than surpluses. In
              addition to agricultural commodity cost inflation, fertilizer and
              transportation costs may rise during rainfall deficits, further
              pressuring costs across the supply chain.
            </li>
          </ul>
        </div>
      </div>
      <div className="box-topic-heading-1">
        <div className="wrap">
          <h2 className="quote-contentTitle">
            It&apos;s clear to us that the world is changing and physical
            consequences aren&apos;t confined to the distant future
            <span>—they&apos;re affecting us now.</span>
          </h2>
        </div>
      </div>
      <div className="box-topic-6">
        <div className="wrap">
          <p>
            <strong>
              Climate change&apos;s physical effects will become more severe,
              especially if unaddressed.
            </strong>
          </p>
          <ul>
            <li>
              We believe the distribution of weather events—and therefore
              agricultural output—will become more dispersed and asymmetric.
              Grain supply deficits will be more likely than surpluses.
            </li>
            <li>
              Grain and fertilizer commodity and transportation price inflation
              will rise during deficits, increasing input costs for food
              producers.
            </li>
          </ul>
          <p>
            <strong>
              A number of dynamics may reinforce and magnify other long-term,
              secular drivers of volatility and inflation.
            </strong>
          </p>
          <ul>
            <li>
              The demand for food will likely climb sharply, especially in
              emerging markets.
            </li>
            <li>
              Increasing wealth in emerging markets is changing consumer
              preferences and driving greater demand for animal protein. This
              will require more grain for feed, partially offset by a growing
              shift away from beef (cattle are relatively inefficient converters
              of plant protein to animal protein) to whiter meats and fish,
              which are more efficient converters.
            </li>
            <li>
              Unfarmed arable land will likely continue declining as population
              and new food demand force new acreage into production. This will
              make yield improvements the primary lever to increase supply.
            </li>
            <li>
              Food crops will increasingly compete with energy crops for arable
              land. Biofuels and renewable diesel production are set to increase
              sharply from already-high levels. For example, 40% of U.S. corn
              production today is used to produce fuel. About one-third of U.S.
              soybean production goes toward producing biodiesel.
            </li>
            <li>
              Geopolitical tensions appear likely to rise in tandem with income
              inequality. Government-imposed import and export restrictions,
              like those occurring now in Eastern Europe, could happen more
              often.
            </li>
          </ul>
          <p>
            <strong>
              Several forces may help mitigate the severity of these effects.
            </strong>
          </p>
          <ul>
            <li>
              The world&apos;s agricultural supply base has become more
              diversified and flexible. Brazil, for example, is a key producer
              to meet growing demand.
            </li>
            <li>
              Global logistics chains have become more flexible. Rail and
              trucking alternatives to shipping have proliferated, as has the
              ability of large ports, like New Orleans&apos;, to import from
              many sources.
            </li>
            <li>
              Basic market forces can help mitigate the price effects. Higher
              prices should stimulate more production capacity through
              industrial and agricultural technology innovations that can drive
              growth in productive acreage and crop yields. In locations where
              consumers are supportive, genetically modified crops can provide
              new food solutions. Separately, big data and analytics are already
              driving higher crop yields. If high commodity prices persist,
              there will likely be even more investment in research and
              development to improve agronomic outcomes.
            </li>
          </ul>
        </div>
      </div>
      <div className="box-topic-6-1">
        <div className="wrap">
          <p>
            <strong className="strong">Allspring is responding.</strong>
          </p>
          <p>
            Allspring employs two interactive systems to position investments
            for addressing climate change:
          </p>
          <p>
            <strong>01 From a top-down perspective:</strong>
            <br />
            Our Water Working Group (WWG) and Climate Change Working Group
            (CCWG) run cross-industry analyses to assess risks and opportunities
            related to climate risk mitigation (decarbonizing within industries)
            and adaptation (expanding port and river infrastructures). These
            analyses maintain a disciplined emphasis on long-term fundamental
            trends (rather than focusing solely on next year&apos;s earnings).
          </p>
          <p>
            <strong>02 From a bottom-up perspective:</strong>
            <br />
            Our industry analysts apply robust analytical frameworks globally to
            better incorporate sustainability factors into their analyses of
            individual companies in each industry. Our CCWG, WWG, industry
            analysts, and investment teams across the platform collaborate daily
            to ensure these analyses are integrated as appropriate into the
            investment teams&apos; decision-making processes for achieving
            clients&apos; goals.
          </p>
          <p>
            Beyond investment research, Allspring engages through our
            Stewardship and Engagement team with companies in which we&apos;ve
            invested. This is an essential active management tool to maximize
            the long-term value of our clients&apos; capital while influencing
            corporate behavior around decarbonization, water/agri-food/energy
            management, and other sustainability initiatives. These engagements
            deepen our understanding of companies&apos; operations and
            priorities. They also provide a platform to influence companies on
            material issues, like water management.
          </p>
          <p>
            For example, engagement is a fundamental pillar of our Climate
            Transition Credit strategy. As shown below, we&apos;ve identified
            and prioritized triggers for Climate Transition Credit engagement
            based on importance and have noted deliberate engagement outcomes.
          </p>
        </div>
      </div>
      <div className="box-topic-7">
        <div className="wrap">
          <p>
            <strong>Here&apos;s our bottom line.</strong>
          </p>
          <p className="highlight">
            It&apos;s clear to us that the world is changing and physical
            consequences aren&apos;t confined to the distant future—they&apos;re
            affecting us now.
          </p>
          <p>
            We believe substantial investment is needed to decarbonize
            industries, prepare for population growth, and fortify
            communities&apos; infrastructure worldwide. Allspring is committed
            to rigorously analyzing all aspects of sustainable investment
            risks—and to actively seeking to uncover purposeful investing
            opportunities that may financially benefit our clients as well as
            more effectively manage the influence of affiliated risks.
          </p>
        </div>
      </div>

      {/* <!--Charts--> */}
      <div className="box-chart-1">
        <div className="chart-title">
          <div className="wrap">
            DROUGHT-INDUCED CONGESTION ON THE MISSISSIPPI DROVE EXTREME SPIKES
            IN BARGE FREIGHT RATES IN Q4 2022
          </div>
        </div>
        <div className="chart-container">
          <LineAnnotationsChart
            data={sustainabilityChartData}
            // title='Drought-induced congestion on the mississippi drove extreme spikes in barge freight rates in q4 2022'
            yAxisTitle="Downstream barge freight rate (% of USDA tariff)"
            seriesName="Freight Rate"
          />
        </div>
        <div className="chart-disclosure">
          <div className="wrap">
            Sources: Allspring and USDA; note downstream barge freight rates are
            quoted as a percent of USDA tariff
          </div>
        </div>
      </div>
      <div className="box-chart-2">
        <div className="wrap">
          <div className="chart-title">
            DROUGHT CONTRIBUTED TO A COLLAPSE IN 2022 U.S. GRAIN SHIPMENTS
          </div>
          <div className="chart-container">
            <img
              src="/globalassets/images/campaigns/2023-outlook/sust_chart-1.png?v=011923."
              alt=""
            />
          </div>
          <div className="chart-disclosure">Sources: Allspring and USDA</div>
        </div>
      </div>
      <div className="box-chart-3">
        <div className="wrap">
          <div className="chart-title">
            RHINE RIVER DEPTHS NEAR HISTORICAL LOWS, RESTRICTING BARGE TRAFFIC
          </div>
          <div className="chart-container">
            <img
              src="/globalassets/images/campaigns/2023-outlook/sust_chart-2.png?v=011923."
              alt=""
            />
          </div>
          <div className="chart-disclosure">
            Sources: Allspring and the hydrological information system
            (PEGELONLINE) of the Federal Waterways and Shipping Administration
            of Germany. Each bubble on the map represents a gauging station
            where the data provided was collected. Current water levels shown
            are as of 12-Sep-22.
          </div>
        </div>
      </div>
      <div className="box-chart-4">
        <div className="wrap">
          <div className="chart-title">
            CLIMATE TRANSITION CREDIT (CTC) STRATEGY: PRIORITIZING ENGAGEMENT
            CANDIDATES
          </div>
          <div className="chart-container">
            {window.screen.width <= settings.screen.width.small
              ? (
              <img
                src="/globalassets/images/campaigns/2023-outlook/sust_chart-3.mobile.png"
                alt=""
              />
                )
              : (
              <img
                src="/globalassets/images/campaigns/2023-outlook/sust_chart-3.png"
                alt=""
              />
                )}
          </div>
          <div className="chart-disclosure">Source: Allspring</div>
        </div>
      </div>

      {/* <!--Cards--> */}
      <div className="box-card-1">
        <div className="wrap">{renderFundCard(sustainableData, 1)}</div>
      </div>
      <div className="box-card-2">
        <div className="wrap">{renderFundCard(sustainableData, 2)}</div>
      </div>
      <div className="box-card-3">
        <div className="wrap">{renderFundCard(sustainableData, 3)}</div>
      </div>
      <div className="box-card-4">
        <div className="wrap">{renderFundCard(sustainableData, 4)}</div>
      </div>

      {/* <!--Brochure download--> */}
      <div className="box-download">
        <div className="wrap">
          <Brochuredownload />
        </div>
      </div>

      {/* <!--Background image 1 for right-rail--> */}
      {renderRightrailBackgrounds('planko.376x376')}
      <div className="box-bgimg2"></div>
    </>
  )
}
/* ==================================================  end Component  ================================================== */
//
///
//
