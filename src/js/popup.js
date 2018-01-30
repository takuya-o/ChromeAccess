function toBool(str) {
  if ("false" === str) {
    return false;
  } else {
    return str;
  }
}

function build_list() {
  if (!localStorage["extensions"]) {	//fresh install, set all values to true
    localStorage["extensions"] = true;
    localStorage["history"] =  true;
    localStorage["downloads"] = true;
    localStorage["bookmarks"] = true;
    localStorage["settings"] = true;

    localStorage["network"] = true;
    localStorage["dns"] = true;
    localStorage["plugins"] = true;
    localStorage["cache"] = true;
    localStorage["sync"] = true;
    localStorage["histograms"] = true;
    localStorage["labs"] = true;

    localStorage["appcache-internals"] = true;
    localStorage["apps"] = true;

    localStorage["about"] = true;
    localStorage["version"] = true;
    localStorage["credits"] = true;
  }
  if (toBool(localStorage["extensions"])) {
    document.getElementById('extensions').style.display = 'block';
  } else{
    document.getElementById('extensions').style.display = 'none';
  }
  if (toBool(localStorage["history"])) {
    document.getElementById('history').style.display = 'block';
  } else {
    document.getElementById('history').style.display = 'none';
  }
  if (toBool(localStorage["downloads"])) {
    document.getElementById('downloads').style.display = 'block';
  } else {
    document.getElementById('downloads').style.display = 'none';
  }
  if (toBool(localStorage["bookmarks"])) {
    document.getElementById('bookmarks').style.display = 'block';
  } else {
    document.getElementById('bookmarks').style.display = 'none';
  }
  if (toBool(localStorage["settings"])) {
    document.getElementById('settings').style.display = 'block';
  } else {
    document.getElementById('settings').style.display = 'none';
  }

  if (toBool(localStorage["network"])) {
    document.getElementById('network').style.display = 'block';
  } else {
    document.getElementById('network').style.display = 'none';
  }
  if (toBool(localStorage["dns"] )) {
    document.getElementById('dns').style.display = 'block';
  } else {
    document.getElementById('dns').style.display = 'none';
  }
  if (toBool(localStorage["plugins"] )) {
    document.getElementById('components').style.display = 'block';
  } else {
    document.getElementById('components').style.display = 'none';
  }
  if (toBool(localStorage["cache"])) {
    document.getElementById('cache').style.display = 'block';
  } else {
    document.getElementById('cache').style.display = 'none';
  }
  if (toBool(localStorage["sync"])) {
    document.getElementById('sync').style.display = 'block';
  } else {
    document.getElementById('sync').style.display = 'none';
  }
  if (toBool(localStorage["histograms"])) {
    document.getElementById('histograms').style.display = 'block';
  } else {
    document.getElementById('histograms').style.display = 'none';
  }
  if (toBool(localStorage["labs"])) {
    document.getElementById('flags').style.display = 'block';
  } else {
    document.getElementById('flags').style.display = 'none';
  }

  if (toBool(localStorage["appcache-internals"])) {
    document.getElementById('appcache-internals').style.display = 'block';
  } else {
    document.getElementById('appcache-internals').style.display = 'none';
  }
  if (toBool(localStorage["apps"])) {
    document.getElementById('apps').style.display = 'block';
  } else {
    document.getElementById('apps').style.display = 'none';
  }

  if (toBool(localStorage["about"])) {
    document.getElementById('about').style.display = 'block';
  } else {
    document.getElementById('about').style.display = 'none';
  }
  if (toBool(localStorage["version"] )) {
    document.getElementById('version').style.display = 'block';
  } else {
    document.getElementById('version').style.display = 'none';
  }
  if (toBool(localStorage["credits"])) {
    document.getElementById('credits').style.display = 'block';
  } else {
    document.getElementById('credits').style.display = 'none';
  }
  hr_build();
}

function hr_build()
{
  var blockLast = (toBool(localStorage["version"])
                    || toBool(localStorage["credits"])
                    || toBool(localStorage["about"]));
  var blockOne = (toBool(localStorage["bookmarks"])
                  || toBool(localStorage["extensions"])
                  || toBool(localStorage["history"])
                  || toBool(localStorage["downloads"])
                  || toBool(localStorage["settings"]));
  var blockTwo = (toBool(localStorage["network"])
                  || toBool(localStorage["dns"])
                  || toBool(localStorage["cache"])
                  || toBool(localStorage["plugins"])
                  || toBool(localStorage["sync"])
                  || toBool(localStorage["histograms"])
                  || toBool(localStorage["labs"]));
  var blockThree = (toBool(localStorage["appcache-internals"])
                    || toBool(localStorage["apps"]));
  //TODO: hr3 controle

  if (blockOne && blockTwo && blockLast) {
    return;
  }
  if (!blockOne && blockTwo && blockLast) {
    document.getElementById('hr1').style.display = 'none';
  }
  if (!blockOne && !blockTwo && blockLast) {
    document.getElementById('hr1').style.display = 'none';
    document.getElementById('hr2').style.display = 'none';
  }
  if (blockOne && !blockTwo && blockLast) {
    document.getElementById('hr1').style.display = 'none';
  }
  if (blockOne && !blockTwo && !blockLast) {
    document.getElementById('hr1').style.display = 'none';
    document.getElementById('hr2').style.display = 'none';
  }
  if (blockOne && blockTwo && !blockLast) {
    document.getElementById('hr2').style.display = 'none';
  }
  if (!blockOne && blockTwo && !blockLast) {
    document.getElementById('hr1').style.display = 'none';
    document.getElementById('hr2').style.display = 'none';
  }
  if (!blockOne && !blockTwo && !blockLast) {
    document.getElementById('hr1').style.display = 'none';
    document.getElementById('hr2').style.display = 'none';
  }
}

var temp;
function openTab(temp) {
  chrome.tabs.create({url: temp});
}

function openTabEvent(event) {
  var text = event.currentTarget.getElementsByClassName("left").item(0).innerText;
  var url = text.slice(1, text.length-1);
  openTab(url);
}

window.addEventListener("load", function(evt) {
  console.log("Popup Start.");
  build_list();
  document.getElementById("extensions").addEventListener('click', openTabEvent);
  document.getElementById("history").addEventListener('click', openTabEvent);
  document.getElementById("downloads").addEventListener('click', openTabEvent);
  document.getElementById("bookmarks").addEventListener('click', openTabEvent);
  document.getElementById("settings").addEventListener('click', openTabEvent);

  document.getElementById("network").addEventListener('click', openTabEvent);
  document.getElementById("dns").addEventListener('click', openTabEvent);
  document.getElementById("components").addEventListener('click', openTabEvent);
  document.getElementById("cache").addEventListener('click', openTabEvent);
  document.getElementById("sync").addEventListener('click', openTabEvent);
  document.getElementById("histograms").addEventListener('click', openTabEvent);
  document.getElementById("flags").addEventListener('click', openTabEvent);

  document.getElementById("appcache-internals").addEventListener('click', openTabEvent);
  document.getElementById("apps").addEventListener('click', openTabEvent);

  document.getElementById("about").addEventListener('click', openTabEvent);
  document.getElementById("version").addEventListener('click', openTabEvent);
  document.getElementById("credits").addEventListener('click', openTabEvent);
} );
