
let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText).feed.entry;

        let i;
        for (i = 0; i < data.length; i++) {
            let name = data[i]["gsx$authorslackdisplayname"]["$t"];
            let linkedin = data[i]["gsx$linkedinlink"]["$t"];
            let twitter = data[i]["gsx$twitterlink"]["$t"];
            let title = data[i]["gsx$posttitle"]["$t"];
            let postcontent = data[i]["gsx$postcontent"]["$t"];
            console.log(postcontent);
            let socials = "";
            if (twitter) {
                if (linkedin) {
                    socials = "<h2>" + name + "  "+ "<a href=\"" + linkedin + "\">" + "<i class=\"fab fa-linkedin\" style=\"color:#0094ff\"></i></a> <a href=\"" +
                        twitter + "\">" + "<i class=\"fab fa-twitter-square\" style=\"color:#0094ff\"></i></a>"
                        + "</h2>";
                }
                else {
                    socials = "<h2>" + name + "  " + "<a href=\"" +
                        twitter + "\">" + "<i class=\"fab fa-twitter-square\" style=\"color:#0094ff\"></i></a>"
                        + "</h2>";
                }
            }
            else {
                if (linkedin) {
                    socials = "<h2>" + name + "  " +  "<a href=\"" + linkedin + "\">" + "<i class=\"fab fa-linkedin\" style=\"color:#0094ff\"></i></a>" + "</h2>";
                }
                else {

                   socials = "<h2>" + name + "</h2>";
                }
            }
            document.getElementById("mainDiv").innerHTML +=
                "<section>" +
                "<h1>" + title + "</h1>" +
            "<div>" +
            socials + 
            "</div>" +
                "<h3>" +
                postcontent + "</h3>" +

                "</section>";
        }
    }
};

xmlhttp.open(
    "GET",
    "https://spreadsheets.google.com/feeds/list/1WlHOznpZPlBXaXebYO7uvz7wDzmJnM8Jh631ReaOdh8/op0xzap/public/values?alt=json",
    true
);
xmlhttp.send();

