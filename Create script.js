// ✅ Debug 訊息區：會顯示目前是不是在 LINE LIFF 裡
window.addEventListener("DOMContentLoaded", function () {
  const debugBox = document.createElement("div");
  debugBox.id = "debugBox";
  debugBox.style = "padding: 10px; background: #fff7d5; color: #333; border: 1px solid #ccc; margin-bottom: 10px;";
  document.body.insertBefore(debugBox, document.body.firstChild);

  liff.init({ liffId: "2007736327-ZO83VAmo" })
    .then(() => {
      let msg = "✅ LIFF 初始化成功";
      msg += "<br>🔍 liff.isInClient(): " + liff.isInClient();
      msg += "<br>🔍 liff.isApiAvailable('shareTargetPicker'): " + liff.isApiAvailable("shareTargetPicker");
      debugBox.innerHTML = msg;
    })
    .catch((err) => {
      debugBox.innerHTML = "❌ LIFF 初始化失敗：" + err;
    });
});

// ✅ 原本 Flex 分享功能
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
      alert("⚠️ 裝置不支援分享功能，請用手機 LINE 開啟");
      return;
    }

    liff.shareTargetPicker([message]);
  } catch (e) {
    alert("❌ JSON 格式錯誤，請重新檢查\n\n" + e.message);
  }
}
