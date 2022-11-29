import React from 'react'
import Header from '../../components/Header'
import {getProviders, signIn} from 'next-auth/react'

//client side
export default function signin({providers}) {
  return (
    <>
      <Header />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col text-center items-center">
            <picture>
              <img
                className='w-52 object-cover'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                alt="google"
              />
            </picture>
            <p className='text-sm italic m-5'>This website is used for learning purpose</p>
            <button className='bg-red-400 rounded-lg text-white p-3 hover:bg-red-5 00' onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}


//server side
//it is faster to get server side rendering to get the 
//auth providers
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {providers}
  }
}