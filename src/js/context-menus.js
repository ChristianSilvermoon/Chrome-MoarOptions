
function wipMessage() {
	alert("Still Getting To That...");
}

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

chrome.contextMenus.onClicked.addListener(function(info, tab) {
	switch(info.menuItemId) {
		case "viewImageMenu":
		case "viewVideoMenu":
        		chrome.tabs.update(tab.id, {url: info.srcUrl});
			break;
		default:
			break;
	}
});
