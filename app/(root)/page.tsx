
/*import SearchForm from "../../components/SearchForm";  

import StartupCard , {StartupTypeCard} from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries"; 
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  const params = {search :query || null} 
   
  const{data : posts} = await sanityFetch({query : STARTUPS_QUERY , params})
 

  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">Pitch Your Startup, <br /> Connect with your minds</h1>
        <p className="sub-heading !max-w-3xl">Submit your ideas and win existing investments</p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-extrabold">
          {query ? `I am looking for "${query}"` : 'ALL STARTUP'}
        </p>

        <ul className="card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section> 
      <SanityLive />
    </>
  );
} */ 
  import SearchForm from "@/components/SearchForm";
  import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
  import { STARTUPS_QUERY } from "@/sanity/lib/queries";
  import { sanityFetch, SanityLive } from "@/sanity/lib/live";
  import { auth } from "@/auth";
  
  
  export default async function Home({
    searchParams,
  }: {
    searchParams: Promise<{ query?: string }>;
  }) {
    const query = (await searchParams).query;
    const params = { search: query || null }; 
    const session = await auth() 
    console.log(session?.id) ;
  
  
    const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });
  
    return (
      <>
        <section className="pink_container pattern">
          <h1 className="heading">
            Pitch Your Startup, <br />
            Connect With Entrepreneurs
          </h1>
  
          <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
            Competitions.
          </p>
  
          <SearchForm query={query} />
        </section>
  
        <section className="section_container min-h-screen">
          <p className="text-30-semibold">
            {query ? `Search results for "${query}"` : "All Startups"}
          </p>
      

<ul className="card_grid">
  {Array.isArray(posts) && posts.length > 0 ? (
    posts.map((post: StartupTypeCard, index) => (
      <StartupCard key={post._id ?? `fallback-key-${index}`} post={post} />
    ))
  ) : (
    <p>No startups found.</p>
  )}
</ul>
          
        </section>
  
        <SanityLive />
      </>
    );
  }
