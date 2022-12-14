import {useSession , signIn, signOut} from 'next-auth/react'

export default function User({ className }) {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <picture>
          <img
            onClick={signOut}
            src={session.user.image}
            alt={session.user.name}
            className={`h-10 w-10 rounded-full hover:bg-gray-200 p-1 cursor-pointer ${className}`}
          />
        </picture>
      </>
    )
  }
  return (
    <>
      <button
        className={`bg-blue-500 text-white p-2 rounded-md font-medium hover:brightness-105 hover:shadow-md ${className} `}
        onClick={signIn}
      >
        Sign in
      </button>
    </>
  )
}
