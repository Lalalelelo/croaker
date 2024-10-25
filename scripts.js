// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Header icon frog    
    let frogSound = document.querySelector('audio')
    let frogIcon = document.querySelector('header img')

    frogIcon.addEventListener('click', function () {
        frogSound.play()
    })


    

    // Re-usable frog player function
    function frogPlayer(imageId, soundId) {
        let frogImage = document.getElementById(imageId)
        let frogSound = document.getElementById(soundId)
        frogImage.addEventListener('click', function () {
            frogSound.play()
        })
    }


    
    // Make the frogs sing! You only need to add this line for each frog now, 
    // with the image ID first and then the audio ID. So just add those in HTML
    // and then create a new function call using those IDs and they should work
    // (in Safari at least, though some seem to work elsewhere too...)


    // American Bullfrog
    frogPlayer('bullfrogImage', 'bullfrogSound') 

    // American Toad
    frogPlayer('americanToadImage', 'americanToadSound') 

    // Boreal Chorus Frog
    frogPlayer('boreal-chorus-frogImage', 'boreal-chorus-frogSound') 

    // Western Striped Chorus Frog
    frogPlayer('western-striped-chorus-frogImage', 'western-striped-chorus-frogSound') 

    // Fowlers Toad
    frogPlayer('fowlers-toadImage', 'fowlers-toadSound') 

    // Gray Treefrog
    frogPlayer('gray-treefrogImage', 'gray-treefrogSound') 

    // Green Frog
    frogPlayer('green-frogImage', 'green-frogSound') 

    // Leopard Frog
    frogPlayer('leopard-frogImage', 'leopard-frogSound') 

    // Mink Frog
    frogPlayer('mink-frogImage', 'mink-frogSound') 

    // Pickerel Frog
    frogPlayer('pickerel-frogImage', 'pickerel-frogSound') 

    // Spring Peeper
    frogPlayer('spring-peeperImage', 'spring-peeperSound') 

    // Wood Frog
    frogPlayer('wood-frogImage', 'wood-frogSound') 

    // Northern Blanchards Cricket Frog
    frogPlayer('northern-blanchards-cricket-frogImage', 'northern-blanchards-cricket-frogSound') 

    




})