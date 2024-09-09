var listProviders = []
var tboby = document.getElementById("tbody")
const txtId = document.getElementById("txtId")
let actionType = document.getElementById("actionType")
const txtName = document.getElementById("txtName")
const txtPhone = document.getElementById("txtPhone")
const txtAddress = document.getElementById("txtAddress")
const txtManager = document.getElementById("txtManager")

obtenerProveedores()

function reload(){
    window.location.reload()
}

function action(){
    if(actionType.value == "editar"){
        modificarProveedor()
        $('#popUpProviders').modal('hide');
    }else if(actionType.value == "crear"){
        crearProveedor()
        $('#popUpProviders').modal('hide');
    }else{
        eliminarProveedor(txtId.value)
        $('#popUpEliminar').modal('hide');
    }
}
function obtenerProveedores(){
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("http://localhost:8080/api/var-store/providers/all", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            listProviders = result
                result.forEach(element => {
                    tboby.innerHTML +=
                    `<tr>
                    <th scope="row">${element.id}</th>
                    <td>${element.name}</td>
                    <td>${element.cellphone}</td>
                    <td>${element.address}</td>
                    <td>${element.manager}</td>
                    <td><i class="fa-regular fa-pencil" onclick="editarProveedor(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpProviders"></i></td>
                    <td><i class="fa-regular fa-trash-can" onclick="confirmarEliminacion(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpEliminar"></i></td>
                    </tr>`
                })
        })
        .catch((error) => console.error(error))
}

function crearProveedor(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
        "name": txtName.value,
        "cellphone": txtPhone.value,
        "address": txtAddress.value,
        "manager": txtManager.value
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

fetch("http://localhost:8080/api/var-store/providers/crear", requestOptions)
  .then((response) => response.json())
  .then((element) => {
  
            tboby.innerHTML +=
            `<tr>
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.cellphone}</td>
            <td>${element.address}</td>
            <td>${element.manager}</td>
            <td><i class="fa-regular fa-pencil" onclick="editarProveedor(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpProviders"></i></td>
            <td><i class="fa-regular fa-trash-can" onclick="confirmarEliminacion(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpEliminar"></i></td>
            </tr>`
            reload()
  })
  .catch((error) => console.error(error));
}

function agregarProveedor(){
    txtId.value = ""
    txtPhone.value = ""
    txtAddress.value = ""
    txtManager.value = ""
    actionType.value = "crear"
}


function modificarProveedor(){  

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "id":txtId.value, 
        "name": txtName.value,
        "cellphone": txtPhone.value,
        "address": txtAddress.value,
        "manager": txtManager.value
    });

    const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("http://localhost:8080/api/var-store/providers/actualizar", requestOptions)
    .then((response) => response.json())
    .then((element) => {
        listProviders = []
        tbody.innerHTML = ""
        obtenerProveedores()
    })
    .catch((error) => console.error(error));
}


function editarProveedor(id){
    const product = listProviders.find(element => element.id === id)
    txtId.value = id
    txtName.value = product.name
    txtPhone.value = product.cellphone
    txtAddress.value = product.address
    txtManager.value = product.manager
    actionType.value = "editar"
}


const txtName_Eliminar = document.getElementById("txtName_Eliminar")
const txtPhone_Eliminar = document.getElementById("txtPhone_Eliminar")
const txtAddress_Eliminar = document.getElementById("txtAddress_Eliminar")
const txtManager_Eliminar = document.getElementById("txtManager_Eliminar")


function confirmarEliminacion(id){
    const product = listProviders.find(element => element.id === id)
    txtId.value = id
    txtName_Eliminar.value = product.name
    txtPhone_Eliminar.value = product.cellphone
    txtAddress_Eliminar.value = product.address
    txtManager_Eliminar.value = product.manager 
    actionType.value = "borrar"
}


function eliminarProveedor(id){

        const requestOptions = {
        method: "DELETE",
        redirect: "follow"
        };
      
      fetch(`http://localhost:8080/api/var-store/providers/eliminar/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            listProviders = []
            tboby.innerHTML = ''
            obtenerProveedores()
            
        })
        .catch((error) => console.error(error)); 
}


