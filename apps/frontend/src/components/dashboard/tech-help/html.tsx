import React from "react";
import { Button } from "@/components/ui/button";
// import Link from "next/link";

export default function HtmlHelp() {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-lg text-neutral-800">Install via HTML</span>
      <span className="text-xs text-neutral-800">
        Include this line at the end of your website's body, just before the{" "}
        {`</body>`} closing tag. If you can only place code in the head, that's
        fine too.
      </span>
      <code className="bg-neutral-100 text-zinc-700 w-full overflow-x-scroll px-2 py-2 rounded">
        <pre>
          {`<!-- 99.99% privacy-first analytics -->
<script async src="https://scripts.adityasharma.live/script.js"></script>`}
        </pre>
      </code>
      <div className="text-sm">
        <span>If you encounter issues, don't hesitate to contact us via</span>{" "}
        <Button className="px-0 text-blue-900" variant={"link"}>
          tweeter
        </Button>
      </div>
    </div>
  );
}
