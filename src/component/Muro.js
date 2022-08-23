/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
// eslint-disable-next-line import/no-cycle

import {
  savebdPost, onGetTasks, auth, signOut,
} from '../firebase/firebase.js';
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

        <div class="postBodyContainer"> </div>
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
