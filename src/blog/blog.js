import React from 'react';
import Container from "@material-ui/core/Container";
import BlogBanner from "./blogBanner";
import Content from "./Content";

const Blog = () => {
    return (
        <div>
            <Container className='blogBanner'>
                <BlogBanner/>
            </Container>
            <Container>
                <Content/>
            </Container>
        </div>
    );
};

export default Blog;