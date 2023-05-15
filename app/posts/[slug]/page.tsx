import React from 'react'
import { allPosts, Post } from 'contentlayer/generated';

export const generateStaticParams = async () => {
    const paths = allPosts.map((post: Post) => {
        return {slug: post._raw.flattenedPath.replace('posts/', '')}
    });
    return paths
}


function Post({params}:{params: {slug: string}}) {
    const post = allPosts.find((post) => post._raw.flattenedPath === `posts/${params.slug}`)
//   if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
console.log(params)
  return (
    <div>
        <h1>{post?.title}</h1>
        <h1>{post?.body.raw}</h1>
    </div>
  )
}

export default Post