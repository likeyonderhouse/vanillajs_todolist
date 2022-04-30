// 入力した内容を未完了リストに追加
const onClickAdd = () => {
  const inputText = document.getElementById("inputAdd").value;
  createTodoList(inputText);
  // alert(`リスト"${inputText}"を追加しました！`);
  document.getElementById("inputAdd").value = "";
};

// 未完了リストに新しくTODOリストを追加
const createTodoList = (text) => {
  // リストのテキストを生成
  const listText = document.createElement("p");
  listText.innerText = text; // 入力内容をテキストに反映

  // 完了ボタン生成
  const btnComp = document.createElement("button");
  btnComp.innerText = "完了";
  btnComp.addEventListener("click", () => {
    // 該当リストを未完了リストから削除ß
    removeFlomList(btnComp.parentNode);

    const moveTarget = btnComp.parentNode;
    // 該当リストのテキストを取得
    const moveText = moveTarget.firstElementChild.innerText;
    // 該当リスト(li要素)の中身を初期化(=中身消す)
    moveTarget.textContent = null;

    // 完了済みリストに該当リストを追加
    // pタグ生成
    const listText = document.createElement("p");
    // pタグのテキストに先ほどの該当リストのテキストを代入
    listText.innerText = moveText;
    // ボタンタグ生成
    const btnReturn = document.createElement("button");
    btnReturn.innerText = "未完了にする";
    btnReturn.addEventListener("click", () => {
      returnFlomList(btnReturn.parentNode);
      createTodoList(moveText);
    });

    moveTarget.appendChild(listText);
    moveTarget.appendChild(btnReturn);

    document.getElementById("listComp").appendChild(moveTarget);
  });

  // 削除ボタン生成
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "削除";
  btnDelete.addEventListener("click", () => {
    removeFlomList(btnDelete.parentNode);
  });

  // これらを内包するli要素を生成
  const li = document.createElement("li");
  // リスト要素に先ほど作成した要素を内包していく
  li.appendChild(listText);
  li.appendChild(btnComp);
  li.appendChild(btnDelete);

  // ulタグに生成したli要素を追加
  document.getElementById("listYet").appendChild(li);
};

// 未完了リストから該当li要素を削除
const removeFlomList = (target) => {
  document.getElementById("listYet").removeChild(target);
};
// 完了済みリストから該当li要素を削除
const returnFlomList = (target) => {
  document.getElementById("listComp").removeChild(target);
};

// 追加クリック時にonClickAddを実行
document.getElementById("btnAdd").addEventListener("click", () => onClickAdd());
