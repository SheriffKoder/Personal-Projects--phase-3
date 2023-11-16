// import React from 'react'

"use client";

//05.01
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";   //to know if we are logged in
import { useRouter } from "next/navigation";  //to navigate back to home

//05.01
//a reuse component
//we are creating it separately because we want to pass in props like name
//and it can be my profile or somebody else's profile
import Profile from "@components/Profile";


//05.01
//pass the prompts as an array into data
const MyProfile = () => {

    //04.02, 05.03
    // [] to use it at the start, initially when the page loads
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        const fetchPosts = async () => {
        //we only want to fetch the posts from that specific user
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();

        setPosts(data);
        }

        if (session?.user.id) fetchPosts();
    },[]);


    //05.02
    const handleEdit = () => {

    }

    //05.02
    const handleDelete = async () => {

    }


    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile;