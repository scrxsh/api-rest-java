var listProducts = []
var tboby = document.getElementById("tbody")
const txtId = document.getElementById("txtId")
let actionType = document.getElementById("actionType")
const txtName = document.getElementById("txtName")
const txtCategory = document.getElementById("txtCategory")
const txtUnitPrice = document.getElementById("txtUnitPrice")
const txtIVA = document.getElementById("txtIVA")
const txtStock = document.getElementById("txtStock")
const txtImg = document.getElementById("txtImg")
const txtDescription = document.getElementById("txtDescription")

obtenerProductos()

function reload(){
    window.location.reload();
}

function action(){
    if(actionType.value == "editar"){
        modificarProducto()
        $('#popUpProducts').modal('hide');
    }else if(actionType.value == "crear"){
        crearProducto()
        $('#popUpProducts').modal('hide');
    }else{
        eliminarProducto(txtId.value)
        $('#popUpEliminar').modal('hide');
    }
}


function obtenerProductos(){
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("http://localhost:8080/api/var-store/products/all", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            listProducts = result
                result.forEach(element => {
                    tboby.innerHTML +=
                    `<tr>
                    <th scope="row">${element.id}</th>
                    <td>${element.name}</td>
                    <td>${element.category}</td>
                    <td>${(element.unitPrice).toFixed(0)}</td>
                    <td>${(element.percentIva * 100)}%</td>
                    <td>${(element.unitPrice + (element.percentIva*element.unitPrice)).toFixed(0)}</td>
                    <td>${element.stock}</td>
                    <td>${element.description}</td>
                    <td><img src="${element.urlImg}" class="img-thumbnail" width="80" height="80"></td>
                    <td><i class="fa-regular fa-pencil" onclick="editarProducto(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpProducts"></i></td>
                    <td><i class="fa-regular fa-trash-can" onclick="confirmarEliminacion(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpEliminar"></i></td>
                    </tr>`
                })
        })
        .catch((error) => console.error(error))
} 

function crearProducto(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
        "name": txtName.value,
        "category": txtCategory.value,
        "unitPrice": txtUnitPrice.value,
        "percentIva": txtIVA.value,
        "unitPrice": txtUnitPrice.value,
        "stock": txtStock.value,
        "description": txtDescription.value,
        "urlImg": txtImg.value
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

fetch("http://localhost:8080/api/var-store/products/crear", requestOptions)
  .then((response) => response.json())
  .then((element) => {
  
            tboby.innerHTML +=
            `<tr>
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.category}</td>
            <td>${(element.unitPrice).toFixed(0)}</td>
            <td>${(element.percentIva * 100)}%</td>
            <td>${(element.unitPrice + (element.percentIva*element.unitPrice)).toFixed(0)}</td>
            <td>${element.stock}</td>
            <td>${element.description}</td>
            <td><img src="${element.urlImg}" class="img-thumbnail" width="80" height="80"></td>
            <td><i class="fa-regular fa-pencil" onclick="editarProducto(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpProducts"></i></td>
            <td><i class="fa-regular fa-trash-can" onclick="confirmarEliminacion(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpEliminar"></i></td>
            </tr>`
            reload()
  })
  .catch((error) => console.error(error));
}

function agregarProducto(){
    txtId.value = ""
    txtName.value = ""
    txtCategory.value = ""
    txtDescription.value = ""
    txtImg.value = ""
    actionType.value = "crear"
}


function modificarProducto(){  

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "id": txtId.value,
        "name": txtName.value,
        "category": txtCategory.value,
        "unitPrice": txtUnitPrice.value,
        "percentIva": txtIVA.value,
        "unitPrice": txtUnitPrice.value,
        "stock": txtStock.value,
        "description": txtDescription.value,
        "urlImg": txtImg.value
    });

    const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("http://localhost:8080/api/var-store/products/actualizar", requestOptions)
    .then((response) => response.json())
    .then((element) => {
        listProducts = []
        tboby.innerHTML = ""
        obtenerProductos()
    })
    .catch((error) => console.error(error));
}



function editarProducto(id){
    const product = listProducts.find(element => element.id == id)
    txtId.value = id
    txtName.value = product.name
    txtCategory.value = product.category
    txtUnitPrice.value = product.unitPrice
    txtIVA.value = product.percentIva
    txtStock.value = product.stock
    txtDescription.value = product.description
    txtImg.value = product.urlImg
    actionType.value = "editar"
}


const txtName_Eliminar = document.getElementById("txtName_Eliminar")
const txtCategory_Eliminar = document.getElementById("txtCategory_Eliminar")
const txtUnitPrice_Eliminar = document.getElementById("txtUnitPrice_Eliminar")
const txtIVA_Eliminar = document.getElementById("txtIVA_Eliminar")
const txtStock_Eliminar = document.getElementById("txtStock_Eliminar")


function confirmarEliminacion(id){
    const product = listProducts.find(element => element.id === id)
    txtId.value = id
    txtName_Eliminar.value = product.name
    txtCategory_Eliminar.value = product.category
    txtUnitPrice_Eliminar.value = product.unitPrice
    txtIVA_Eliminar.value = (product.percentIva * 100).toFixed(0) + "%"
    txtStock_Eliminar.value = product.stock
    actionType.value = "borrar"
}


function eliminarProducto(id){

        const requestOptions = {
        method: "DELETE",
        redirect: "follow"
        };
      
      fetch(`http://localhost:8080/api/var-store/products/eliminar/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            listProducts = []
            tboby.innerHTML = ''
            obtenerProductos()
            
        })
        .catch((error) => console.error(error));

        
}


