function toBool(str) {
  if ("false" === str) {
    return false;
  } else {
    return str;
  }
}

// Saves options to localStorage.
function save_options() {
  localStorage["extensions"] = document.getElementById("extensions").checked;
  localStorage["history"] = document.getElementById("history").checked;
  localStorage["downloads"] = document.getElementById("downloads").checked;
  localStorage["bookmarks"] = document.getElementById("bookmarks").checked;
  localStorage["settings"] = document.getElementById("settings").checked;

  localStorage["network"] = document.getElementById("network").checked;
  localStorage["dns"] = document.getElementById("dns").checked;
  localStorage["plugins"] = document.getElementById("components").checked;
  localStorage["cache"] = document.getElementById("cache").checked;
  localStorage["sync"] = document.getElementById("sync").checked;
  localStorage["histograms"] = document.getElementById("histograms").checked;
  localStorage["labs"] = document.getElementById("flags").checked;

  localStorage["appcache-internals"] = document.getElementById("appcache-internals").checked;
  localStorage["apps"] = document.getElementById("apps").checked;

  localStorage["about"] = document.getElementById("about").checked;
  localStorage["version"] = document.getElementById("version").checked;
  localStorage["credits"] = document.getElementById("credits").checked;

  // Update status to let user know options were saved.*/
  var status = document.getElementById("status");
  status.innerHTML = "Options saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 1000);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
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

  document.getElementById("extensions").checked = toBool(localStorage["extensions"]);
  document.getElementById("history").checked = toBool(localStorage["history"]);
  document.getElementById("downloads").checked = toBool(localStorage["downloads"]);
  document.getElementById("bookmarks").checked = toBool(localStorage["bookmarks"]);
  document.getElementById("settings").checked = toBool(localStorage["settings"]);

  document.getElementById("network").checked = toBool(localStorage["network"]);
  document.getElementById("dns").checked = toBool(localStorage["dns"]);
  document.getElementById("components").checked = toBool(localStorage["plugins"]);
  document.getElementById("cache").checked = toBool(localStorage["cache"]);
  document.getElementById("sync").checked = toBool(localStorage["sync"]);
  document.getElementById("histograms").checked = toBool(localStorage["histograms"]);
  document.getElementById("flags").checked = toBool(localStorage["labs"]);

  document.getElementById("appcache-internals").checked = toBool(localStorage["appcache-internals"]);
  document.getElementById("apps").checked = toBool(localStorage["apps"]);

  document.getElementById("about").checked = toBool(localStorage["about"]);
  document.getElementById("version").checked = toBool(localStorage["version"]);
  document.getElementById("credits").checked = toBool(localStorage["credits"]);
}

document.addEventListener("DOMContentLoaded", function(evt) {
  console.log("Option Start.");
  restore_options();
  document.getElementById("restore").addEventListener('click', save_options);
} );
