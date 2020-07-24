
document.querySelector(".slidebar").addEventListener("click", handleClick);

function handleClick() {

    document.querySelector(".dot").classList.toggle("light-mode");

    document.querySelector(".dot").classList.toggle("dark-mode");

    var classes = document.querySelector(".slidebar>div").classList;

    if (classes.contains("light-mode")) {

        $("body").css("color", "black");

        $(".date").css("color", "black");

        $("body").css("background-image", "linear-gradient( hsl(225, 100%, 98%) 30%, hsl(0, 0%, 100%) 70%");

        $(".card").css("background-color", "hsl(227, 47%, 96%)");

        $(".like-card").css("background-color", "hsl(227, 47%, 96%)");

        $(".card").css("color", "hsl(230, 17%, 14%)");

        $(".text").css("color", "hsl(228, 12%, 44%)");

        $(".slidebar").css("background-image", "linear-gradient( hsl(230, 22%, 74%), hsl(230, 22%, 74%))");

        $(".dot").css("background-color", "white");
    } else {

        $("body").css("color", "hsl(0, 0%, 100%)");

        $(".date").css("color", "white");

        $("body").css("background-image", " linear-gradient(hsl(232, 19%, 15%) 30%,hsl(230, 17%, 14%) 70%)");

        $(".card").css("background-color", "hsl(228, 28%, 20%)");

        $(".card").css("color", "hsl(228, 34%, 66%)");

        $(".like-card").css("background-color", "hsl(228, 28%, 20%)");

        $(".text").css("color", "hsl(228, 34%, 66%)");

        $(".slidebar").css("background-image", "linear-gradient(to right,hsl(210, 78%, 56%),hsl(146, 68%, 55%))");

        $(".dot").css("background-color", " hsl(230, 17%, 14%)");


    }

}
