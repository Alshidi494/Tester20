if (window.Telegram && window.Telegram.WebApp) {
  const user = Telegram.WebApp.initDataUnsafe.user;

  if (user) {
      fetch(`https://your-backend-url.com/get_user_points?user_id=${user.id}`)
          .then(response => response.json())
          .then(data => {
              document.getElementById("greeting").innerText = `مرحبًا، ${user.username || user.first_name}! لديك ${data.points} نقطة.`;
          })
          .catch(error => {
              console.error("Error fetching user points:", error);
              document.getElementById("greeting").innerText = `مرحبًا، ${user.username || user.first_name}!`;
          });
  } else {
      document.getElementById("greeting").innerText = "لم يتم العثور على بيانات المستخدم.";
  }
}
