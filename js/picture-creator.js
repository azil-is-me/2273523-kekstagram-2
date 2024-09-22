import {typicalDescriptions, createDescription} from './description-creator.js';


// console.log(typicalDescriptions)

let pictureSrc = document.querySelector('img');
console.log(pictureSrc)
let func = () => {
  let html = '';
  // let fragment = document.createDocumentFragment();
  for(let i = 0; i < createDescription.length; i++) {
    let srcRewrite = `
    <img class="picture__img" src=${createDescription[i].url} width="182" height="182" alt=${typicalDescriptions[i].description}>
      <p class="picture__info">
        <span class="picture__comments">${createDescription[i].comments}</span>
        <span class="picture__likes">${createDescription[i].likes}</span>
      </p>`
  }
  // fragment.appendChild(srcRewrite);
  // return(fragment)
  html = html + srcRewrite;
  console.log(html)

}




// let pictureDescription = document.querySelector('description')
// let pictureLikes = document.querySelector('likes')
// let pictureComments = document.querySelector('comments')// создать фрагмент и скопировать в него cloneNode(true), затем, указать тектовое содержимое textContent для src(url), либо через innerHTML изменить разметку, далее отрисовать все из фрагмента
// let src_one = pictureSrc.src;

// console.log(img.setAttribute('Src', 13))

// typicalDescriptions.forEach((element) => {
//   let b = pictureSrc.setAttribute('Src', `${element.url}`)

//  })
//  console.log(pictureSrc)

// let fragment = document.createDocumentFragment();

for(let i = 0; i = typicalDescriptions.length; i++) {
  // pictureSrc.setAttribute('Src', `${typicalDescriptions[i].url}`)
  // // pictureSrc[i].('Src', `${createDescription[i].url}`)
  // //pictureSrc.src.textContent = `${createDescription[i].url}`;
  // pictureDescription.textContent = `${typicalDescriptions[i].alt}`;
  // pictureLikes.setAttribute = ('likes',`${typicalDescriptions[i].likes}`);
  // pictureComments.setAttribute= ('comments', `${typicalDescriptions[i].comments}`);
}
console.log(pictureSrc.innerHTML)


//let userPicture = document.querySelector('#picture').textContent = "<a>fhvfjyr</a>";
//console.log(userPicture)
