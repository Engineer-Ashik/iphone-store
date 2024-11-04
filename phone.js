//console.log("phone js connected");
function phonefetch(inputtext){
fetch(`https://openapi.programming-hero.com/api/phones?search=${inputtext}`)
.then(response => response.json())
.then(data => phonedata(data))
}
  //button and input
  document.getElementById('button-field').addEventListener('click', function calliT(){
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value ;
    inputField.value = "";
    console.log(inputValue);
    phonefetch(inputValue);
  });
  
  //main working function
function phonedata(parameter){
    const phones = parameter.data;
    //console.log(phones);
    const phonecContainer = document.getElementById('post-container');
    phonecContainer.textContent = '';
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