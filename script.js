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

// ボタンとモーダルの対応リスト
const modalData = [
  { btn: 'openModalA', modal: 'modalOverlayA', close: 'closeModalA' },
  { btn: 'openModalB', modal: 'modalOverlayB', close: 'closeModalB' },
  { btn: 'openModalC', modal: 'modalOverlayC', close: 'closeModalC' }
];

// ループでイベント設定
modalData.forEach(item => {
  const button = document.getElementById(item.btn);
  const modal = document.getElementById(item.modal);
  const closeBtn = document.getElementById(item.close);

  // ボタン押したら表示
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  // 閉じるボタン押したら非表示
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // モーダル外クリックで非表示
  modal.addEventListener('click', (e) => {
    if(e.target === modal){
      modal.style.display = 'none';
    }
  });
});
