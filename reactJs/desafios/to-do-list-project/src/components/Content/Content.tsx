import { useState } from "react";

interface CommentProps {
  content: string;
}

function Content({ content }: CommentProps) {


    return (
        <div className="content">
        <h1>Content</h1>
        <p>
            {content}
        </p>
        </div>
    );
}

export default Content;