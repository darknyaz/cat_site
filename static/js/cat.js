var scriptTags = document.getElementsByTagName('script');
scriptTag = scriptTags[scriptTags.length - 1];
var parentTag = scriptTag.parentNode;
parentTag.innerText += " JS on Cat site";
