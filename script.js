const images = [
    './assets/img/img1.png',
    './assets/img/img2.PNG',
    './assets/img/img3.JPG',
    './assets/img/img4.PNG',
];

const textureImage = './assets/img/texture.png'

const body = document.querySelector('body')

const div = document.createElement('div');
const texture = document.createElement('img');
texture.src = textureImage;
div.className = 'texture';
texture.className = 'textureImage';
body.appendChild(div);
div.appendChild(texture)


let startedScrollUp = false;
let startedScrollDown = false;
let returnScrollUp = true;
let returnScrollDown = false;


const loadImagesAfter = () =>
{

    if (document.querySelectorAll('img').length > 8){

        for (let i = 0 ; i < 4 ; i++)
        {
            document.querySelectorAll('img[name="images"]')[0].remove();
        }
    }

    images.forEach((image) =>
    {
        const img = document.createElement('img');
        img.src = image;
        img.className = 0 + images.indexOf(image);
        img.name = 'images'

        body.appendChild(img);


    });
}
loadImagesAfter()

const loadImagesBefore = () =>
{

    if (document.querySelectorAll('img').length > 16){

        for (let i = 0 ; i < 4 ; i++)
        {
            document.querySelectorAll('img[name="images"]')[5].remove();
        }
    }

    images.forEach((image) =>
    {
        const img = document.createElement('img');
        img.src = image;
        img.className = 0 + images.indexOf(image);
        img.name = 'images'

        body.prepend(img);


    });
}

let lastScroll = 0;
window.addEventListener('scroll',() => {

    if (lastScroll < window.scrollY)
    {
        const images = document.querySelectorAll('img[name="images"]');
        images.forEach((child) =>
        {
            child.style.transition = '0.2s'
            child.style.transform = 'scale(0.8)'
        })

        lastScroll = window.scrollY;
    }
    else if (lastScroll > window.scrollY + 100)
    {
        const images = document.querySelectorAll('img[name="images"]');
        images.forEach((child) =>
        {
            child.style.transition = '0.2s'
            child.style.transform = 'scale(1)'
        })
        lastScroll = window.scrollY;

    }



    // console.log('SCROLLY WINDOW ', window.scrollY) //scrolled from top
    // console.log('INNER HEIGHT', window.innerHeight) //visible part of screen
    if(window.scrollY + window.innerHeight + 500 >= document.documentElement.scrollHeight)
    {
        loadImagesAfter();

    }
    else if (window.scrollY <= document.documentElement.scrollHeight + 50)
    {
        loadImagesBefore();
    }


    

})



// let lastScroll = 30;
//
//
// window.addEventListener('scroll', (e) =>
// {
//     if (window.scrollY < lastScroll)
//     {
//         // Scroll haut
//         startedScrollUp = true;
//         if (startedScrollUp && returnScrollDown)
//         {
//             startedScrollUp = false;
//             returnScrollDown = true;
//             returnScrollUp = false;
//
//
//             startScrollUp();
//         }
//
//     }
//     else
//     {
//         // Scroll bas
//         startedScrollDown = true;
//         if (startedScrollDown && returnScrollUp)
//         {
//             startedScrollDown = false;
//             returnScrollUp = false;
//             returnScrollDown = true;
//
//
//             startScrollDown();
//         }
//         lastScroll = window.scrollY - 15;
//     }
// });
//
// const startScrollDown = () =>
// {
//
//     images.forEach((image) =>
//     {
//         const index = images.indexOf(image)
//
//         startedScrollDown = false;
//         const animation = document.getElementById('' + index).animate([
//             // keyframes
//             { transform: 'scale(1)' },
//             { transform: 'scale(0.9)' }
//         ], {
//             // timing options
//             duration: 300
//         });
//
//         animation.onfinish = event => {
//             document.getElementById('' + index).style.transform = 'scale(0.8)';
//             console.log('operation')
//
//         };
//     })
//
//
//
// }

const startScrollUp = () =>
{
    // images.forEach((image) => {
    //     const index = images.indexOf(image)
    //
    //     startedScrollUp = false;
    //     const animation = document.getElementById('' + index).animate([
    //         // keyframes
    //         {transform: 'scale(0.9)'},
    //         {transform: 'scale(1)'}
    //     ], {
    //         // timing options
    //         duration: 300
    //     });
    //
    //     animation.onfinish = event => {
    //         document.getElementById('' + index).style.transform = 'scale(1)';
    //         console.log('operation')
    //
    //     }
    // });
    // startedScrollUp = false;
    // console.log('scroll up')
}



body.style.backgroundColor = '#111111'