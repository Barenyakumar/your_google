import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import Response from "../Response";


export default function search({ results }) {
  console.log(results);
  const router = useRouter()
  return (
    <div>
      {/* head */}
      <Head>
        <title>{ router.query.term}</title>
      </Head>

      {/* search-header */}
      <SearchHeader />

      {/* search-results */}
      <SearchResults results={results} />
    </div>
  )
}

//getServerSideProps i built in function , context is similar to router but used for server side
export async function getServerSideProps(context) {
  const mockData = true
  const data = mockData ? Response : 
    await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyA5XzGzkO9xQ-phdOFTs192INxHweHfBNg
&cx=d562a6696b4a74ee0&q=${context.query.term}${
      context.query.searchType && "&searchType=image"
    }`).then((response) => response.json())
  
  return {
    props: {
      results : data
    }
  }
}