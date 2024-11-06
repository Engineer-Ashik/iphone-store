//console.log("phone js connected");
function phonefetch(inputtext){
fetch(`https://openapi.programming-hero.com/api/phones?search=${inputtext}`)
.then(response => response.json())
.then(data => phonedata(data))
}
  //Search button and input
  document.getElementById('button-field').addEventListener('click', function calliT(){
    loadingButton(true);
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value ;
    inputField.value = "";
    console.log("The User Input for searching.. is : ",inputValue);
    phonefetch(inputValue);
  });
  
  //main working function
function phonedata(parameter){
    let phones = parameter.data;

    //Hidden Button
    const showbutton = document.getElementById('show-button-container');
    if(phones.length > 10){
      console.log("the length is : " , phones.length);
      showbutton.classList.remove('hidden');
    }
    else{
      showbutton.classList.add('hidden');
    }

    //output only 3 rows with 12 cards
    phones = phones.slice(0,12);

   // showbutton.addEventListener('click', function slicing(){
   //   phones = parameter.data;
   //   console.log("splice click", phones);
   // })

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
        loadingButton(false);
        phonecContainer.appendChild(divCreate);
    });
}
    function loadingButton(instruction){
      const toggles = document.getElementById('loading-container');
      if(instruction === true){
        toggles.classList.remove('hidden');
      }
      else{
        toggles.classList.add('hidden');
      }
    }

//callback
//phonefetch();