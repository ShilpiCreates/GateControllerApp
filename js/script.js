//-------Splash Page Loader ------//

window.addEventListener("load", () =>{
    const loader = document.querySelector('.loader-page');
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () =>{
        document.body.removeChild(loader);
    });
});

window.onscroll = () =>{
    navbar.classList.remove('active');
    subNav.classList.remove('active');
}

//----------Navigation----------//

const navbar = document.querySelector('.navbar');

document.querySelector('.bars').onclick = () =>{
    navbar.classList.toggle('active');
}
document.querySelector('#close').onclick =() =>{
    navbar.classList.remove('active');
}

//----------Search by model list----------//
const model_list = document.querySelector('.model-list');

document.querySelector('.allModel').onclick = () =>{
    model_list.classList.toggle('active');
    if(model_list.classList.contains('active')){
        document.querySelector('.allModel').classList.add('active');
    }else{
        document.querySelector('.allModel').classList.remove('active');
    }
}

//----------Notification----------//
const newNotify = document.querySelector('.newNotifi');

document.querySelector('.notification').onclick = () =>{
    newNotify.classList.toggle('active');
}