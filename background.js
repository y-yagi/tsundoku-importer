const url = "https://asia-northeast1-yy-apps.cloudfunctions.net/CreateTodo"

function onClickHandler(info, tab) {
  const obj = { url: tab.url, title: tab.title, id: chrome.runtime.id };
  const body = JSON.stringify(obj);
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  };

  window.fetch(url, {
    method: "post",
    headers: headers,
    body: body
  }).then((response) => {
    console.log(response);
  });
}

chrome.contextMenus.onClicked.addListener(onClickHandler);
chrome.contextMenus.create({title: "この本を登録する"});
