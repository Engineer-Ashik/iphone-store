//console.log("phone js connected");
function phonefetch(){
fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
.then(response => response.json())
.then(data => phonedata(data))
}

function phonedata(parameter){
    const phones = parameter.data;
    //console.log(phones);
    const phonecContainer = document.getElementById('post-container');
    phones.forEach(phone => {
      console.log(phone);
        const divCreate = document.createElement('div');
        divCreate.classList = `border-4 border-black text-center`;
        divCreate.innerHTML = `
            <figure>
              <img src="${phone.image}" alt="${phone.phone_name}"  class="w-auto"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center">${phone.phone_name}!</h2>
              <p>${phone.slug}..</p>
              <div class="card-actions justify-center">
                <button class="btn btn-primary bg-red-700 hover:bg-green-700">Buy Now</button>
              </div>
            </div>
        `
        phonecContainer.appendChild(divCreate);
    });
}

//callback
phonefetch();