import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/solid"
import { SearchIcon } from "@heroicons/react/solid"




export default function Home() {
  return (
    <div>
      <Head>
        <title>Google clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col items-center mt-40">
        <Image
          width="300"
          height="100"
          objectFit="cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          alt="google"
        />
        <div className="flex mt-5 w-full border mx-auto max-w-[90%] border-gray-200  hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input type="text" className="flex-grow focus:outline-none " />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className=" flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button>Google Search</button>
          <button> I am feeling lucky</button>
        </div>
      </form>

      {/* Footer */}
    </div>
  )
}
