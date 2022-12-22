import { SearchIcon, PhotographIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React from 'react'
import SearchHeaderOption from './SearchHeaderOption'


function SearchHeaderOptions() {
  const router = useRouter()
  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:justify-start lg:pl-52 border-b ">
      <SearchHeaderOption
        title="All"
        icon={SearchIcon}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHeaderOption
        title="Images"
        icon={PhotographIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  )
}

export default SearchHeaderOptions