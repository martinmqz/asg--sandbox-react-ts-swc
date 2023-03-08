import React from 'react'
import camelCase from 'lodash-es/camelCase'
import pull from 'lodash-es/pull'
import clone from 'lodash-es/clone'
import { ClientGroupAssetClasses } from '../Performance'

interface Props {
  isAllChecked: boolean
  selectedAssetClasses: string[]
  allAssetClassesObj: ClientGroupAssetClasses
  updateStateSelectedAssetClasses: React.Dispatch<React.SetStateAction<string[]>>
}

/* ================================================== start Component ================================================== */

function AssetClassFilter (props: Props) {
  const assetClassCheckboxes = [
    <div key="all-checkbox" className="custom-control custom-checkbox">
      <input
        className="custom-control-input"
        type="checkbox"
        checked={props.isAllChecked}
        name="assetClass"
        value="all"
        aria-labelledby="assetClassesLegend allAssetClassesLabel"
        id="all-checkbox"
        readOnly
      />
      <label
        id="allAssetClassesLabel"
        className="custom-control-label"
        htmlFor="all-checkbox"
      >
        All
      </label>
    </div>
  ]

  for (const assetClassId in props.allAssetClassesObj) {
    const checked = !props.isAllChecked && props.selectedAssetClasses.includes(assetClassId)
    assetClassCheckboxes.push(
      <div
        key={assetClassId + '-checkbox'}
        className="custom-control custom-checkbox"
      >
        <input
          id={assetClassId + '-checkbox'}
          name="assetClass"
          value={assetClassId}
          className="custom-control-input"
          checked={checked}
          aria-labelledby={`assetClassesLegend ${camelCase(assetClassId)}Label`}
          type="checkbox"
          readOnly
        />
        <label
          id={`${camelCase(assetClassId)}Label`}
          htmlFor={assetClassId + '-checkbox'}
          className="custom-control-label"
        >
          {props.allAssetClassesObj[assetClassId]}
        </label>
      </div>
    )
  }

  return (
    <div className="form-group col-md-12 mb-0" onChange={event => selectAssetClass(event)}>
      <fieldset>
        <legend
          id="assetClassesLegend"
          className="col-form-label"
        >
          Asset Classes
        </legend>
        {assetClassCheckboxes}
      </fieldset>
    </div>
  )

  //
  /// Helpers
  function selectAssetClass (event:React.FormEvent) {
    let mySelectedAssetClasses = clone(props.selectedAssetClasses)
    const checkboxElem = event.target as HTMLInputElement
    const value = checkboxElem.value

    if (value === 'all') {
      mySelectedAssetClasses = Object.keys(props.allAssetClassesObj)
    } else {
      if (checkboxElem.checked && mySelectedAssetClasses.includes(value)) {
        mySelectedAssetClasses = [value]
      } else if (checkboxElem.checked) {
        mySelectedAssetClasses.push(value)
      } else {
        pull(mySelectedAssetClasses, value)
      }
    }
    if (!mySelectedAssetClasses.length) {
      mySelectedAssetClasses = Object.keys(props.allAssetClassesObj)
    }

    props.updateStateSelectedAssetClasses(mySelectedAssetClasses)
  }
}
/* ==================================================  end Component  ================================================== */

export default React.memo(AssetClassFilter)
