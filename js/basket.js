function GetProducts() {
    let basket = JSON.parse(localStorage.getItem('basket'))

    if(basket.length === 0){
        let alert = ""
        alert = `
        <div class="alert text-center alert-danger" role="alert">
        Basket is empty!
            </div>`
            document.getElementById('list').innerHTML = alert
    }

    let div = ""
    
    basket.forEach(x => {
        div += `
        <div class="col-lg-1">
        <button class="btn btn-danger btn-del" onclick="Delete()">Delete</button>
    </div>
        <div class="box d-flex justify-content-between align-items-center">
       
        <div class="col-lg-2">
            <img src=${x.Image} alt="">
            
        </div>
      
        </div>
        <div class="col-lg-3">
            <h5>Mehsulun adi: ${x.Name}</h5>
        </div>
        <div class="col-lg-2">
            <h6>Qiymet: ${x.Price}</h6>
        </div>
        <div class="col-lg-2">
            <span>Count: ${x.Count}</span>
        </div>
       
    </div>`
    });

    document.getElementById('list').innerHTML = div
}

GetProducts();

function Clear() {
    let basket = JSON.parse(localStorage.getItem('basket'))
    basket.length = 0
    localStorage.setItem('basket',JSON.stringify(basket))
    GetProducts();
    CountProduct();
}
function CountProduct() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('count').innerHTML = basket.length
}
CountProduct();

function Refresh() {
    window.location.reload()
}
function Delete(){
    let deletebtn=document.querySelectorAll('.btn-del');

    for(let delbtn of deletebtn){
        delbtn.addEventListener('click',function(event){
            var btndeleted=event.target;
            btndeleted.parentElement.parentElement.remove();
        })
    }
}