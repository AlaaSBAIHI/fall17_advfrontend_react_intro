import Card from "../components/card"
import Head from "next/head"

const Cards =[{label: "alaa" , text:"sbaihi", imageUrl:"static/js.png"},
 {label: "alaa" , text:"sbaihi", imageUrl:"static/js.png"},
 {label: "alaa" , text:"sbaihi", imageUrl:"static/js.png"},
 {label: "alaa" , text:"sbaihi", imageUrl:"static/js.png"}]

const Page = () => (
  <div>
    <Head>
      <title>My seventh page!</title>
      <link rel="stylesheet" href="static/main.css" />
      <meta name="description" content="Let's make the web great again" />
      <meta name="keywords" content="sample, react, demo, awesome" />
    </Head>
    <h1>My seventh page!</h1>
    <div>
      This my seventh page. Our Footer component is now a function that takes a
      "text" argument. This means that each page can pass different text to
      their own Footer, and illustrates how components promote reuse.
    </div>
    <div className="yellow">This is a paragraph with yellow background.</div>
    
    <div>
      {Cards.map((item, index) =>(<Card label={item.label} text={item.text}  imageUrl={item.imageUrl} />))} 
  </div>
  </div>
)

export default Page
