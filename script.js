// تحقق من توفر Telegram Web Apps API
if (window.Telegram.WebApp) {
  const tg = window.Telegram.WebApp;

  // افتح Web App تلقائيًا
  tg.ready();

  // الحصول على بيانات المستخدم
  const user = tg.initDataUnsafe?.user;

  if (user) {
    // عرض اسم المستخدم
    document.getElementById("username").textContent = user.first_name || "User";
  }

  // زر الإجراء
  document.getElementById("actionButton").addEventListener("click", () => {
    tg.sendData("Action performed!"); // إرسال بيانات إلى البوت
    alert("Action sent to the bot!");
  });
} else {
  alert("Telegram Web Apps API is not available.");
}
