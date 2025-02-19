const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const hamIcon = document.querySelector('.hamburger-icon');
const crossIcon = document.querySelector('.cross-icon');

hamburger.addEventListener('click', function () {
    if (menu.style.display === "block") {
        menu.style.display = "none";
        hamIcon.style.display = "inline-block";
        crossIcon.style.display = "none";
    } else {
        menu.style.display = "block";
        hamIcon.style.display = "none";
        crossIcon.style.display = "inline-block";
    }
});


 



 
function downloadResume() {
   
    const link = document.createElement("a");
    link.href = "Resources/document/Sayali_Divekar_Resume.pdf"; // Update with the correct file path
    link.download = "Sayali Divekar Resume.pdf"; // Set the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}    console.log("button clicked");
 


