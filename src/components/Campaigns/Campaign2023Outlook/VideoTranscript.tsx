import React from 'react'

/* ================================================== start Component ================================================== */

export default function VideoTranscript () {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <>
      <div className="vidtranscript">
        <div className="wrap">
          <div className="accordion">
            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => setIsActive(!isActive)}>
                <div className="">Video transcription</div>
                <div className={isActive ? '' : 'd-flex'}>
                  {isActive
                    ? (
                    <i className="arrow up d-inline-block"></i>
                      )
                    : (
                    <i className="arrow down d-inline-block"></i>
                      )}
                </div>
              </div>
              {isActive && (
                <div className="accordion-content">
                  <b>Sue Herera:</b> Hi, everybody. I&apos;m Sue Herera, CNBC
                  Anchor at Large. I want to welcome you to our Allspring video
                  presentation and update on the state of global markets and the
                  global economy. It&apos;s a pleasure to be with you today. And
                  joining me with their insights, Jon Baranko, chief investment
                  officer, Fundamental Investments at Allspring. And also
                  joining us from London is Dan Morris, chief investment
                  officer, Systematic Investments for Allspring. Gentlemen, it
                  is a pleasure to see you. Thank you so much for joining me
                  today.
                  <br />
                  <p>&nbsp;</p>
                  <b>Jon Baranko:</b> It&apos;s great to be with you, Sue. Thank
                  you.
                  <br />
                  <p>&nbsp;</p>
                  <b>Dan Morris:</b> It&apos;s absolutely a pleasure to be here.
                  Thank you.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> We have a lot to talk about. You know, in
                  my 40 plus years of covering Wall Street and global events,
                  I&apos;ve basically covered almost every major story there is.
                  I never, however, thought I would be covering a pandemic, a
                  war, an energy crisis, and the reordering of the global
                  economic map all at one time. So, this is definitely a first
                  for me. But that&apos;s really where we find ourselves today.
                  We find ourselves, I think, at the end of one era and the
                  beginning of another era. And it&apos;s an era full of high
                  volatility, diverging macroeconomic conditions, and needless
                  to say, incredible uncertainty. So, it&apos;s no wonder that
                  investors find themselves at a bit of a loss. So, our goal and
                  I don&apos;t envy you, gentlemen, because it&apos;s a
                  difficult environment, but our goal is to provide some
                  independent and divergent perspectives on where we stand right
                  now. You know, investors might want to embrace
                  Allspring&apos;s approach instead of just following
                  conventional wisdom because there is absolutely nothing
                  conventional about where we find ourselves now. So, Jon and
                  Dan, I&apos;m going to start this off with a look at the
                  geopolitical landscape, which is dramatically different than
                  what we saw last year. You have China on the forefront of a
                  COVID policy that has interrupted the supply chain. You have
                  the Ukraine war. You have the Middle East in play. You have
                  Europe breaking into separate blocks based on the Ukraine war.
                  So, Jon, I&apos;ll go to you first. What type of risk does
                  this conglomerate of events pose for the markets?
                  <br />
                  <p>&nbsp;</p>
                  <b>Jon Baranko:</b> Yeah, it&apos;s really, Sue, an amazingly
                  interesting time that we live in right now. And one of the
                  things that, you know, if you look at the market environment
                  and you look at the challenges that we&apos;ve had, it creates
                  all kinds of emotions, right? And part of that emotion is due
                  to the negative returns in the market across many asset
                  classes. And part of that is due to the volatility in the
                  markets. This year alone, we&apos;ve had 49% of the trading
                  days trade with a 1% dispersion in the markets on any given
                  day. Right? So, investors have gone through a lot as
                  we&apos;ve tried to struggle through these various dynamics,
                  not only globally but in the United States and other countries
                  around the world. The global situation, I think, is evolving
                  every day. It&apos;s very complicated. And obviously, I think
                  probably starts with the war in Ukraine and then the situation
                  that we have in Russia. And to us, there is multiple dynamics
                  of this. I think the first thing you have to look at is just
                  the heroic spirit of the Ukrainian people. They&apos;re
                  embracing democracy. They&apos;re embracing freedom. They are
                  rallying around a leader and really rising to the occasion to
                  take on the challenges that they face from Russia. You also
                  have to think through the context in terms of Russia and
                  Vladimir Putin and ultimately, what his end game is in
                  Ukraine. And I think that conflict in and of itself, many
                  people thought was improbable and created a lot of challenges
                  in the market earlier in the year and ultimately, now has kind
                  of manifested itself in contributions to inflation and
                  contributions to other global dynamics that are occurring. And
                  so, our view, I guess our standard view is in the end that
                  Vladimir Putin is a very pragmatic leader when it comes to
                  serving his own self-interest. We think that the Ukrainian
                  sovereignty is going to be important for President Zelenskyy
                  to maintain and that there will be a negotiated settlement,
                  but that&apos;s going to take quite some time. And in the
                  meantime, you have all kinds of geopolitical dynamics that
                  relate to energy policies and inflation and all the other
                  contributing factors globally.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> Dan, weigh in on that because I think Jon
                  kind of laid it out for us so well. What&apos;s happening in
                  Ukraine and the dynamic between Russia and the different
                  countries around the world, which we&apos;ll get into in just
                  a second certainly presents investors with a challenge that
                  we&apos;ve never seen before.
                  <br />
                  <p>&nbsp;</p>
                  <b>Dan Morris:</b> And I think as it pertains to Russia and
                  Ukraine, energy is really the thing that&apos;s caused the
                  most impact on the market. Obviously, one of the big impacts
                  has actually been a lack of supply. The Years of
                  underinvestment in infrastructure and that challenge now and
                  the reliance that Europe has on oil from Russia is really
                  being highlighted in prices. But at the same time, what
                  that&apos;s doing is diverting because of sanctions, diverting
                  oil that previously would have gone to Russia, from Russia to
                  Europe, actually towards the Middle East and Asia at lower
                  prices. And so, the supply dynamics have changed and the
                  source has changed. And the markets are smart and consumers of
                  oil are smart and they&apos;re finding other ways to source
                  oil. So, what we haven&apos;t seen is a big drop off in
                  supply. And that demand impact hasn&apos;t really changed
                  significantly, even despite potentially a much colder winter
                  as we head into the new year.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> What about the investment, either
                  opportunities or risks, from your perspective? You&apos;ve
                  just laid out, both of you have just laid out a fascinating
                  scenario, but a somewhat scary scenario to a certain extent,
                  as well. So, how do you manage that risk from an investment
                  standpoint?
                  <br />
                  <p>&nbsp;</p>
                  <b>Dan Morris:</b> First of all, what we&apos;ve seen is
                  inflation has been rising and growth has been falling. And
                  that&apos;s what we&apos;ve seen this year. What we think
                  we&apos;re going to see next year is inflation falling, but
                  growth still falling at the same time. So, what does that
                  mean? Well, initially that can be good for bonds, actually.
                  But that&apos;s a challenge for equities. It&apos;s mixed
                  because of corporate earnings and how that&apos;s going to
                  filter through to valuations. And so, we see the first
                  opportunities are actually in fixed income initially and then
                  potentially as the year goes on further into equity markets.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> And Jon, from a fundamental standpoint, how
                  would you invest either to guard against the risk that
                  we&apos;ve just talked about or to be opportunistic?
                  <br />
                  <p>&nbsp;</p>
                  <b>Jon Baranko:</b> Yeah, I think that this is where bottom-up
                  fundamental research really matters, right? And then
                  ultimately aligning that with, in the case of geopolitics,
                  geopolitical interests and making sure that we fully
                  understand that. So, as we look across many of these different
                  countries, and we can kind of get into some examples of kind
                  of how we apply this in China and other places, but it&apos;s
                  very important for us to actually do the research, be on the
                  ground, make sure we understand what&apos;s happening in order
                  for us to navigate those challenges in a prudent way for our
                  investors.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> Let&apos;s bring it on home to the United
                  States. And Jon, we have basically been witnessing one of the
                  most aggressive Feds (Federal Reserve) in history. Talk to me
                  about what your inflation projections are and whether or not
                  we will see the Fed take the foot off the accelerator a little
                  bit.
                  <br />
                  <p>&nbsp;</p>
                  <b>Jon Baranko:</b> Yeah, I would say that we broadly feel
                  that we&apos;re in a regime shift right now. And we&apos;ve
                  had, if you think about the last 30 years, we&apos;ve been in
                  a period with lower interest rates, low inflation, the ability
                  of the Federal Reserve to stimulate the economy in ways that
                  have now changed. We&apos;re now in an inflationary
                  environment and the Federal Reserve is changing its posture in
                  terms of ultimately withdrawing liquidity from the market in
                  the form of quantitative tightening and ultimately raising
                  interest rates to a level that gets inflation in check. We
                  think that is critical in foundation to the overall views of
                  both the equity and the fixed income market. In the equity
                  markets, interest rates play a really important role in terms
                  of valuing future cash flow. And so, you&apos;ve seen
                  companies that have cash flow that extend out in the future,
                  typically high growth stocks, really discounted with interest
                  rates going up, as ultimately people are reassessing the value
                  of those future cash flows that are much further out on the
                  horizon versus more established companies where you have a
                  much more transparent visibility in terms of what those future
                  cash flows look like. And so, companies that have had that
                  that visibility in terms of near-term cash flow or performs
                  better companies that ultimately have less visibility in terms
                  of future cash flows have gotten hurt to a much greater
                  degree. And we think that as we move into next year, if we can
                  start to see signs that inflation is peaking and we can start
                  to see signs that interest rate increases by the Federal
                  Reserve are going to start to taper or moderate, I should say,
                  that ultimately then the markets will be much more
                  comfortable. The markets like predictability and we&apos;re in
                  a very kind of unpredictable time right now.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> Dan, do you want to weigh in on that? I
                  mean, the Fed raised rates by a half a percentage point. That
                  was what the market was expecting. It did signal some more
                  increases are likely, but the market does not seem to be
                  shocked by it. But from a quant standpoint, the traditional
                  60/40 portfolio, is that still relevant moving into the new
                  year, given the backdrop of interest rates that we have now
                  and the backdrop of inflation?
                  <br />
                  <p>&nbsp;</p>
                  <b>Dan Morris:</b> Yeah, I think that&apos;s a great question
                  because so many people, whilst they&apos;ve got their
                  individual portfolios they&apos;re monitoring, their overall
                  wealth pot might look like a 60/40 portfolio. And I mean,
                  first of all, inflation being high now and then coming down,
                  if you look one year out, then forward levels of inflation a
                  year out are about 3%. So, that&apos;s a pretty big drop from
                  where we sit today. So, it&apos;s a lot of uncertainty. And I
                  think the uncertainty is the key. When we think about a 60/40
                  portfolio, the big reliance there is a negative correlation
                  between equity and bonds. So, when equities suffer, bonds
                  provide a buffer and vice versa. And for the last 20 years,
                  that&apos;s exactly what we&apos;ve had. What our research has
                  shown is that when there&apos;s inflation uncertainty, that
                  correlation between equity and bonds has become more positive.
                  Now, actually, as that uncertainty is beginning to fall away,
                  the correlation is decreasing again. So, we&apos;re beginning
                  to get back to a more diversified 60/40 portfolio. But
                  something else to remember with a 60/40 portfolio, 60% equity,
                  40% bonds, is that&apos;s really about an 85% risk weight
                  towards equity. So, it is dominated by the equity risk
                  premium. So, if we&apos;re saying the 60/40 portfolio is no
                  longer relevant, then we&apos;re kind of also making an
                  inference about equity risk premia. And we certainly
                  don&apos;t believe that to be true. We still see a lot of
                  potential within the long term for the equity risk premium.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> Okay. Let&apos;s talk then about investment
                  opportunities. You both have done a fabulous job of kind of
                  setting up the discussion. And Allspring has some fascinating
                  ideas on how to invest in a new year. It&apos;s going to be an
                  interesting one if 2022 has been any guide. So, let&apos;s
                  talk about what didn&apos;t do well this past year. Where,
                  Jon, do you see opportunity going into a new year, given the
                  interest rate environment and the global environment that we
                  all just discussed?
                  <br />
                  <p>&nbsp;</p>
                  <b>Jon Baranko:</b> Yeah, I think, so if you reflect on 2021
                  and the years coming out of the COVID recession, we ultimately
                  had a period where we had high growth going on in many of
                  these names. And so, you had multiple expansion in the FAANG
                  (Facebook, Amazon, Apple, Netflix, and Google) stocks and many
                  growth stocks. And this year, the early part of the year has
                  been all about that multiple contraction as interest rates
                  have gone up. We think that where we are right now is
                  ultimately the next derivative of that, which is are we headed
                  into an earnings recession with these companies as we head
                  into 2023. What we&apos;re expecting to see is earnings start
                  to deteriorate as we see companies report their quarters in
                  the first quarter of 2023. Everybody&apos;s expecting that to
                  be fairly significant. We&apos;re actually kind of wondering
                  if it&apos;s a little bit shallower than people expect. I
                  think that if you look at companies and how they&apos;ve
                  structured their balance sheets, many of them have extended
                  and locked in capital for longer periods of time in a low
                  interest rate environment. They have more flexibility on their
                  balance sheet coming into this circumstance. And if we get to
                  a point where we have more certainty around interest rates and
                  companies can start to plan around that, it could be a better
                  scenario than perhaps people expect. But I do think that as we
                  look at earnings, there&apos;s one other really important
                  dynamic. Energy as a component of S&P earnings represents, the
                  earnings in energy companies are up 146% this year. They are
                  widely masking the underlying dynamics in the S&P (Standard &
                  Poors 500 Index), where you have fairly significant earnings
                  erosion and ultimately, sectors like communications services,
                  consumer discretionary, financials, all have negative earnings
                  this year. And so, some of this is playing out underneath the
                  surface of the index. But there&apos;s probably still a little
                  bit more of that to occur in the first part of next year.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> All right, Dan, what&apos;s on your agenda
                  for 2023?
                  <br />
                  <p>&nbsp;</p>
                  <b>Dan Morris:</b> Picking up a little bit on what Jon just
                  shared there about dispersion in the markets across, within
                  given sectors or within given markets, and I think, we spoke a
                  little bit about equity and bond and that correlation
                  breakdown. So, therefore, outside of those two asset classes,
                  where are people going? I think they&apos;ve really got two
                  main choices. One is you think about hedging the overall
                  portfolio. And the second is looking at liquid alternatives.
                  So, what are some of those dynamics that Jon has spoken about
                  that you can use to your advantage as an investor? And one
                  clear area we see in the long run is some of those high
                  volatility stocks in good times have actually shown some
                  fantastic returns. But over the long run, some of those high
                  beta stocks have actually underperformed the rest of the
                  market quite significantly. So, there&apos;s actually an
                  opportunity that we see to short some of those high volatility
                  stocks and redeploy that capital into businesses that we see
                  have a better long term fundamental makeup. And ultimately,
                  that provides an asymmetric return profile, so investors can
                  try and benefit from the market, but with some downside
                  protection baked into that exposure. And we see that as a key
                  opportunity for investors where there&apos;s that dispersion
                  in the market. And with the hedging approach, you can apply
                  that to different parts of the portfolio or the overall
                  portfolio. But there&apos;s no one size fits all with hedging,
                  right? Markets could decline very quickly. They could decline
                  quite slowly and different hedging strategies perform very
                  different in those different environments. So, it&apos;s a
                  case of trying to fine tune some of these different
                  capabilities to exactly what investors are looking for. But
                  those are two key areas where we believe people can both
                  diversify their return source and provide some protection on
                  the downside.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> Jon, Dan laid out some very interesting
                  strategies, some of which I haven&apos;t heard from other
                  places on the street, which I think brings up the whole issue
                  of divergent opinions from Allspring, which is why we&apos;re
                  all here. But it also, some of those, to me, sound a little
                  complicated, which brings up the topic, Jon, of active
                  management versus passive management. How do you see that
                  playing out in the new year in 2023?
                  <br />
                  <p>&nbsp;</p>
                  <b>Jon Baranko:</b> Yeah, I think that the last decade, really
                  characterized by low interest rates and central bank stimulus
                  and fiscal stimulus in the economy, really created an
                  environment where you kind of had a tide lifts all boats,
                  right? And companies very smartly took advantage of that, good
                  companies and poor companies. Poor companies locked in
                  financing for a longer period of time. Good companies did the
                  same thing, but also reinvested in their businesses and grew
                  those businesses. And so, if we are in this paradigm shift
                  that we think is going on, ultimately that&apos;s going to
                  manifest itself in a higher interest rate environment where
                  some of those challenges will start to be exposed. And so,
                  you&apos;re going to see those lower quality companies who
                  locked in financing, we&apos;ll say for a three-year period,
                  you&apos;re going to start to see that financing roll off and
                  all of a sudden they&apos;re going to start to have financial
                  distress, right? You&apos;re going to see companies that were
                  able to invest through this trough ultimately do much, much
                  better. And so, we think it is actually entering into what
                  could be a decade of excellence for active managers who really
                  navigate this market in a prudent way and really take
                  advantage of those dynamics.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> Dan, do you think, given the whiplash that
                  we&apos;ve seen in in the markets this past year, I&apos;ve
                  heard more and more people talk about combining quantitative
                  strategies with fundamental strategies, even though they work
                  in very different ways, obviously, which you&apos;ve just laid
                  out. But when I speak to individual investors, many of them
                  only look at the fundamental side. That&apos;s been their
                  whole way of investing. I get the sense that that is changing
                  in a pretty dramatic way because the fundamentals took so many
                  people by surprise. It took the market by surprise this past
                  year. And we&apos;ve talked about them certainly. But it kind
                  of shifted me more towards the quantitative side of things,
                  where it takes the emotion out of investing. And I think that
                  might be valuable in in this environment.
                  <br />
                  <p>&nbsp;</p>
                  <b>Dan Morris:</b> I think there&apos;s a roll for both.
                  Fundamental investing is absolutely key to generally
                  understanding the names that you&apos;re buying and investing
                  in. That&apos;s critical. And to me, that will always remain.
                  And I think the partnership of the two within an overall
                  portfolio context is really interesting to investors. The main
                  reason being, just like we spoke about equities and bonds,
                  when one is down, the other can support the other, we see the
                  same is also quite often true with fundamental and quant
                  strategies.
                  <br />
                  <p>&nbsp;</p>
                  <b>Jon Baranko:</b> Sue, if I could pick up on that a minute,
                  one of the things that we&apos;ve designed that marries both
                  fundamental and quantitative side of our business is a
                  personalized investment capability that we call Remi. And
                  ultimately, what that does, Remi allows us to take
                  institutional quality research, let&apos;s say in municipal
                  bonds or in taxable bonds or some other part of the investment
                  horizon, and utilize those ideas to create a customized
                  portfolio for our client in which they have the opportunity to
                  own those individual securities and we will manage that for
                  them in a tax-efficient way and in a way that&apos;s
                  customized to their needs.
                  <br />
                  <p>&nbsp;</p>
                  <b>Dan Morris:</b> That&apos;s been one of the most
                  fascinating areas of research that we&apos;ve done as a
                  business coming together to see different ways of solving a
                  problem. And that really is individualized customization but
                  at scale.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> Obviously, not everyone on the street is
                  taking this approach. Not everyone on the street has the type
                  of instruments that Jon just laid out. But tell me more about
                  this program and how an individual investor of relatively
                  modest investment means can benefit from that.
                  <br />
                  <p>&nbsp;</p>
                  <b>Dan Morris:</b> Well, let&apos;s build on the example that
                  Jon gave about munis. I think it&apos;s a great one because
                  it&apos;s an asset class that individuals are looking to
                  invest in, but they&apos;re very aware of taxable gains that
                  they perhaps don&apos;t want to realize. So, what we need to
                  do? We need to benefit from the research of that fundamental
                  muni team and its entire insight into that rich asset class.
                  But then one person may have entered that portfolio in 2021,
                  somebody else may be in 2020, but they might want to hold the
                  same portfolio. So, how can we at scale understand that
                  someone&apos;s gain from 2020 is different to the one from
                  2021, but still benefit from that same research. So, using the
                  models and the capabilities that we&apos;ve built, we can
                  effectively identify those holdings where they perhaps
                  don&apos;t want to sell them yet and others they might want to
                  sell to realize a loss. And that within the portfolio for
                  these two individual investors get the benefit of the same
                  muni team but personalized towards their both individual
                  needs. And that I think is a great example of where the quant
                  skills come together with the fundamental skills and make it
                  real for investors.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> As we wrap things up, I&apos;d like both of
                  you to overall give me kind of a thumbnail sketch of what you
                  see 2023 looking like. Jon, I&apos;ll start with you. Are we
                  in for another wild ride or do you think things are going to
                  steady out a little bit? How do you view the new investment
                  year?
                  <br />
                  <p>&nbsp;</p>
                  <b>Jon Baranko:</b> I think 2023 will be similar to 2022,
                  except that we&apos;ll know how to handle it, right? So, when
                  we came into 2022 without, I don&apos;t think many of the
                  industry participants had gone through an inflationary cycle
                  or had gone through the challenges that we&apos;ve been
                  through. But I do think that as we start to see the Fed get to
                  a point where they start to pause on interest rates going
                  forward, and hopefully that&apos;s in the first quarter or at
                  the end of the first quarter, maybe in the second quarter of
                  the year, that we start to get more visibility and more
                  confidence. I think that fixed income will be a very
                  attractive investment with the enhanced yields that we have
                  available going into that. And then ultimately, I think the
                  equity markets, as we navigate through the earnings revisions
                  that are going to occur in the first part of the year, will
                  start to get much more attractive as we go into the back end
                  of the year and including growth investments.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> And Dan, what are you expecting in 2023
                  from your standpoint.
                  <br />
                  <p>&nbsp;</p>
                  <b>Dan Morris:</b> Similar to Jon. Interest rates stabilizing.
                  Inflation coming down from where it is now, heading towards
                  more of a long-term average. With that increased certainty, we
                  think the correlation between equity and bonds is going to
                  become more negative. So, therefore, that 60/40 portfolio is
                  going to become more stable. Exactly as Jon said, I think the
                  opportunity is a great one right now for fixed income
                  investing. And then as that uncertainty of inflation begins to
                  stabilize, then growth stocks can begin to perform well, as
                  well, in line with Jon&apos;s thoughts there. But what I also
                  see is investors have also been looking to keep cash liquid.
                  There&apos;s been challenges in this year in particular about
                  product markets. And so, that liquidity within portfolios is
                  absolutely key.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> A quick comment before I let you both go on
                  the aspect of recession. Jon, do you think that we will skirt
                  a recession, maybe have a mild recession, or a deeper
                  recession? I know a lot of it is dependent on the Fed,
                  certainly, but what is your view there?
                  <br />
                  <p>&nbsp;</p>
                  <b>Jon Baranko:</b> It is. I think that our general view is
                  that we&apos;re in for some sort of recession, probably a mild
                  recession. And the reason why I say that is because
                  corporations and the consumer have largely stayed pretty
                  healthy up until this point. Now we&apos;re starting to see
                  signs where the consumer, we&apos;re starting to see credit
                  card debt increase and we&apos;re starting to see some signs
                  of cracks in that. But to the extent that the job markets can
                  stay healthy and we can get through a period where we get
                  inflationary pressures to ease, as Dan highlighted, then we
                  will likely see a slowdown in the economy. But hopefully
                  it&apos;s this shallow recession that the Fed&apos;s been
                  trying to engineer.
                  <br />
                  <p>&nbsp;</p>
                  <b>Dan Morris:</b> Yeah, I agree with Jon in terms of a more
                  shallow recession, but the only other thought would be
                  different parts of the globe are going to experience this
                  differently. I think recessions could be quite localized, as
                  well, within different regions. Certainly regions that are
                  less energy secure, that could be felt more as they have more
                  inflation pushing through how they spend and inability to meet
                  those needs, which forces them potentially into a more painful
                  recession.
                  <br />
                  <p>&nbsp;</p>
                  <b>Sue Herera:</b> Gentlemen, thank you very much. I so
                  appreciate your perspective. It&apos;s been a pleasure to
                  spend time with you. And I think you provided some really
                  valuable insight from Allspring. Thank you again.
                  <br />
                  <p>&nbsp;</p>
                  <b>Jon Baranko:</b> Thank you, Sue.
                  <br />
                  <p>&nbsp;</p>
                  <b>Dan Morris:</b> Thank you. PAR-0123-00011
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
/* ==================================================  end Component  ================================================== */
