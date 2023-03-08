import React from 'react'
import { ClientGroupShareClasses } from '../Performance'

interface Props {
  defaultShareClassId: string
  allShareClasses: ClientGroupShareClasses
  updateStateShareClassId: React.Dispatch<React.SetStateAction<string>>
}

/* ================================================== start Component ================================================== */
function ShareClassFilter (props: Props) {
  const selectElementRef = React.useRef<HTMLSelectElement>(null)
  const shareClassOptions = []

  for (const shareClassId in props.allShareClasses) {
    shareClassOptions.push(
      <option key={shareClassId} value={shareClassId}>{props.allShareClasses[shareClassId]}</option>
    )
  }

  return (
    <div className="form-group btn-addon col-12 col-md-4">
      <label className="col-form-label" htmlFor="share-class-select">Share Class</label>
      <div className="input-group">
        <select
          id="share-class-select"
          name="shareClass"
          className="custom-select"
          defaultValue={props.defaultShareClassId}
          onChange={selectShareClass}
          ref={selectElementRef}
        >
          {shareClassOptions}
        </select>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => submitShareClassSelection()}
          >
            <span>Submit</span><span className="sr-only">Submit</span>
          </button>
        </div>
      </div>
    </div>
  )

  //
  /// Helpers
  function selectShareClass (event:React.ChangeEvent) {
    const selectElement = event.target as HTMLSelectElement
    const shareClassId = selectElement.value
    selectElement.dataset.changedValue = shareClassId
  }

  function submitShareClassSelection () {
    const selectElement = selectElementRef.current
    if (selectElement?.dataset.changedValue) {
      props.updateStateShareClassId(selectElement.dataset.changedValue)
      selectElement.removeAttribute('data-changed-value')
    }
  }
}
/* ==================================================  end Component  ================================================== */

export default React.memo(ShareClassFilter)
