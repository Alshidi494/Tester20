// التحقق من أن Telegram Web App متاح
if (window.Telegram.WebApp) {
  // الحصول على بيانات المستخدم
  const user = Telegram.WebApp.initDataUnsafe.user;

  // عرض اسم المستخدم
  if (user) {
      document.getElementById("username").innerText = `مرحبًا، ${user.username || user.first_name}!`;
  } else {
      document.getElementById("username").innerText = "مرحبًا، لم يتم العثور على اسم المستخدم!";
  }
}
