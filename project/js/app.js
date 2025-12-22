document.addEventListener("DOMContentLoaded", () => {

    const lang = navigator.language || navigator.userLanguage;

    if (document.getElementById("titleText")) {
        if(lang.startsWith("en")){
            document.getElementById("titleText").innerHTML = "Select Your Region";
        }
    }

    if (window.location.pathname.includes("price.html")) {
        showHarga();
    }

});

function pilihLokasi(zone){
    localStorage.setItem("lokasi", zone);
    window.location.href = "price.html";
}

function showHarga(){

    const lokasi = localStorage.getItem("lokasi");

    const title = document.getElementById("pageTitle");
    const productList = document.getElementById("productList");

    if(lokasi === "semenanjung"){
        title.innerHTML = "Harga Semenanjung Malaysia";

        var harga = [
            {name:"Produk A", price:"RM30"},
            {name:"Produk B", price:"RM10"},
            {name:"Produk C", price:"RM50"},
        ];

    } else {
        title.innerHTML = "Harga Sabah & Sarawak";

        var harga = [
            {name:"Produk A", price:"RM35"},
            {name:"Produk B", price:"RM13"},
            {name:"Produk C", price:"RM56"},
        ];
    }

    harga.forEach(item => {

        const card = `
            <div class="card">
                <h2>${item.name}</h2>
                <p>${item.price}</p>
            </div>
        `;

        productList.innerHTML += card;
    });

}
