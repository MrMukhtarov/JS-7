if(localStorage.getItem('basket') === null) {
    localStorage.setItem('basket',JSON.stringify([]));
}

let buttons = document.querySelectorAll('.btn_add');

for(let btn of buttons) {
    btn.addEventListener('click',function(e){
        e.preventDefault();
        let basket = JSON.parse(localStorage.getItem('basket'));
        let prod_id = e.target.parentElement.parentElement.id;
        let prod_img = e.target.parentElement.previousElementSibling.src;
        let prod_name = e.target.previousElementSibling.previousElementSibling.innerHTML;
        let prod_price = e.target.previousElementSibling.innerHTML;

        console.log(prod_id);
        console.log(prod_img);
        console.log(prod_name);
        console.log(prod_price);

        let existProd = basket.find(x => x.Id == prod_id);
        console.log(existProd);

        if(existProd === undefined) {
            basket.push({
                Id: prod_id,
                Image: prod_img,
                Name: prod_name,
                Price: prod_price,
                Count: 1
            })
        }
        else{
            existProd.Count += 1
        }
        localStorage.setItem('basket',JSON.stringify(basket));
        CountProduct();
    })
}



function CountProduct() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('count').innerHTML = basket.length
}

CountProduct();

