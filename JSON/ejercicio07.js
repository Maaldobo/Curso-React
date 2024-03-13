const url="https://api.nasa.gov/mars-photos/api/v1/rovers/_NAME_/photos?sol=_DDDD_&api_key=DEMO_KEY"
// const carouselO = new bootstrap.Carousel('#myCarouselO')
// const carouselC = new bootstrap.Carousel('#myCarouselC')
// const carouselP = new bootstrap.Carousel('#myCarouselP')
let imgBuffer = {}

async function obtenerDatos(name,day){
    let i=0
    const urlFin= url.replace("_NAME_", name).replace("_DDDD_", day)
    console.log(urlFin)
    imgBuffer = {}
    try {
        const response = await fetch(urlFin)
        const data = await response.json()
        data.photos.forEach((element) => {
            if (("NAVCAM" === element.camera.name || "FHAZ" === element.camera.name) && i < 10) {
                let imgSrc = element.img_src
                imgBuffer.append(element.img_Source)
                console.log(element.img_src)
                i++
            }
           
        })
    } 
    catch (error) {
        console.error('Error recopilando foto de:', name)
    }
    finally{
        console.log(imgBuffer)

    }
}
obtenerDatos("opportunity","0010")
obtenerDatos("curiosity","0010")
obtenerDatos("spirit","0010")

// const myCarouselElement = document.querySelector('#myCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })
