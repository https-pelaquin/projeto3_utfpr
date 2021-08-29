(function($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function() {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);



document.addEventListener("DOMContentLoaded", function() {
    queryCursos();
});


function queryCursos(e) {
    let request = new XMLHttpRequest();

    request.open("POST", "/cursos/getCursos", true);
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8")
    request.onreadystatechange = function() {

        if (request.readyState !== 4) {
            return;
        }
        mostrarCursos(JSON.parse(request.responseText));
    };
    request.send();
}

function mostrarCursos(cursos) {
    let boxCursos = document.querySelector("#boxCursos");

    for (let i = 0; i < cursos.length; i++) {
        let cursoItem1 = document.createElement("div");
        let cursoItem2 = document.createElement("div");
        let cursoNome = document.createElement("h2");
        let cursoImagem = document.createElement("img");
        let cursoDescrição = document.createElement("div");

        cursoItem1.setAttribute('class', 'u-blog-post u-container-style u-repeater-item');
        cursoItem2.setAttribute('class', 'u-container-layout u-similar-container u-container-layout-1');
        cursoNome.setAttribute('class', 'u-blog-control u-text u-text-1')
        cursoImagem.setAttribute('class', 'u-blog-control u-expanded-width u-image u-image-default u-image-1');
        cursoDescrição.setAttribute('class', 'u-blog-control u-post-content u-text u-text-2');

        cursoNome.innerHTML = cursos[i].nome;
        cursoImagem.src = cursos[i].imagem;
        cursoDescrição.innerHTML = cursos[i].descrição;

        cursoItem2.appendChild(cursoNome);
        cursoItem2.appendChild(cursoImagem);
        cursoItem2.appendChild(cursoDescrição);
        cursoItem1.appendChild(cursoItem2);

        boxCursos.appendChild(cursoItem1);

    }
};