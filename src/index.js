import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を初期化し、空にする
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグ生成
  const completedButton = document.createElement("button");
  completedButton.innerText = "完了";
  completedButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completedButton.parentNode;

    //Todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completedButton);
  div.appendChild(deleteButton);

  //未完了のlistに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を消去
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
