import { getData, saveData } from "./inscription.js";
import { showIn } from "./compte.js";

// CallBack appelé lors de la soumission du form
function submitUser(event) {
    // Block auto refresh
    event.preventDefault()
    // Test de visualisation de l'évènement
    console.log(event)
    // Sauvegarde "Sauvage"
    saveData("users", [
        event.currentTarget.querySelector('#field1').value,
        event.currentTarget.querySelector('#field2').value
    ])

    // Refresh Users List
    refresh()
}

function refresh() {
    const $users = getData("users")
    $users.forEach(user => showIn("result", user))
}

// Export de la fonction de callback
export {
    submitUser
}





/**
 * Save data
 * @param {String} key 
 * @param {array} data 
 */
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






/**
 * Get Datas
 * @param key 
 */
function getData(key) {
    // Long
    // On va récup le contenu sous la forme d'un tableau ou rien
    // const data = localStorage.getItem(key)
    // Convert data to previous format
    // const dataConverted = JSON.parse(data)

    // if (dataConverted) {
    //     return dataConverted
    // } else {
    //     return []
    // }

    // Short
    // return dataConverted ? dataConverted : [] 
    return JSON.parse(localStorage.getItem(key)) ?? []
}