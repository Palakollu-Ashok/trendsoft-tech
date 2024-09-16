import { MetaTags } from "react-meta-tags";
import GetStart from "../GetStarted/GetStart";

export default function GetStartPage() {
  return (
    <>
      <MetaTags>
        <title>Trendsoft | ContactUs Page</title>
        {/* <meta name="description" content="This is my page description." />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:image" content="path/to/image.jpg" />
        <meta
          property="og:description"
          content="This is the Open Graph description."
        /> */}
      </MetaTags>
      <GetStart />
    </>
  );
}
