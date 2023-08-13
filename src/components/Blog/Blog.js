```javascript
import React from 'react';
import './Blog.scss';

const Blog = () => {
    // This is a placeholder for the blog data. 
    // You might want to replace this with a call to a CMS or some other data source.
    const blogPosts = [
        {
            title: 'My First Blog Post',
            description: 'This is a brief description of my first blog post.',
            image: 'path/to/image.jpg'
        },
        // More blog posts...
    ];

    return (
        <div className="blog">
            <h1>Blog</h1>
            <div className="blog-posts">
                {blogPosts.map((post, index) => (
                    <div key={index} className="blog-post">
                        <img src={post.image} alt={post.title} />
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
```