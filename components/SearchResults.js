import React from 'react'

export default function SearchResults({results}) {
  return (
    <div>
      <p className='text-gray-600 text-sm mb-5 mt-5'>
        About {results.searchInformation.formattedSearchTime} Time {results.searchInformation.formattedTotalResults}
      </p>
    </div>
  )
}
