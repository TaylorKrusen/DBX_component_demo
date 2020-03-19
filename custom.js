
options = {
    success: function(files) {
        var fileData = JSON.stringify(files[0], undefined, 2);
        document.getElementById("chosenFile").innerHTML = fileData;
        // Turn on if you want Chooser to auto generate an Embedder
        // let embedContainer = document.getElementById("embedContainer")
        // Dropbox.embed({link: files[0].link, appKey: "oyntl3uf6didmij"}, embedContainer);
    },
    cancel: function() {
    },
    linkType: "preview", // or "direct"
    multiselect: false,
    folderselect: true
};

// inject Chooser button
let button = Dropbox.createChooseButton(options);
document.getElementById("chooserContainer").appendChild(button);

// generate embeds on button click
embedButton.onclick = function(){
    let linkToEmbed = document.getElementById("userSharedLink").value;
    let embedContainer = document.getElementById("embedContainer")
    Dropbox.embed({link: linkToEmbed}, embedContainer) 
    document.getElementById("userSharedLink").value = "";
    document.getElementById("embedContainer").appendChild(document.createElement("hr"))         
}