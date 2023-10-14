import React from "react";

const About = () => {
  return (
    <>
      <div className="about blogs content">
        <h1>About</h1>
        <p>
          Poem Pad is a web application for those of us that love anything Hip-Hop, poetry, or spoken word. It is a platform for creators and hobbyists alike to write poems and share with everyone else. This application is a solution for people that may have always needed a scratch pad to "write down their rhymes," or a place to record their thoughts.
        </p>
        <h1>History</h1>
        <p>First established in September 2021, Poem Pad has grown to become a community for authors to showcase their prowess. The platform is continuously maintained to use the best technology for each use case. For example, at its dawn, the user interface was based on EJS templates but more recently, it has been upgraded to make use of React components, state, and hooks to deliver an exceptional and faster user experience.</p>  
        <h1>Guidelines</h1>  
        <p>These are just general guidelines to make the application a more safe place for everyone.</p>
        <ol>
          <li>Do not delete a poem that was written by another author.</li>
          <li>Only write a poem that you are comfortable with other people reading.</li>
          <li>The information shared and retrieved through this website is for recreational purposes only.</li>
          <li>By all means, try not to share personally identifiable information considering that this application is accessibly by anyone that has a link.</li>
          <li>The information in this application should not be used for commercial purposes.</li>
          <li>Despite the creative nature of poetry, any written content on this site should not intentionally promote hate-speech, racism, sexism, political statements, or discrimination.</li>
        </ol>
        <h1>Data Protection</h1>
        <p>
          Referring to list item number 4 above, the data processed in this application is publicly available and as such writers should be aware of this. All the data is kept safe in remote data centers and can only be accessed by individuals with server authorization. 
        </p>
        <p>
          In addition, your interaction with the like button, represented by a heart icon is stored inside the browser using a technology similar to a cookie. This is to ensure that your response is persistent and this also ensures that users do not like a poem more than once.
        </p>
      </div>
    </>
  );
};

export default About;
