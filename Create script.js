function sendFlex() {
  const json = document.getElementById("jsonInput").value;
  const altText = document.getElementById("altTextInput").value || "這是一則 Flex 卡片";

  alert("⚙️ 已經點擊按鈕");

  if (!json) {
    alert("⚠️ 請貼上 Flex JSON");
    return;
  }

  try {
    const parsed = JSON.parse(json);

    const message = {
      type: "flex",
      altText: altText,
      contents: parsed
    };

    alert("🧪 解析成功，準備檢查分享支援");

    if (!liff.isApiAvailable("shareTargetPicker")) {
      alert("⚠️ 目前裝置不支援分享功能，請改用手機");
      return;
    }

    alert("✅ 支援分享功能，準備開啟 Picker");

    liff.shareTargetPicker([message]);
  } catch (e) {
    alert("❌ JSON 格式錯誤，請重新檢查\n\n" + e.message);
  }
}
