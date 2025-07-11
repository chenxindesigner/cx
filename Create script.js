function generateUrl() {
  const altText = document.getElementById("alt").value;
  const json = document.getElementById("json").value;

  const encoded = encodeURIComponent(
    JSON.stringify({
      type: "flex",
      altText: altText || "Flex訊息",
      contents: JSON.parse(json)
    })
  );

  const liffUrl = `https://liff.line.me/1645278921-kWRPP32q/?type=flex&data=${encoded}`;
  window.open(liffUrl, "_blank");
}
