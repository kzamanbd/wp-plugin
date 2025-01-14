import React from "react";
import store from "../store";
import {useSelect} from "@wordpress/data";

export default function Posts() {
    const posts = useSelect( ( select ) => {
        return select( store ).getPosts();
    }, [] );
    console.log(posts);
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                <li>Post 1</li>
                <li>Post 2</li>
                <li>Post 3</li>
            </ul>
        </div>
    )
}