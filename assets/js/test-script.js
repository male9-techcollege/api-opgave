/* The following JS code, provided by Colormind works, but the code that TechCollege is asking us to implement is generating errors. 
WHY? */

var url = "http://colormind.io/api/";
var data = {
    model: "default",
    input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"]
}

var http = new XMLHttpRequest();

http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        var palette = JSON.parse(http.responseText).result;
        console.log(palette);
    }
}

http.open("POST", url, true);
http.send(JSON.stringify(data));