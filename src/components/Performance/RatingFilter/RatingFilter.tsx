import React from 'react'

interface Props {
  selectedRating: string
  updateStateRating: React.Dispatch<React.SetStateAction<string>>
}
/* ================================================== start Component ================================================== */
function RatingFilter (props: Props) {
  const noop = () => { /** */ }

  return (
    <div className="form-group col-12 col-md-4">
      <fieldset>
        <legend className="col-form-label" id="ratingLegend">Morningstar Rating™</legend>
        <div className="rating-filter">
          <input
            id="star-5"
            name="rating"
            value="5"
            checked={props.selectedRating === '5'}
            onChange={noop}
            onClick={event => selectRating(event)}
            aria-labelledby="ratingLegend star5Label"
            type="radio"
          />
            <label id="star5Label" htmlFor="star-5" title="5 stars">5 stars</label>
          <input
            id="star-4"
            name="rating"
            value="4"
            checked={props.selectedRating === '4'}
            onChange={noop}
            onClick={event => selectRating(event)}
            aria-labelledby="ratingLegend star4Label"
            type="radio"
          />
            <label id="star4Label" htmlFor="star-4" title="4 stars">4 stars</label>
          <input
            id="star-3"
            name="rating"
            value="3"
            checked={props.selectedRating === '3'}
            onChange={noop}
            onClick={event => selectRating(event)}
            aria-labelledby="ratingLegend star3Label"
            type="radio"
          />
            <label id="star3Label" htmlFor="star-3" title="3 stars">3 stars</label>
          <input
            id="star-2"
            name="rating"
            value="2"
            checked={props.selectedRating === '2'}
            onChange={noop}
            onClick={event => selectRating(event)}
            aria-labelledby="ratingLegend star2Label"
            type="radio"
          />
            <label id="star2Label" htmlFor="star-2" title="2 stars">2 stars</label>
          <input
            id="star-1"
            name="rating"
            value="1"
            checked={props.selectedRating === '1'}
            onChange={noop}
            onClick={event => selectRating(event)}
            aria-labelledby="ratingLegend star1Label"
            type="radio"
          />
          <label id="star1Label" htmlFor="star-1" title="1 star">1 star</label>
        </div>
      </fieldset>
    </div>
  )

  //
  /// Helpers
  function selectRating (event:React.MouseEvent):void {
    const radioElement = event.target as HTMLInputElement
    let value = radioElement.value
    if (value === props.selectedRating) {
      value = '0'
    }
    props.updateStateRating(value)
  }
}
/* ==================================================  end Component  ================================================== */

export default React.memo(RatingFilter)
