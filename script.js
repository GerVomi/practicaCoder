let baseDatos = []




class Comic {
    constructor(titulo, autor, descripcion, precio, imagen){
        this.titulo = titulo
        this.autor = autor
        this.descripcion = descripcion
        this.precio = precio
        this.imagen = imagen
    }
}

const comicsBane = new Comic("City of Bane", "Tom King","Bane se encuentra en Gotham, debe decidir su futuro en una noche. El hombre que se creia sin temores, realiza un viaje al pasado enfrentandose a su peor enemigo... el mismo.", 1950, "../portadas dc/bane.jpg" )
const comicBatClassic = new Comic("Batman 400th","Andy Kubert", "El protector de Gotham ha peleado sin descanso durante años, en esta recopilcacion se relatan sus mayores hazañas. ", 2500, "../portadas dc/bat classic.jpg")
const comicBat80 = new Comic ("Batman 80 Aniversary","Jhons, Snyder, Gimenez", "Porque es el mayor heroe de todos los tiempos ? Esta edicion especial de los 80 años del cruzado oscuro nos responde esta pregunta, y muchas más", 3700,"../portadas dc/bats80.jpg")
const comicCrisisAlt = new Comic ("Crisis Alternative", "Andy Kubert" , "Crisis en Tierras Infinitas tuvo su contraparte. Cuando se creia que todo estaba perdido, la otra mitad del desastre se alinea en espacio-tiempo, dando una segunda oportunidad" , 1350,"../portadas dc/crisis-alt.jpg")
const comicMetal = new Comic ("Metal Nights", "Scott Snyder", "Una nueva amenaza acecha el multiverso, esta vez se trata de las versiones mas siniestras de los heroes de tierra 1.", 980,"../portadas dc/metal.jpg")
const supVsShaz = new Comic ("Adventures Comics", "Gheoff Jhons", "Superman conoce a Shazam. Pero no en las mejores circunstancias, Billy Batson esta siendo controlado por Dr Mind, pero Clarke no lo sabe. ",3700,"../portadas dc/supvsshaz.jpg")
const comicYearVillian = new Comic ("Ras Al Gul , and the outsiders", "Lamas McDufie" , "Un recorrido por las mentes criminales mas siniestras de Dc Comics, en esta edicion presentamos a Rhas Al Gull, quien lava el cerebro de Luke", 1800,"../portadas dc/yearvillan.jpg")

baseDatos.push(comicsBane,comicBatClassic,comicBat80,comicCrisisAlt,comicMetal,supVsShaz,comicYearVillian )

aux = ``

for( let i = 0 ; i < baseDatos.length; i++){

    aux += `
    <div id="card-id" class="card" style="width: 18rem; ">
  <img class="card-img-top" src="${baseDatos[i].imagen}" alt="${baseDatos[i].titulo}" title="${baseDatos[i].titulo}">
  <div class="card-body">
  <h5 class="card-title"><b>${baseDatos[i].titulo}</b></h5>
    <h6 >${baseDatos[i].autor}</h6>
    <p class="card-text">${baseDatos[i].descripcion}</p>
    <a href="#" class="btn btn-primary">Leer Ahora!</a>
  </div>
</div>
    
    `
}

document.getElementById("galery").innerHTML = aux

