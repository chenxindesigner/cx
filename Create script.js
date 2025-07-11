// 初始化 LIFF，請確認這是你目前使用的正確 LIFF ID
liff.init({ liffId: "2007736327-ZO83VAmo" })
  .then(() => {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  })
  .catch((err) => {
    alert("❌ LIFF 初始化失敗：" + err);
  });

// 分享 Flex 卡片功能
function sendFlex() {
  const json = document.getElementById("jsonInput").value;
  const altText = document.getElementById("altTextInput").value || "這是一則 Flex 卡片";

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

    if (!liff.isApiAvailable("shareTargetPicker")) {
      alert("⚠️ 目前裝置不支援分享功能，請改用手機");
      return;
    }

    liff.shareTargetPicker([message]);
  } catch (e) {
    alert("❌ JSON 格式錯誤，請重新檢查\n\n" + e.message);
  }
}
