if (window.Telegram && window.Telegram.WebApp) {
  const user = Telegram.WebApp.initDataUnsafe.user;

  if (user) {
      const username = user.username || user.first_name || "مستخدم مجهول";
      document.getElementById("username").innerText = `مرحبًا، ${username}!`;
  } else {
      document.getElementById("username").innerText = "لم يتم العثور على بيانات المستخدم.";
  }
} else {
  document.getElementById("username").innerText = "يرجى فتح التطبيق داخل Telegram.";
}
