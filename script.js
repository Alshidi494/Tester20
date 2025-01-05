function onTelegramAuth(user) {
  // إخفاء زر تسجيل الدخول
  document.getElementById("telegram-login").classList.add("hidden");

  // عرض بيانات المستخدم
  const userInfo = `
      <h2>مرحبًا، ${user.first_name} ${user.last_name || ''}!</h2>
      <p><strong>معرف المستخدم:</strong> ${user.id}</p>
      <p><strong>اسم المستخدم:</strong> ${user.username ? '@' + user.username : 'غير متوفر'}</p>
  `;
  const userInfoDiv = document.getElementById("user-info");
  userInfoDiv.innerHTML = userInfo;
  userInfoDiv.classList.remove("hidden");
}
