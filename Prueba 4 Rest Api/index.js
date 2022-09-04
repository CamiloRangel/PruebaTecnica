function getMoviesTitle(substr){
    var titulos = [];
    var url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        if(data.total_pages >= 1){
            for (let i = 1; i < data.total_pages; i++) {
                var newUrl = url + "&page=" + i
                console.log(newUrl);
                fetch(newUrl)
                .then(res => res.json())
                .then(data =>{
                    datos = data.data;
                    console.table(datos)
                    for (let i = 0; i < datos.length; i++) {
                        titulos.push({"Titulo":datos[i].Title, "Año": datos[i].Year})
                    }
                    
                    for (let j = 0; j < titulos.length; j++) {
                        console.log(j+". Titulo: "+ titulos[j])
                        document.write("<li>"+ parseInt(j+1) +". <b>Titulo:</b> "+ titulos[j].Titulo + ". <b>Year:</b> "+ titulos[j].Año + "</li>")
                    }
                    document.write("</br>Total: " + data.total)
                })
            }
        }
    })
}


getMoviesTitle("Spiderman");
