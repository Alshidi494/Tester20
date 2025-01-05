if (window.Telegram.WebApp) {
  console.log("Telegram WebApp موجود");
  console.log("بيانات المستخدم:", window.Telegram.WebApp.initDataUnsafe);
} else {
  console.error("Telegram WebApp غير متاح.");
}
