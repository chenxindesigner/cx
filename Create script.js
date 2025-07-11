function sendFlex() {
  const json = document.getElementById("jsonInput").value;
  const altText = document.getElementById("altTextInput").value || "Flex卡片預覽";

  if (!json) {
    alert("請貼上 Flex JSON");
    return;
  }

  try {
    const flex = JSON.parse(json);
    const message = {
      type: "flex",
      altText: altText,
      contents: flex.contents || flex
    };

    const encoded = encodeURIComponent(JSON.stringify(message, null, 0));
    const url = `https://line.me/R/msg/text/?${encoded}`;
    window.open(url, "_blank");
  } catch (e) {
    alert("JSON 格式錯誤，請確認內容正確！");
  }
}
