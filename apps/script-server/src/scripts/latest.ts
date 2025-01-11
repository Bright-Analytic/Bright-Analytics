const handleAnalytics = async () => {
  // Client-side: Extract UTM parameters and referrer
  const urlParams = new URLSearchParams(window.location.search);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    url: {
      hostname: window.location.hostname,
      hostnameOriginal: window.location.host,
      path: window.location.pathname,
    },
    dimension: {
      viewportHeight: window.innerHeight,
      viewportWidth: window.innerWidth,
      screenHeight: screen.height,
      screenWidth: screen.width,
    },
    source: {
      utmSource: urlParams.get("utm_source"),
      utmMedium: urlParams.get("utm_medium"),
      utmCampaign: urlParams.get("utm_campaign"),
      utmContent: urlParams.get("utm_content"),
      utmTerm: urlParams.get("utm_term"),
      documentReferrer: window.document.referrer,
    },
  });

  fetch("https://analytics.adityasharma.live/api/v1/", {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

if (window) {
  console.warn("I am still alive.");
  handleAnalytics().catch((err) =>
    console.error("Error occured: ", err.message),
  );
}
