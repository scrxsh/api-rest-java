var listOrders = []
var tboby = document.getElementById("tbody")
const txtId = document.getElementById("txtId")
let actionType = document.getElementById("actionType")
const txtCustomer = document.getElementById("txtCustomer")
const txtWorker = document.getElementById("txtWorker")
const txtDate = document.getElementById("txtDate")
const txtTotal = document.getElementById("txtTotal")

obtenerVentas()

function reload(){
    window.location.reload();
}

function action(){
    if(actionType.value == "editar"){
        modificarVenta()
        $('#popUpOrders').modal('hide');
    }else if(actionType.value == "crear"){
        crearVenta()
        $('#popUpOrders').modal('hide');
    }else{
        eliminarVenta(txtId.value)
        $('#popUpEliminar').modal('hide');
    }
}


function obtenerVentas(){
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("http://localhost:8080/api/var-store/orders/all", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            listOrders = result
                result.forEach(element => {
                    tboby.innerHTML +=
                    `<tr>
                    <th scope="row">${element.id}</th>
                    <td>${element.customer}</td>
                    <td>${element.worker}</td>
                    <td>${element.orderDate}</td>
                    <td>${element.final_price}</td>
                    <td><i class="fa-regular fa-pencil" onclick="editarVenta(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpOrders"></i></td>
                    <td><i class="fa-regular fa-trash-can" onclick="confirmarEliminacion(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpEliminar"></i></td>
                    </tr>`
                })
        })
        .catch((error) => console.error(error))
} 

function crearVenta(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
        "customer": txtCustomer.value,
        "worker": txtWorker.value,
        "orderDate": txtDate.value,
        "final_price": txtTotal.value
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

fetch("http://localhost:8080/api/var-store/orders/crear", requestOptions)
  .then((response) => response.json())
  .then((element) => {
  
            tboby.innerHTML +=
            `<tr>
            <th scope="row">${element.id}</th>
            <td>${element.customer}</td>
            <td>${element.worker}</td>
            <td>${element.orderDate}</td>
            <td>${element.final_price}</td>
            <td><i class="fa-regular fa-pencil" onclick="editarVenta(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpOrders"></i></td>
            <td><i class="fa-regular fa-trash-can" onclick="confirmarEliminacion(${element.id})" data-bs-toggle="modal" data-bs-target="#popUpEliminar"></i></td>
            </tr>`
            reload()
  })
  .catch((error) => console.error(error));
}

function agregarVenta(){
    txtId.value = ""
    txtCustomer.value = ""
    txtWorker.value = ""
    txtDate.value = ""
    actionType.value = "crear"
}


function modificarVenta(){  

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "id":txtId.value, 
        "customer": txtCustomer.value,
        "worker": txtWorker.value,
        "orderDate": txtDate.value,
        "final_price": txtTotal.value
    });

    const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("http://localhost:8080/api/var-store/orders/actualizar", requestOptions)
    .then((response) => response.json())
    .then((element) => {
        listOrders = []
        tboby.innerHTML = ""
        obtenerVentas()
    })
    .catch((error) => console.error(error));
}



function editarVenta(id){
    const product = listOrders.find(element => element.id == id)
    txtId.value = id
    txtCustomer.value= product.customer
    txtWorker.value = product.worker
    txtDate.value = product.orderDate
    txtTotal.value = product.final_price
    actionType.value = "editar"
}


const txtCustomer_Eliminar = document.getElementById("txtCustomer_Eliminar")
const txtWorker_Eliminar = document.getElementById("txtWorker_Eliminar")
const txtDate_Eliminar = document.getElementById("txtDate_Eliminar")
const txtTotal_Eliminar = document.getElementById("txtTotal_Eliminar")


function confirmarEliminacion(id){
    const product = listOrders.find(element => element.id === id)
    txtId.value = id
    txtCustomer_Eliminar.value= product.customer
    txtWorker_Eliminar.value = product.worker
    txtDate_Eliminar.value = product.orderDate
    txtTotal_Eliminar.value = product.final_price
    actionType.value = "borrar"
}


function eliminarVenta(id){

        const requestOptions = {
        method: "DELETE",
        redirect: "follow"
        };
      
      fetch(`http://localhost:8080/api/var-store/orders/eliminar/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            listOrders = []
            tboby.innerHTML = ''
            obtenerVentas()
            
        })
        .catch((error) => console.error(error));

        
}


