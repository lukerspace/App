
// //檢查是否有登入，若get user api有資料，秀出signoutBtn
function signinCheck() {
    fetch(userAPI)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          // console.log(data, "登入成功顯示圖表");
          document.getElementById("main").classList.remove("hide");
          document.getElementById("bh").classList.remove("hide");
          document.getElementById("ivdelta").classList.remove("hide");
          document.getElementById("ivdate").classList.remove("hide");
          document.getElementById("netgex").classList.remove("hide");
          document.getElementById("gexwall").classList.remove("hide");
          document.getElementById("mettable").classList.remove("hide");
          document.getElementById("dateselector").classList.remove("hide");
          document.getElementById("strategyselector").classList.remove("hide");
          dropdownList();
        } else {
          console.log("Signing Auth");
        }
      });
  }
  // //進入頁面後先檢查使用者有沒有登入
  // Call the signinCheck function after DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    signinCheck();
  });