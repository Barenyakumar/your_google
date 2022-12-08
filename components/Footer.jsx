import React from 'react'

export default function Footer() {
  return (
    <div className="absolute bottom-0 w-[100%] flex justify-center p-6 text-gray-600">
      Copyright &copy; {new Date().getFullYear()} Barenya Kumar Panda
    </div>
  )
}
