const handleAnalytics = async () => {
  // Client-side: Extract UTM parameters and referrer
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source");
  const utmMedium = urlParams.get("utm_medium");
  const utmCampaign = urlParams.get("utm_campaign");
  const utmContent = urlParams.get("utm_content");
  const utmTerm = urlParams.get("utm_term");
  const documentReferrer = window.document.referrer;

  const viewportWidth = window.innerWidth;
  const screenHeight = screen.height;
  const viewportHeight = window.innerHeight;
  const screenWidth = screen.width;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const request = await fetch("https://analytics.adityasharma.live/api/v1/", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      url: {
        hostname: window.location.hostname,
        hostname_original: window.location.host,
        path: window.location.pathname,
      },
      dimension: {
        viewportHeight,
        viewportWidth,
        screenHeight,
        screenWidth,
      },
      source: {
        utmSource,
        utmMedium,
        utmCampaign,
        utmContent,
        utmTerm,
        documentReferrer
      },
    }),
  });
  const response = await request.json();
  console.log("Response: ", response);
};

if (window) {
  console.warn("I am still alive.");
  handleAnalytics().catch((err) =>
    console.error("Error occured: ", err.message)
  );
}
