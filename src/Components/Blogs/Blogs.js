import React from "react";
import "animate.css";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold animate__heartBeat pt-5">
        Here you can find my Blogs !!
      </h1>
      <br />
      <div>
        <div className="border-dashed border-2 border-amber-900  rounded-md p-10 m-5 animate__animated animate__backInDown">
          <h2 className="font-bold text-2xl pb-4">What is Context API?</h2>
          <p>
            Context API can solve many problems that modern applications face,
            related to state management, for example, props drilling. Many
            solutions can solve state management issues and props drilling, but
            they may increase your build size and compromise your app
            performance. Context API is a React built-in feature, so we don’t
            have to worry about performance overhead and library installing
            issues. The props drilling problem occurs when you pass a
            prop somewhere down the tree. When a project grows, data passing
            through props becomes chaotic, making the code more vulnerable and
            complex. To tackle this problem, we use Context API. 
          </p>
        </div>
        <div className="border-dashed border-2 border-amber-900  rounded-md p-10 m-5 animate__heartBeat">
          <h2 className="font-bold text-2xl pb-4">What is Semantic Tag?</h2>
          <p>
            The HTML semantics refers to the tags that provide meaning to an
            HTML page rather than just presentation. It makes HTML more
            comprehensible by better defining the different sections and layout
            of web pages. The core characteristic of a semantic element is that
            it clearly communicated its meaning to both the developer and the
            browser. These elements clearly define its content.The semantic HTML
            tags help the search engines and other user devices to determine the
            importance and context of web pages. 
          </p>
        </div>
        <div className="border-dashed border-2 border-amber-900  rounded-md p-10 m-5 animate__animated animate__backInUp">
          <h2 className="font-bold text-2xl pb-4">
            Difference between Inline Block and Inline Elements
          </h2>
          <p>
            An Inline block-level element always starts on a new line, and the
            browsers automatically add some space (a margin) before and after
            the element. A block-level element always takes up the full width
            available (stretches out to the left and right as far as it can).
            Whereas an inline element does not start on a new line. An inline
            element only takes up as much width as necessary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
