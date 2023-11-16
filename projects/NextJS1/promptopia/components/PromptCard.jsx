// import React from 'react'

//04.04
"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

 
const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete}) => {


  const [copied, setCopied] = useState("");

  //04.05
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=> setCopied("", 3000)); //reset the setCopied after 3 seconds
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        

        {/* logo and usename */}
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          
          <Image 
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>

            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>

          </div>

        </div>


        {/* copy text icon */}
        {/* //04.05 */}
        <div className="copy_btn" onClick={handleCopy}>
          {/* we want to show a button to copy that actual prompt
          the image src will depend whether the prompt has been copied or not already
          for that we used the copy state above */}
          <Image
            src={(copied === post.prompt )? "/icons/tick.svg" : "/icons/copy.svg"}
            width={12} height={12}
          />

        </div>



      </div>


      <p className="my-4 font-satoshi text-sm text-gray-700">
        {post.prompt}
      </p>

      {/* when clicking on the tag can see all related posts/similar tags */}
      <p className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={()=> handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>

    </div>
  )
}

export default PromptCard;