function check() {
    var c=0;
    var q1=document.questions.question1.value;
    var q2=document.questions.question2.value;
    var q3=document.questions.question3.value;
    var q4=document.questions.question4.value;
    var result=document.getElementById('result');
    var questions=document.getElementById("questions");
    const image_input = document.querySelector("#image_input");
    if (q1=="Movie") {c+=1000}
    if (q2=="Horror") {c+=100}
    if (q2=="Anime") {c+=75}
    if (q2=="Crime") {c+=50}
    if (q2=="Kids") {c+=25}
    if (q3=="Scared") {c+=3}
    if (q3=="Warm") {c+=2}
    if (q3=="Cerebral") {c+=1}
    if (q4=="Cockroach") {c-=3}
    if (q3=="Cat") {c-=2}
    if (q3=="Owl") {c-=1}
    questions.style.display="none";

    if (c>=1090 && c<=1110) {
        result.textContent="You should watch a horror movie! We recommend 'It' on Netflix."
        var img = document.createElement("img");
        img.src = "https://media.giphy.com/media/xT9IgvEOwRzUcZDRiU/giphy.gif";
        var src = document.getElementById("x");
        src.appendChild(img);
    } else if (c>=1065 && c<=1085) {
        result.textContent="You should watch an anime movie! We recommend 'A Silent Voice' on Netflix."
        var img = document.createElement("img");
        img.src = "https://media.giphy.com/media/xT1R9OjKLmy4RAgqac/giphy.gif";
        var src = document.getElementById("x");
        src.appendChild(img);
    } else if (c>=1040 && c<=1060) {
        result.textContent="You should watch a crime movie! We recommend 'Extremely Wicked, Shockingly Evil and Vile."
        var img = document.createElement("img");
        img.src = "https://66.media.tumblr.com/639be446eae3d33501973154588cce70/tumblr_plwflgJNN61tsjdnao2_500.gif";
        var src = document.getElementById("x");
        src.appendChild(img);
    }else if (c>=1015 && c<=1035) {
        result.textContent="You should watch a kids movie! We recommend 'Sing 2' on Netflix."
        var img = document.createElement("img");
        img.src = "https://media.giphy.com/media/pfE3KB8qTRVIUAUNT9/giphy.gif";
        var src = document.getElementById("x");
        src.appendChild(img);
    }else if (c>=90 && c<=110) {
        result.textContent="You should watch a horror show! We recommend 'The Walking Dead' on Netflix."
        var img = document.createElement("img");
        img.src = "https://media.giphy.com/media/3o6Zt01ITjwoZtsC4w/giphy.gif";
        var src = document.getElementById("x");
        src.appendChild(img);
    }else if (c>=65 && c<=85) {
        result.textContent="You should watch an anime! We recommend 'Cyberpunk Edgerunners' on Netflix."
        var img = document.createElement("img");
        img.src = "https://media.giphy.com/media/4Z3lfPky1pLr0eSzTH/giphy.gif";
        var src = document.getElementById("x");
        src.appendChild(img);
    }else if (c>=40 && c<=60) {
        result.textContent="You should watch a crime show! We recommend 'Dahmer' on Netflix."
        var img = document.createElement("img");
        img.src = "https://64.media.tumblr.com/a012c98d7d30fba28a5f47644616177f/54c39565be815261-58/s540x810/25656eaae0ae2bb28dd93adbba9eabfc57377e60.gif";
        var src = document.getElementById("x");
        src.appendChild(img);
    }else if (c>=15 && c<=35) {
        result.textContent="You should watch a kids show! We recommend 'Barbie: Life in the Dreamhouse' on Netflix."
        var img = document.createElement("img");
        img.src = "https://media.giphy.com/media/NFKU9Elp3D4k/giphy.gif";
        var src = document.getElementById("x");
        src.appendChild(img);
    }
}
