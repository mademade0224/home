document.oncontextmenu = function() {
   alert("右クリックは禁止です！");
   return false;
};

window.addEventListener('load', function() {
  const loading = document.getElementById('loading');
  loading.style.display = 'none';
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
