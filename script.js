if (window.Telegram && window.Telegram.WebApp) {
  const user = Telegram.WebApp.initDataUnsafe.user;

  if (user) {
      const username = user.username || user.first_name || "مستخدم مجهول";
      document.getElementById("username").innerText = `مرحبًا، ${username}!`;
  } else {
      document.getElementById("username").innerText = "لم يتم العثور على بيانات المستخدم.";
      document.getElementById("manual-input").style.display = "block";
  }
} else {
  document.getElementById("username").innerText = "يرجى فتح التطبيق داخل Telegram.";
  document.getElementById("manual-input").style.display = "block";
}

// حفظ اسم المستخدم المدخل يدويًا
function saveUsername() {
  const manualUsername = document.getElementById("manual-username").value;
  if (manualUsername.trim() !== "") {
      document.getElementById("username").innerText = `مرحبًا، ${manualUsername}!`;
      document.getElementById("manual-input").style.display = "none";
  } else {
      alert("يرجى إدخال اسم مستخدم صالح.");
  }
}
