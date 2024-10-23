//Save data
//@param {String} key 
//@param {array} data 
 
// import de la fonction de sauvegarde dans le Localstorage
import {getData} from "./inscription.js";

// Ecoute Form
const $form = document.getElementById('user-form')
// Listen
$form.addEventListener('submit', submitUser)

function saveData(key, data) {
    // Get Previous and Push
    const old = getData(key)
    // Convert data
    const convertData = JSON.stringify(data)
    // Save it
    localStorage.setItem(key, old.push(convertData))
}
// Export to
export {getData,saveData}




