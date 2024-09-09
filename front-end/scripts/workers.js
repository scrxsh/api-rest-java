var listWorkers = []
var tboby = document.getElementById("tbody")
const txtId = document.getElementById("txtId")
let actionType = document.getElementById("actionType")
const txtName = document.getElementById("txtName")
const txtPhone = document.getElementById("txtPhone")

obtenerTrabajadores()

function reload(){
    window.location.reload();
}

function action(){
    if(actionType.value == "editar"){
        modificarTrabajador()
        $('#popUpWorkers').modal('hide');
    }else if(actionType.value == "crear"){
        crearTrabajador()
        $('#popUpWorkers').modal('hide');
    }else{
        eliminarTrabajador(txtId.value)
        $('#popUpEliminar').modal('hide');
    }
}
function obtenerTrabajadores(){
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("http://localhost:8080/api/var-store/workers/all", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            listWorkers = result
                result.forEach(element => {
                    tboby.innerHTML +=
                    `<tr>
                    <th scope="row">${element.id}</th>
                    <td>${element.name}</td>
                    <td>${element.cellphone}</td>
                    <td><i class="fa-regular fa-pencil" onclick="editarTrabajador(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpWorkers"></i></td>
                    <td><i class="fa-regular fa-trash-can" onclick="confirmarEliminacion(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpEliminar"></i></td>
                    </tr>`
                })
        })
        .catch((error) => console.error(error))
}

function crearTrabajador(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
        "name": txtName.value,
        "cellphone": txtPhone.value
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

fetch("http://localhost:8080/api/var-store/workers/crear", requestOptions)
  .then((response) => response.json())
  .then((element) => {
  
            tboby.innerHTML +=
            `<tr>
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.cellphone}</td>
            <td><i class="fa-regular fa-pencil" onclick="editarTrabajador(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpWorkers"></i></td>
            <td><i class="fa-regular fa-trash-can" onclick="confirmarEliminacion(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpEliminar"></i></td>
            </tr>`
            reload()
  })
  .catch((error) => console.error(error));
}

function agregarTrabajador(){
    txtId.value = ""
    txtPhone.value = ""
    txtName.value = ""
    actionType.value = "crear"
}


function modificarTrabajador(){  

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "id":txtId.value, 
        "name": txtName.value,
        "cellphone": txtPhone.value
    });

    const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("http://localhost:8080/api/var-store/workers/actualizar", requestOptions)
    .then((response) => response.json())
    .then((element) => {
        listWorkers = []
        tbody.innerHTML = ""
        obtenerTrabajadores()
    })
    .catch((error) => console.error(error));
}



function editarTrabajador(id){
    const product = listWorkers.find(element => element.id === id)
    txtId.value = id
    txtName.value = product.name
    txtPhone.value = product.cellphone
    actionType.value = "editar"
}


const txtName_Eliminar = document.getElementById("txtName_Eliminar")
const txtPhone_Eliminar = document.getElementById("txtPhone_Eliminar")


function confirmarEliminacion(id){
    const product = listWorkers.find(element => element.id === id)
    txtId.value = id
    txtName_Eliminar.value = product.name
    txtPhone_Eliminar.value = product.cellphone
    actionType.value = "borrar"
}


function eliminarTrabajador(id){

        const requestOptions = {
        method: "DELETE",
        redirect: "follow"
        };
      
      fetch(`http://localhost:8080/api/var-store/workers/eliminar/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            listWorkers = []
            tboby.innerHTML = ''
            obtenerTrabajadores()
            
        })
        .catch((error) => console.error(error)); 
}


