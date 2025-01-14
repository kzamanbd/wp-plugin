import { createRoot } from '@wordpress/element';
import React from "react";
import Posts from "./components/Post.tsx";

// render react app on #react-app element
const App = () => {

    return (
        <div>
            <Posts />
        </div>
    );
}
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('react-app');
    if(!container) return;
    const root = createRoot(container);
    root.render(<App  />);
});