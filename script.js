// التحقق من تشغيل التطبيق داخل Telegram
if (window.Telegram && window.Telegram.WebApp) {
  const user = Telegram.WebApp.initDataUnsafe.user;

  if (user) {
      // عرض اسم المستخدم إذا كان متوفرًا
      const username = user.username || user.first_name || "مستخدم مجهول";
      document.getElementById("greeting").innerText = `مرحبًا، ${username}!`;
      document.getElementById("instructions").innerText = "تم تحميل بيانات حسابك بنجاح.";
  } else {
      // عرض النموذج لإدخال اسم المستخدم يدويًا
      document.getElementById("instructions").innerText = "لم يتم العثور على بيانات المستخدم.";
      document.getElementById("manual-input").classList.remove("hidden");
  }
} else {
  // إذا لم يتم تشغيل التطبيق داخل Telegram
  document.getElementById("greeting").innerText = "يرجى فتح التطبيق داخل Telegram.";
  document.getElementById("instructions").innerText = "";
  document.getElementById("manual-input").classList.remove("hidden");
}

// حفظ اسم المستخدم المدخل يدويًا
function saveUsername() {
  const manualUsername = document.getElementById("manual-username").value;
  if (manualUsername.trim() !== "") {
      document.getElementById("greeting").innerText = `مرحبًا، ${manualUsername}!`;
      document.getElementById("manual-input").classList.add("hidden");
  } else {
      alert("يرجى إدخال اسم مستخدم صالح.");
  }
}
