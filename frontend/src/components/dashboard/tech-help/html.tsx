import React from "react";

export default function HtmlHelp() {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-lg">Install via HTML</span>
      <span className="text-xs">
        Include this line at the end of your website's body, just before the {" "}
        {`</body>`} closing tag. If you can only place code in the head, that's
        fine too.
      </span>
      <code>
        <pre>{
            `
<!-- 100% privacy-first analytics -->
<script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
`
            }</pre>
      </code>
    </div>
  );
}
