
const ImageMenu = chrome.contextMenus.create({
	"id": "viewImageMenu",
	"title": "View Image",
	"contexts": [ "image" ]
})

const videoMenu = chrome.contextMenus.create({
	"id": "viewVideoMenu",
	"title": "View Video",
	"contexts": [ "video" ]
})

const copyWithoutParametersMenu = chrome.contextMenus.create({
	"id": "copyURLwithoutParameters",
	"title": "Copy Current Address Without Parameters",
	"contexts": [ "page" ]
})

chrome.contextMenus.onClicked.addListener(function(info, tab) {
	switch(info.menuItemId) {
		case "viewImageMenu":
		case "viewVideoMenu":
        		chrome.tabs.update(tab.id, {url: info.srcUrl});
			break;

		case "copyURLwithoutParameters":
			console.log(tab);
			copyTextToClipboard(tab.url.split("?")[0]);
			break;
		default:
			break;
	}
});


function copyTextToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;

  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.blur();
  document.body.removeChild(copyFrom);
}
