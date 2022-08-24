/* eslint-disable import/no-cycle */
import { showPostFunt, exitPost } from './post.js';

// 1. HEADER DEL MURO, SE VA A MANTENER FIJO.............................
export function muro() {
  const viewMuro = `
    <div id="muroDiv" class="muroDiv">
        <nav class="headerContent">
            <div class="'logoContent">
            <img class="logo" src="img/logo1.png" alt="logo"> </img>
            <p class="logoName">Travelers</p>
            </div>
            <div class="iconsContent">
                <i id="icon" class="fa-solid fa-magnifying-glass"> </i>
                <i id="icon" class="fa-solid fa-envelope"></i>
                <i id="iconExit"class="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
        </nav>

        <form class="newPostDiv">
            <i id="iconPhoto" class="fa-regular fa-image"></i>
            <input type="text" class="newPost" placeholder="Cuentanos tu aventura Traveller"></input>
            <button class="publicar" ><i class="fa-solid fa-paper-plane"></i></button>     
        </form>

        <!--POST-->

        <div class="containerPost"> </div>
        <div class="modalDelete" style="display:none">
           <div class="modalDelete">
              <p> ¿Deseas borra este Post?</p>
              <button class="buttonAceptDeletePost">Aceptar</button>
              <button class="buttonCancelDeletePost">Cancelar</button>
           </div>
                
       </div>
      
        
    </div>`;

  const containerViewMuro = document.createElement('div');
  containerViewMuro.innerHTML = viewMuro;
  showPostFunt(containerViewMuro);

  const iconExit = containerViewMuro.querySelector('#iconExit');
  iconExit.addEventListener('click', (e) => e.then(exitPost()));
  return containerViewMuro;
}

export function mostrarPost(doc) {
  const bdmuro = doc.data();
  const viewpost = `<div class="postsContainerDiv">
    <div class="headerPostContainer">
       <div class="userPostContainer">
          <img class=" postUsePhoto">
          <p class="postUserName">${bdmuro.userName}</p>
       </div>
       <div class="iconsEditDeletePostContainer">
          
          <button class="btnEdit" id=${doc.id} ><i id="btnEdit" class="fa-solid fa-pencil"></i></button>
          <button class="btnDelete" id=${doc.id} ><i class="fa-solid fa-trash-can"></i></button>
       </div>
    </div>
    <div class="post">
          <div class="postTextDiv ">
              <textarea class="posttext" readonly > ${bdmuro.postDescription}</textarea>
          </div>
          <div class="postIcon ">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment-dots"></i>
          </div>
          <div class="postCommentsDiv ">
              <div class="postComments"> postComments</div>
         </div>
    </div>
  </div>
  `;
  return viewpost;
}
