(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
    
})();
for (var i = 1; i<=50; ++i) {
        
    setInterval(function() {document.getElementById("role").innerHTML=" A Web Developer";}, 1000);
    setInterval(function() {document.getElementById("role").innerHTML="A UI/UX Designer.";}, 2000);
    setInterval(function() {document.getElementById("role").innerHTML=" A Software Developer";}, 3000);
    
}
