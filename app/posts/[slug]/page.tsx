import React from 'react'
import { allPosts, Post } from 'contentlayer/generated';

export const generateStaticParams = () => {
    const paths = allPosts.map((post: Post) => {
        return {params: {slug:post.url}}
    });
    console.log(paths)
    return paths
}


function Post({params}:{params: {slug: string}}) {
    console.log(params.slug)
    const post = allPosts.find((post: Post) => post.url === `/posts/${params.slug}`);
  return (
    <div>
        <h1>{post?.title}</h1>
        <h1>{post?.body.raw}</h1>
    </div>
  )
}

export default Post