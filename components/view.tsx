/*import Ping from "./ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
//import { writeClient } from "@/sanity/lib/write-client";
//import { unstable_after as after } from "next/server";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
};
export default View;*/
import Ping from "./ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

const View = async ({ id }: { id: string }) => {
  if (!id) {
    console.error("❌ Error: ID is undefined or missing");
    return <p className="view-text">Views: Error</p>;
  }

  try {
    console.log(`Fetching views for ID: ${id}`);

    const data = await client.withConfig({ useCdn: false }).fetch(STARTUP_VIEWS_QUERY, { id });

    if (!data) {
      console.warn(`⚠️ Warning: No data received for ID: ${id}`);
      return <p className="view-text">Views: 0</p>;
    }

    const { views: totalViews = 0 } = data;

    return (
      <div className="view-container">
        <div className="absolute -top-2 -right-2">
          <Ping />
        </div>

        <p className="view-text">
          <span className="font-black">Views: {totalViews}</span>
        </p>
      </div>
    );
  } catch (error) {
    console.error("❌ Error fetching views:", error);
    return <p className="view-text">Views: Error</p>;
  }
};

export default View;
