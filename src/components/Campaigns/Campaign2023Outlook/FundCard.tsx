import React from 'react'

interface Props {
  title: string;
  subNav: string;
  rating: number;
  description: string;
  banner: string;
  linkLabel: string;
  fundLink: string;
  strategyLink: string;
  morningStarText: string;
  buttonText: string;
}

/* ================================================== start Component ================================================== */
export default function FundCard (props: Props) {
  return (
    <div className="fundCard-container">
      <div className="fundCard-banner">
        <span>{props.subNav}</span>&nbsp;&nbsp;{(props.subNav ? '|' : '')}&nbsp;&nbsp;<span>{props.banner}</span>
      </div>
      <div className="fundCard-flex-container d-flex">
        <div className="fundCard-content">
          <h1 className="fundCard-title">{props.title}</h1>
            <a className={'fundCard-link' + (props.fundLink ? '' : ' d-none')} href={props.fundLink}>
            {props.linkLabel}
            <div className="fundCard-link-arrow"></div>
          </a>
        </div>
        <div className="fundCard-flex-content">
          <div className="fundCard-ratingContent">
            {renderStars(props.subNav ? props.rating : 0)}
            <p className="fundCard-description">{props.description}</p>
          </div>
          <a className="fundCard-link fundCard-button" onClick={handleStrategyLinkClick} href={props.strategyLink}>{props.buttonText} &gt;</a>
        </div>
      </div>
    </div>
  )

  function renderStars (count: number) {
    if (count < 3) {
      return null
    } // else...
    const starElements: JSX.Element[] = []
    for (let i = 0; i < count; i++) {
      starElements.push(<span className="fas fa-star fa-xs" />)
    }
    return (
      <div className="d-flex align-items-center justify-content-between mb-0">
        <span className="fundCard-subtitle">{props.morningStarText}</span>
        <span className="d-inline-flex">{starElements}</span>
      </div>
    )
  }

  function handleStrategyLinkClick () {
    const currentCookie = getCookie('agih')

    // Make sure the cookie is valid and not an empty string
    if (currentCookie !== null && currentCookie !== '') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const parsedCookie = JSON.parse(currentCookie)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      const country = parsedCookie.country.toLowerCase()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      const role = parsedCookie.role.toLowerCase()

      // Only delete the cookie if the current user is a US Individual Investor or a US Institutional Cash Investor
      if (country === 'us' && (role === 'di' || role === 'ic')) {
        document.cookie = 'agih=none; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT; secure'
      }
    }
  }

  function getCookie (name: string) {
    const cookieRow = document.cookie.split('; ')
      .find((row) => row.startsWith(`${name}=`))

    if (cookieRow == null) return null

    const cookieRaw = cookieRow.split('=')[1]
    return b64DecodeUnicode(cookieRaw)
  }

  function b64DecodeUnicode (str: string) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  }
}
/* ==================================================  end Component  ================================================== */
