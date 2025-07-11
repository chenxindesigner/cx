function sendFlex() {
  const jsonText = document.getElementById("jsonInput").value.trim();
  const altText = document.getElementById("altTextInput").value.trim() || "Flex 卡片";

  if (!jsonText) {
    alert("請先貼上 Flex JSON！");
    return;
  }

  try {
    const payload = JSON.parse(jsonText);
    const finalPayload = {
      type: "flex",
      altText: altText,
      contents: payload.contents
    };
    const shareUrl = `https://line.me/R/msg/text/?${encodeURIComponent(JSON.stringify(finalPayload))}`;
    window.open(shareUrl, "_blank");
  } catch (e) {
    alert("JSON 格式錯誤，請檢查！");
  }
}
