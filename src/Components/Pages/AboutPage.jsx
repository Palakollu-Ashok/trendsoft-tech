import { MetaTags } from "react-meta-tags";
import About from "../About/About";

export default function AboutPage() {
  return (
    <>
      <MetaTags>
        <title>Trendsoft | Aboutus Page</title>
        {/* <meta name="description" content="This is my page description." />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:image" content="path/to/image.jpg" />
        <meta
          property="og:description"
          content="This is the Open Graph description."
        /> */}
      </MetaTags>
      <About />
    </>
  );
}
