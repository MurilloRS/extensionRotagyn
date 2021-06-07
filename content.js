


// window.onload = setTimeout(() => {
//     let eventServer = document.querySelector(".container").getElementsByTagName("div")[4].getElementsByTagName("a")[5];

//     eventServer.addEventListener("click", function() {
//         console.log("click eventos de servidor");
//         const interval = setInterval(() => {
//             if (document.querySelector("button.btn.ng-binding.btn-success.mb-10")) {
//                 let buttonSelect = document.querySelector("button.btn.ng-binding.btn-success.mb-10")
//                 buttonSelect.addEventListener("click", function() {
//                     liberarSeletor();
//                     console.log("click selecionar localizações");
//                     clearInterval(interval);
//                 });
//             }
//         }, 1000);
//     });

    function liberarSeletor() {
        document.querySelector(".light-blue").getElementsByTagName("th")[0].setAttribute("style", "");
        document.querySelector(".light-blue").getElementsByTagName("th")[1].setAttribute("style", "display: none");
    };

// }, 5000);


window.onload = setTimeout(function recarregar () {
    const interval = setInterval(() => {
        // console.log("rodou");
        if (document.querySelector("button.btn.ng-binding.btn-success.mb-10")) {
            let buttonSelect = document.querySelector("button.btn.ng-binding.btn-success.mb-10")
            buttonSelect.addEventListener("click", function() {
                liberarSeletor();
                // console.log("click selecionar localizações");
                // clearInterval(interval);
                recarregar();
            });
        }
    }, 1000);
}, 5000);