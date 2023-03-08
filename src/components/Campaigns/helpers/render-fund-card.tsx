/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import FundCard from '../Campaign2023Outlook/FundCard'

export default function renderFundCard (tabData: any[], ordinal: number) {
  const index = ordinal - 1
  if (tabData[index]) {
    return (
      <FundCard
        title={tabData[index].heading}
        subNav={tabData[index].ticker}
        rating={tabData[index].morningstarRating}
        description={tabData[index].description}
        buttonText={tabData[index].ctaText}
        banner={tabData[index].title}
        morningStarText={tabData[index].morningstarText}
        linkLabel={tabData[index].linkText}
        fundLink={tabData[index].linkUrl}
        strategyLink={tabData[index].ctaUrl}
      />
    )
  }
}
