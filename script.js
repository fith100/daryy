    const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s');

// let date = new Date();

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());



function clock() {

    let time = new Date(),
        hours = time.getHours() * 30,
        minutes = time.getMinutes() * 6,
        seconds = time.getSeconds() * 6;


        hour.style = `transform: rotate(${hours}deg)`;
        min.style = `transform: rotate(${minutes}deg)`;
        sec.style = `transform: rotate(${seconds}deg)`;
}


clock()



const tabsLinks = document.querySelectorAll('.tabsItem');

tabsLinks.forEach(tabsItem => {
    tabsItem.addEventListener('click', () =>{
        // removeActive(tabsItems);
        // slide.classList.add('active');
        tabsLinks.forEach(item => {
            item.classList.remove('active');
        })
        tabsItem.classList.add('active');
    })
})


// const tabsContent = document.querySelectorAll('.tabsContentItem');

// tabsContent.forEach(tabsContentItem => {
//     tabsContentItem.addEventListener('click', () =>{
//         tabsContent.forEach(content => {
//             content.classList.remove('active');
//         })
//         tabsContentItem.classList.add('active');
//     })
// })

const tabsContent = document.querySelector('.tabsContentItem');

tabsContent.forEach(tabsContentItem => {
  tabsContentItem.addEventListener('click', () => {
    removeActive();
      tabsContentItem.classList.add('active');
  })      
})

function removeActive() {
    tabsContent.forEach(content => {
        item.classList.remove('active');
    })
}


