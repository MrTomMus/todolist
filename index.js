let input = document.querySelector('input');
let buttonAdd = document.getElementById('button');
let buttonAll = document.getElementById('buttonAll');
let buttonDone = document.getElementById('buttonDone');
let buttonNoDone = document.getElementById('buttonNoDone');
let div = document.querySelector('div');
let buttonDel;
let checkBoxArr;
let divList;
let body = document.querySelector('body');

if(input.value ==''){
  let divList = document.createElement('div'); 
  let text = document.createElement('h3');
  text.innerHTML = 'Вы ввели пустое задание';
  setTimeout(() => { divList.remove()}, 3000);
}else{
  
}

buttonAdd.addEventListener('click', () =>{
  if(input.value ==''){
    let divList = document.createElement('div'); 
    divList.className = 'divList';
    div.append(divList);
    let text = document.createElement('h3');
    divList.append(text);
    text.style.color = 'red';
    text.innerHTML = 'Вы ввели пустое задание';
    setTimeout(() => { divList.remove()}, 3000);
  }else{
    let divList = document.createElement('div'); 
    let checkBox = document.createElement('input');
    let text = document.createElement('h3');
    let buttonDelete = document.createElement('button');
    buttonDelete.className = 'buttonDelete';
    
    div.append(divList);
    divList.append(checkBox);
    checkBox.type = 'checkbox';
    checkBox.className = 'checkBox';
    divList.append(text);
    text.style.display = 'inline-block'
    divList.append(buttonDelete);
    buttonDelete.innerText = 'Удалить';
    buttonDelete.id = 'buttonDelete';
    text.innerHTML = input.value;
    input.value = '';
    checkBoxArr = document.querySelectorAll('.checkBox')
    buttonDel = document.querySelectorAll('#buttonDelete');
  

  for(let i = 0; i<buttonDel.length; i++){
    buttonDel[i].addEventListener('click', delElement);
}
  }
  
  
})

buttonDone.addEventListener('click', ()=>{
  for(let i = 0; i<checkBoxArr.length; i++){
    if(checkBoxArr[i].checked){
      checkBoxArr[i].parentElement.removeAttribute('hidden')
    }else{
      checkBoxArr[i].parentElement.hidden = 'true'
    }
  }
})

buttonNoDone.addEventListener('click', ()=>{
  for(let i = 0; i<checkBoxArr.length; i++){
    if(checkBoxArr[i].checked){
      checkBoxArr[i].parentElement.hidden = 'true'
    }else{
      checkBoxArr[i].parentElement.removeAttribute('hidden')
    }
  }
  
})

buttonAll.addEventListener('click', ()=>{
  console.log('test');
  for(let i = 0; i<checkBoxArr.length; i++){
    checkBoxArr[i].parentElement.removeAttribute('hidden')
    }
})



function delElement(e){
    let element = e.currentTarget;
    element.parentElement.remove()
}