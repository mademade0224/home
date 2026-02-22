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

const content = document.getElementById("content");
const buttons = document.querySelectorAll(".content-menu button");

const charaData = {
  a: "<h2>キャラA</h2><p>元気なドラゴン。</p>",
  b: "<h2>キャラB</h2><p>クールなメイド。</p>",
  c: "<h2>キャラC</h2><p>食いしん坊。</p>"
};

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.chara;

    // 中身を差し替え
    content.innerHTML = charaData[id];

    // URLを変更（リロードなし）
    history.pushState(null, "", "?chara=" + id);
  });
});

if (button && modal && closeBtn) {
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if(e.target === modal){
      modal.style.display = 'none';
    }
  });
}



