const SESSION_ID_KEY = "bs-id";

const handleAnalytics = async () => {
  const urlParams = new URLSearchParams(window.location.search);

  function checkIfUnique() {
    let bsid = sessionStorage.getItem(SESSION_ID_KEY);
    if (!bsid) {
      sessionStorage.setItem(SESSION_ID_KEY, crypto.randomUUID());
      return "1";
    } else {
      return "0";
    }
  }

  function getSessionId() {
    let bsid = sessionStorage.getItem(SESSION_ID_KEY);
    if(bsid) return bsid;
    const id = crypto.randomUUID();
    if (!bsid) sessionStorage.setItem(SESSION_ID_KEY, id);
    return id;
  }

  async function hashPageId(input: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  async function generatePageId() {
    const fullPath = `${window.location.pathname}${window.location.search}`;
    return await hashPageId(fullPath);
  }

  var params = new URLSearchParams({
    hostname: window.location.hostname,
    ua: navigator.userAgent,
    https: window.location.protocol === "https:" ? "1" : "0",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone.toString(),
    path: window.location.pathname,
    viewport_width: window.innerWidth.toString(),
    viewport_height: window.innerHeight.toString(),
    language: navigator.language,
    screen_width: screen.width.toString(),
    screen_height: screen.height.toString(),
    unique: checkIfUnique(),
    uid: crypto.randomUUID(),
    type: "pageview",
    time: Date.now().toString(),
    referrer: document.referrer.toString(),
  });

  function appendParam(key: string, value: string | null) {
    if (value) params.append(key, value);
  }

  appendParam("page_id", await generatePageId());
  appendParam("session_id", getSessionId());
  appendParam("utm_source", urlParams.get("utm_source"));
  appendParam("utm_medium", urlParams.get("utm_medium"));
  appendParam("utm_campaign", urlParams.get("utm_campaign"));
  appendParam("utm_content", urlParams.get("utm_content"));
  appendParam("utm_term", urlParams.get("utm_term"));
  appendParam("document_referrer", window.document.referrer);

  const url = `https://analytics.adityasharma.live/api/v1/simple.gif?${params.toString()}`;

  // const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");

  fetch(url, {
    method: "GET"
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

if (window) {
  console.warn("I am still alive.");
  handleAnalytics().catch((err) =>
    console.error("Error occured: ", err.message)
  );
}
