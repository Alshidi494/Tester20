// التحقق من وجود Telegram WebApp
if (window.Telegram && window.Telegram.WebApp) {
  // تسجيل بيانات WebApp في Console
  console.log("Raw Init Data:", Telegram.WebApp.initData);
  console.log("Parsed Init Data:", Telegram.WebApp.initDataUnsafe);

  const user = Telegram.WebApp.initDataUnsafe.user;

  if (user) {
      const username = user.username || user.first_name || "مستخدم مجهول";
      document.getElementById("greeting").innerText = `مرحبًا، ${username}!`;
  } else {
      console.log("لم يتم العثور على بيانات المستخدم. عرض الإدخال اليدوي.");
      document.getElementById("manual-input").classList.remove("hidden");
  }
} else {
  console.error("Telegram WebApp غير مهيأ. عرض الإدخال اليدوي.");
  document.getElementById("manual-input").classList.remove("hidden");
}

// حفظ اسم المستخدم المدخل يدويًا
function saveUsername() {
  const manualUsername = document.getElementById("manual-username").value;
  if (manualUsername.trim() !== "") {
      document.getElementById("greeting").innerText = `مرحبًا، ${manualUsername}!`;
  } else {
      alert("يرجى إدخال اسم مستخدم صالح.");
  }
}
