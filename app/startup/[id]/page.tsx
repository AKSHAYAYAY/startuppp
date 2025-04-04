
/*import { Suspense } from "react"; 
import { STARTUPS_BY_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation"; 
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import markdownit from "markdown-it" ;  
import View from "@/components/view";
import {PLAYLIST_BY_SLUG_QUERY} from "@/sanity/lib/queries";
import  StartupCard , { StartupTypeCard   } from "@/components/StartupCard";


import { Skeleton } from "@/components/ui/skeleton";
const md = markdownit();

export const experimental_ppr = true;

const Page = async ({ params }: { params: { id: string } }) => {
    const id = params.id;



    const post = await client.fetch(STARTUPS_BY_ID_QUERY, { id });

    const { select: editorPosts } = await client.fetch(PLAYLIST_BY_SLUG_QUERY, { params: { slug: 'editor-piccks-new' } });


    console.log("Fetched Post:", post);

    // Ensure postData is correctly extracted
    const postData = Array.isArray(post) ? post[0] : post; 
    const parsedContent = md.render(postData?.pitch ||'')

    if (!postData) {
        console.log("No post found, rendering 404.");
        return notFound();
    }


    return (
        <>
            <section className="pink_container pattern !min-h-[230px]">
                <p className="tag">{formatDate(postData?._createdAt)}</p>
                <h1 className="heading">{postData.title}</h1> 
                <p className="sub-heading !max-w-5xl">{postData.description}</p>
            </section>

            <section className="section_container">
                <Image 
                    src={postData.image} 
                    alt="thumbnail"
                    width={100} 
                    height={50} 
                    className="w-full h-auto rounded-xl"
                />  

                <div className="space-y-5 mt-10 max-w-4xl mx-auto">
                    {postData.author && (
                        <div className="flex-between gap-5">
                            <Link href={`/user/${postData.author?._id}`} className="flex gap-2 items-center mb-3">
                                {postData.author?.image && (
                                    <Image 
                                        src={postData.author.image} 
                                        alt="avatar"
                                        width={250} 
                                        height={100}
                                        className="rounded-full drop-shadow-lg"
                                    />
                                )}
                                <div>
                                    <p className="text-20-medium">{postData.author.name}</p>
                                    <p className="text-16-medium !text-black-300">@{postData.author.username}</p>
                                </div>
                            </Link>
                            <p className="category-tag">{postData.category}</p>
                        </div>
                       
                    )}
                 <h3 className="text-30-bold">Pitch Details</h3>
          {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all text-red-600"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
                </div> 
                <hr className="divider" />
                {editorPosts?.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-30-semibold">Editor Picks</p>

            <ul className="mt-7 card_grid-sm">
              {editorPosts.map((post: StartupTypeCard, i: number) => (
                <StartupCard key={i} post={post} />
              ))}
            </ul>
          </div>
        )}

               
           
            <Suspense  fallback={<Skeleton className="view-skeleton"/>} >
            <View id={id} />
            </Suspense> 
            </section> 
        </>
    );
};

export default Page; */

import { Suspense } from "react"; 
import { STARTUPS_BY_ID_QUERY, PLAYLIST_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation"; 
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import markdownit from "markdown-it";  
import View from "@/components/view";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { Skeleton } from "@/components/ui/skeleton";

const md = markdownit();





    const Page = async ({ params }: { params: { id: string } }) => {
        const id = (await params).id;    



    // Fetch post data
    const post = await client.fetch(STARTUPS_BY_ID_QUERY, { id });
    if (!post || post.length === 0) return notFound();

    // Fetch editor picks
    const playlist = await client.fetch(PLAYLIST_BY_SLUG_QUERY, { slug: "editor-piccks-new" });

const editorPosts = playlist?.select || []; // Ensure it's always an array

console.log("Editor Picks:", editorPosts);

    // Ensure postData is correctly extracted
    const postData = Array.isArray(post) ? post[0] : post; 
    const parsedContent = md.render(postData?.pitch || "");

    return (
        <>
            <section className="pink_container pattern !min-h-[230px]">
                <p className="tag">{formatDate(postData?._createdAt)}</p>
                <h1 className="heading">{postData.title}</h1> 
                <p className="sub-heading !max-w-5xl">{postData.description}</p>
            </section>

            <section className="section_container ">
               <Image 
    src={postData.image} 
    alt="thumbnail"
    layout="responsive" /* Automatically adjusts width & height */
    width={800} /* Set actual aspect ratio */
    height={600}
    className="rounded-xl"
/>

                <div className="space-y-5 mt-10 max-w-4xl mx-auto">
                    {postData.author && (
                        <div className="flex-between gap-5">
                            <Link href={`/user/${postData.author?._id}`} className="flex gap-2 items-center mb-3">
                                {postData.author?.image && (
                                    <Image 
                                        src={postData.author.image} 
                                        alt="avatar"
                                        width={100} 
                                        height={50}
                                        className="rounded-full drop-shadow-lg"
                                    />
                                )}
                                <div>
                                    <p className="text-20-medium">{postData.author.name}</p>
                                    <p className="text-16-medium !text-black-300">@{postData.author.username}</p>
                                </div>
                            </Link>
                            <p className="category-tag">{postData.category}</p>
                        </div>
                    )}

                    <h3 className="text-30-bold">Pitch Details</h3>
                    {parsedContent ? (
                        <article
                            className="prose max-w-4xl font-work-sans break-all text-black"
                            dangerouslySetInnerHTML={{ __html: parsedContent }}
                        />
                    ) : (
                        <p className="no-result">No details provided</p>
                    )}
                </div> 

                <hr className="divider" />

                {editorPosts?.length > 0 && (
                    <div className="max-w-4xl mx-auto">
                        <p className="text-30-semibold">Editor Picks</p>

                        <ul className="mt-7 card_grid-sm">
                            {editorPosts.map((post: StartupTypeCard, i: number) => (
                                <StartupCard key={i} post={post} />
                            ))}
                        </ul>
                    </div>
                )}

                <Suspense fallback={<Skeleton className="view-skeleton"/>}>
                    <View id={id} />
                </Suspense>
            </section> 
        </>
    );
};

export default Page;


