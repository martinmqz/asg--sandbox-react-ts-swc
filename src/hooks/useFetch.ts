import React from 'react'

export default function useFetch<T> (svcUrl:string):[T|null, boolean|null, Error|null] {
  const [stateIsLoading, setStateIsLoading] = React.useState<boolean|null>(null)
  const [stateError, setStateError] = React.useState<Error|null>(null)
  const [stateData, setStateData] = React.useState<T|null>(null)

  React.useEffect(() => {
    //
    /// Default values
    setStateIsLoading(true)
    setStateError(null)

    //
    /// Fetch data
    fetch(svcUrl)
      .then(resp => resp.json())
      .then((data:T) => setStateData(data))
      .catch((err:Error|null) => setStateError(err))
      .finally(() => setStateIsLoading(false))
  }, [svcUrl])

  return [stateData, stateIsLoading, stateError]
}
