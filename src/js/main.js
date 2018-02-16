window.onload = function () {

    var tableElement = document.querySelectorAll("#_YTc table tr");

    for (var i = 0; i < tableElement.length; i++) {

        var text = "View Image";
        var textNode = document.createTextNode(text);
        var spanElement = document.createElement("span");
        spanElement.appendChild(textNode);

        var anchorElement = document.createElement("a");
        anchorElement.appendChild(spanElement);

        anchorElement.classList.add("anchor-view-more");

        var tdElement = document.createElement("td");
        tdElement.appendChild(anchorElement);

        tableElement[i].appendChild(tdElement);

    }

    window.addEventListener('hashchange', function () {

        var viewImagesButtons = document.querySelectorAll("a.anchor-view-more");

        var imageElement;
        var imageSource;

        window.onload = function () {

            imageElement = document.querySelector(".irc_mimg img");
            imageSource = imageElement.src;

        };

        for (var i = 0; i < viewImagesButtons.length; i++) {

            viewImagesButtons[i].href = imageSource;

        }

        console.log("lolololololololololololol");

    });

    function viewImagesButton() {



    }

}