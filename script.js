document.oncontextmenu = function() {
   alert("右クリックは禁止です！");
   return false;
};

window.addEventListener('load', function() {
  const loading = document.getElementById('loading');

  const minDisplayTime = 2000; // 2秒は必ず表示
  const startTime = Date.now();

  function hideLoading() {
    const elapsed = Date.now() - startTime;
    const remaining = minDisplayTime - elapsed;

    if (remaining > 0) {
      setTimeout(() => {
        loading.style.display = 'none';
      }, remaining);
    } else {
      loading.style.display = 'none';
    }
  }

  hideLoading();
});

