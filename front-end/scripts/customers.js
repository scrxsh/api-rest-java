var listCustomers = []
var tboby = document.getElementById("tbody")
const txtId = document.getElementById("txtId")
let actionType = document.getElementById("actionType")
const txtName = document.getElementById("txtName")
const txtDocument = document.getElementById("txtDocument")
const txtPhone = document.getElementById("txtPhone")
const txtAddress = document.getElementById("txtAddress")

obtenerClientes()

function reload(){
    window.location.reload();
}

function action(){
    if(actionType.value == "editar"){
        modificarCliente()
        $('#popUpCustomers').modal('hide');
    }else if(actionType.value == "crear"){
        crearCliente()
        $('#popUpCustomers').modal('hide');
    }else{
        eliminarCliente(txtId.value)
        $('#popUpEliminar').modal('hide');
    }
}


function obtenerClientes(){
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("http://localhost:8080/api/var-store/customers/all", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            listCustomers = result
                result.forEach(element => {
                    tboby.innerHTML +=
                    `<tr>
                    <th scope="row">${element.id}</th>
                    <td>${element.name}</td>
                    <td>${element.document}</td>
                    <td>${element.cellphone}</td>
                    <td>${element.address}</td>
                    <td><i class="fa-regular fa-pencil" onclick="editarCliente(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpCustomers"></i></td>
                    <td><i class="fa-regular fa-trash-can" onclick="confirmarEliminacion(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpEliminar"></i></td>
                    </tr>`
                })
        })
        .catch((error) => console.error(error))
} 

function crearCliente(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
        "name": txtName.value,
        "document": txtDocument.value,
        "cellphone": txtPhone.value,
        "address": txtAddress.value
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

fetch("http://localhost:8080/api/var-store/customers/crear", requestOptions)
  .then((response) => response.json())
  .then((element) => {
  
            tboby.innerHTML +=
            `<tr>
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.document}</td>
            <td>${element.cellphone}</td>
            <td>${element.address}</td>
            <td><i class="fa-regular fa-pencil" onclick="editarCliente(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpCustomers"></i></td>
            <td><i class="fa-regular fa-trash-can" onclick="confirmarEliminacion(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpEliminar"></i></td>
            </tr>`
            reload()
  })
  .catch((error) => console.error(error));
}

function agregarCliente(){
    txtId.value = ""
    txtName.value = ""
    txtDocument.value = ""
    txtPhone.value = ""
    txtAddress.value = ""
    actionType.value = "crear"
}


function modificarCliente(){  

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "id":txtId.value, 
        "name": txtName.value,
        "document": txtDocument.value,
        "cellphone": txtPhone.value,
        "address": txtAddress.value
    });

    const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("http://localhost:8080/api/var-store/customers/actualizar", requestOptions)
    .then((response) => response.json())
    .then((element) => {
        listCustomers = []
        tboby.innerHTML = ""
        obtenerClientes()
    })
    .catch((error) => console.error(error));
}



function editarCliente(id){
    const product = listCustomers.find(element => element.id == id)
    txtId.value = id
    txtName.value = product.name
    txtDocument.value = product.document
    txtPhone.value = product.cellphone
    txtAddress.value = product.address
    actionType.value = "editar"
}


const txtName_Eliminar = document.getElementById("txtName_Eliminar")
const txtDocument_Eliminar = document.getElementById("txtDocument_Eliminar")
const txtPhone_Eliminar = document.getElementById("txtPhone_Eliminar")
const txtAddress_Eliminar = document.getElementById("txtAddress_Eliminar")


function confirmarEliminacion(id){
    const product = listCustomers.find(element => element.id === id)
    txtId.value = id
    txtName_Eliminar.value = product.name
    txtDocument_Eliminar.value = product.document
    txtPhone_Eliminar.value = product.cellphone
    txtAddress_Eliminar.value = product.address
    actionType.value = "borrar"
}


function eliminarCliente(id){

        const requestOptions = {
        method: "DELETE",
        redirect: "follow"
        };
      
      fetch(`http://localhost:8080/api/var-store/customers/eliminar/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            listCustomers = []
            tboby.innerHTML = ''
            obtenerClientes()
            
        })
        .catch((error) => console.error(error));

        
}


