
document.getElementById("prev").addEventListener("click", function() {
    let picture = document.getElementById("plant");

    let attr = picture.attributes[2].value
    let regex = attr[10]

    let i = 11
   
    while(attr[i] != '.') {
        regex += attr[i];
        i++;
    }

    if(regex > 1) {
        regex--;
        document.getElementById("plant").src="../photos/" + regex + ".jpg";
        document.getElementById("desc").innerHTML = "Photo " + regex;
    }

    console.log(picture)

});  

document.getElementById("next").addEventListener("click", function() {
    let picture = document.getElementById("plant");

    let attr = picture.attributes[2].value
    let regex = attr[10]

    let i = 11
   
    while(attr[i] != '.') {
        regex += attr[i];
        i++;
    }

    regex++;
    document.getElementById("plant").src="../photos/" + regex + ".jpg";
    document.getElementById("desc").innerHTML = "Photo " + regex;
    
    console.log(picture)

});  
