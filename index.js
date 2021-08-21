window.onload = function () {
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var img = document.getElementsByClassName("only")[0];
    var index = 1;
    var img1 = document.getElementById("img1");
    var imgArr = ["a.jpg", "b.jpg", "c.jpg"];
    var allButton = document.getElementsByClassName("point");

    setB();
    p1.onclick = function () {
        setA();
        img.src = "a.jpg";
        allButton[0].style.backgroundColor = "rgba(100, 100, 100, 0.863)";
        index = 0;
    };
    p2.onclick = function () {
        setA();
        img.src = "b.jpg";
        allButton[1].style.backgroundColor = "rgba(100, 100, 100, 0.863)";
        index = 1;
    };
    p3.onclick = function () {
        setA();
        img.src = "c.jpg";
        allButton[2].style.backgroundColor = "rgba(100, 100, 100, 0.863)";
        index = 2;
    };

    setInterval(function () {
        setA();
        allButton[index].style.backgroundColor = "rgba(100, 100, 100, 0.863)";

        img1.src = imgArr[index];
        if (index >= 2) {
            index = -1;
        }
        index++;
    }, 4000);

    function setA() {
        for (var i = 0; i < allButton.length; i++) {
            allButton[i].style.backgroundColor = "rgba(100, 100, 100, 0.466)";
        }
    }
    function setB() {
        allButton[0].style.backgroundColor = "rgba(100, 100, 100, 0.863)";
        allButton[1].style.backgroundColor = "rgba(100, 100, 100, 0.466)";
        allButton[2].style.backgroundColor = "rgba(100, 100, 100, 0.466)";
    }
};