$(document).ready(function () {

    var ImagemPais;
    var NomePais;
    var PopulacaoPais;
    var RegiaoPais;
    var CapitalPais;
    var HorarioPais;
    var siglaPais;
    var quantPaises;

    var RegiaoSelecionada;

    $(".clickopen_menu").click(function () {

        if ($(".drop_menu").css("display") == "none") {
            $("svg").css("transform" , "rotateX(180deg)")
            $(".drop_menu").slideDown("slow", function () {
                
            });
        }
        else {
            $("svg").css("transform" , "rotateX(360deg)")
            $(".drop_menu").slideUp("slow", function () {
                
            });
        }

    })


    $.ajax({
        url: "https://restcountries.com/v3.1/all",
        type: "GET",
    }).done(function (response) {
        quantPaises = response.length

        for (var i = 0; i < quantPaises; i++) {
            ImagemPais = response[i].flags.png
            NomePais = response[i].translations.por.common
            PopulacaoPais = response[i].population
            RegiaoPais = response[i].region
            if ((response[i].capital) != undefined) {
                CapitalPais = response[i].capital[0]
            }
            else {
                CapitalPais = "Desconhecido"
            }
            HorarioPais = response[i].timezones[0]
            siglaPais = response[i].cca2

            $(".container_global_body").append(`
            <div class="box_pais">
                <div class="image_pais">
                    <img src="${ImagemPais}">
                </div>
                <div class="text_pais">
                    <div class="name_pais">
                        <h3>${NomePais}<h3>
                    </div>
                    <div class="dados_pais">
                        <p>Population: ${PopulacaoPais} </p>
                        <p>Região: ${RegiaoPais} </p>
                        <p>Sigla: ${siglaPais} </p>
                        <p>Capital: ${CapitalPais} </p>
                        <p>Horário: ${HorarioPais} </p>
                    </div>
            </div>`)
        }
    })


    $(".drop_menu li").click(function () {
        RegiaoSelecionada = $(this).find("button").html()

        if (RegiaoSelecionada == "Europa") {
            RegiaoSelecionada = "Europe"
        }

        PaisporRegiao(RegiaoSelecionada)
    })

    function PaisporRegiao(RegiaoSelecionada) {

        var UrlporRegiao = "https://restcountries.com/v3.1/region/" + RegiaoSelecionada

        $(".box_pais").css("display", "none")

        if(RegiaoSelecionada == "Europe"){
            RegiaoSelecionada = "Europa"
        }
        $(".texto_principal h2").html(RegiaoSelecionada)


        $.ajax({
            url: UrlporRegiao,
            type: "GET",
        }).done(function (response) {
            quantPaises = response.length

            for (var i = 0; i < quantPaises; i++) {
                ImagemPais = response[i].flags.png
                NomePais = response[i].translations.por.common
                PopulacaoPais = response[i].population
                RegiaoPais = response[i].region
                if ((response[i].capital) != undefined) {
                    CapitalPais = response[i].capital[0]
                }
                else {
                    CapitalPais = "Desconhecido"
                }
                HorarioPais = response[i].timezones[0]
                siglaPais = response[i].cca2

                $(".container_global_body").append(`
            <div class="box_pais">
                <div class="image_pais">
                    <img src="${ImagemPais}">
                </div>
                <div class="text_pais">
                    <div class="name_pais">
                        <h3>${NomePais}<h3>
                    </div>
                    <div class="dados_pais">
                        <p>Population: ${PopulacaoPais} </p>
                        <p>Região: ${RegiaoPais} </p>
                        <p>Sigla: ${siglaPais} </p>
                        <p>Capital: ${CapitalPais} </p>
                        <p>Horário: ${HorarioPais} </p>
                    </div>
            </div>`)
            }
        })
    }
})