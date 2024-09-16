import WhoWeServe from "../WhoWeServe/WhoWeServe";

import Card from "../WhoWeServe/Card";
import Clients from "../WhoWeServe/Clients";
import { MetaTags } from "react-meta-tags";
export default function WhoWeServePage() {
  return (
    <div className="bg-[#193392]">
      <MetaTags>
        <title>Trendsoft | Who we Serve Page</title>
        {/* <meta name="description" content="This is my page description." />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:image" content="path/to/image.jpg" />
        <meta
          property="og:description"
          content="This is the Open Graph description."
        /> */}
      </MetaTags>
      <WhoWeServe />

      <Card />

      {/* <LetsTalk /> */}

      <Clients />
    </div>
  );
}
