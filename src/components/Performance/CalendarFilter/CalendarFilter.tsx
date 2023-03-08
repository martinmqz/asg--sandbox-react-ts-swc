import React from 'react'

interface Props {
  selectedCalendar: string
  updateStateCalendar: React.Dispatch<React.SetStateAction<string>>
}

/* ================================================== start Component ================================================== */
function CalendarFilter (props: Props) {
  return (
    <div className="form-group col-12 col-md-4">
      <fieldset onChange={event => selectCalendar(event)}>
        <legend className="col-form-label" id="calendarLegend">Calendar</legend>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            id="month-end-radio"
            name="calendar"
            className="custom-control-input"
            value="monthEnd"
            defaultChecked={props.selectedCalendar === 'monthEnd'}
            aria-labelledby="calendarLegend monthEndLabel"
            type="radio"
          />
          <label
            className="custom-control-label"
            id="monthEndLabel"
            htmlFor="month-end-radio">
              Month-end
            </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            id="quarter-end-radio"
            name="calendar"
            className="custom-control-input"
            value="quarterEnd"
            defaultChecked={props.selectedCalendar === 'quarterEnd'}
            aria-labelledby="calendarLegend quarterEndLabel"
            type="radio"
          />
          <label
            className="custom-control-label"
            id="quarterEndLabel"
            htmlFor="quarter-end-radio">
              Quarter-end
            </label>
        </div>
      </fieldset>
    </div>
  )

  //
  /// Helpers
  function selectCalendar (event:React.FormEvent) {
    const radioElement = event.target as HTMLInputElement
    props.updateStateCalendar(radioElement.value)
  }
}
/* ==================================================  end Component  ================================================== */

export default React.memo(CalendarFilter)
