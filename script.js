const products = {
  notebooks: [
    {
      name: ' Lenovo Legion 5 15ACH6H',
      price: '50000',
      description: 'Производителем позиционируются как сбалансированные модели верхней ценовой категории, ориентированные на требовательных геймеров, киберспортсменов и энтузиастов, желающих получить максимум впечатлений от современных игровых проектов ААА-уровня при максимальных настройках графики.  '
    },
    {
      name: 'Apple MacBook Pro 14 2021',
      price: '108000',
      description: 'Созданы для кодеров, дизайнеров, художников, музыкантов, менеджеров и других профессионалов, которым требуется чрезвычайно мощный, современный и безотказный ноутбук с полным фаршем и длительным временем автономной работы. '
    },
    {
      name: 'Acer Nitro 5 AN515-45',
      price: '38000',
      description: 'Позиционируются как модели верхней ценовой категории, предназначенные для требовательных геймеров и начинающих киберспортсменов, желающих приобрести полноценную игровую станцию для жарких сетевых сражений.'
    }

  ],
  smartphones: [
    {
      name: 'Apple iPhone 14 Pro',
      price: '50000',
      description: 'Экран с частотой обновления 120 Гц. Продвинутая тройная камера. Ультраширик с возможностью макросъемки. Защита по стандарту IP68. Вспышка с регулировкой мощности.'
    },
    {
      name: 'Motorola Moto G32',
      price: '7000',
      description: 'Motorola G32 з потужною системою камер 50 Мп, 6.5-дюймовим ультрашироким FullHD+ дисплеєм і багатовимірним звуком Dolby Atmos забезпечує отримання унікального користувальницького досвіду. '
    },
    {
      name: 'Poco X5 Pro',
      price: '14000',
      description: 'Смартфон солидного среднего уровня, сбалансированный по всем ключевым пунктам программы. Лицевая панель мобильного устройства встречает пользователя AMOLED-экраном с размерами по диагонали 6.67 дюймов, разрешением транслируемой картинки FUll HD+ (2400х1080 пикселей) и частотой обновления до 120 Гц.  '
    },
  ],
  fridges: [
    {
      name: 'Bosch KGN36VL326',
      price: '21000',
      description: 'Двухкамерный представитель семейства Serie 4, выпущенный в 2019 году — это холодильник стандарт-класса в линейке немецкого производителя Bosch. Он получил два контура охлаждения и многопотоковую систему MultiAirflow, способствующую равномерному распределению холодного воздуха.'
    },
    {
      name: 'Indesit LI 6 S1 W',
      price: '14000',
      description: 'Классический двухкамерный холодильник со средней вместимостью и стандартной компоновкой. Позиционируется производителем в доступный ценовой сегмент, может послужить хорошим выбором для небольших семейств (1-2 человека), а также пользователей, которым нужен простой классический холодильник без «излишек» современных функций и возможностей. Холодильник Indesit LI 6 S1 W располагает двумя камерами с общим полезным объемом на уровне 271 л.'
    },
    {
      name: 'LG GA-B379SLUL',
      price: '22000',
      description: 'Двухкамерный 2-контурный холодильник компании LG — это прибор с системой автоматического размораживания Total No Frost в двух камерах и удобным внешним сенсорным управлением с функцией защиты от детей. Также модель оснащена фирменным инверторным компрессором, на который распространяется 10-летняя гарантия производителя. Помимо надежности инвертор позитивно сказывается на уровне шума (до 39 дБ) и энергопотреблении (класс A+).'
    },
  ],
}

const productListContainer = document.querySelector(".content");
const productListItemInfo = document.querySelector(".goodItemInfo");
const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openPopupButtons = document.querySelectorAll('.open-popup');
const closePopupButton = document.querySelector('.close-popup');
const divFeedback = document.querySelector(".feedback");
let positionName;
let positionPrice;

function addDivContent(inputValue) {
  for (let category in products) {
    //перебор обьекта products, ключи notebooks, smartphones,fridges
    if (category == inputValue) {
      productListContainer.innerHTML = "";
      for (let productList of products[category]) {
        //перебирает массив объектов каждой категории
        //products[category] - это массив notebooks
        //notebooks[0,1,2] - это обьекты в массиве
        //productList - это перебираемые обьекты, из них выбираем все что нужно для добавленния в div
        const productListItem = document.createElement('div');
        productListItem.className = "item";
        productListItem.innerHTML = productList.name;
        productListContainer.append(productListItem);

        productListItem.addEventListener('click', function onClick() {
          const itemPrice = document.createElement('span');
          const itemBuy = document.createElement('button');
          itemBuy.className = "buy";
          itemBuy.innerHTML = "купить";
          itemPrice.innerHTML = `Стоимость: ${productList.price}`;
          productListItemInfo.innerHTML = `${productList.description}`;

          positionName = productList.name;
          positionPrice = productList.price;


          productListItemInfo.append(itemPrice);
          productListItemInfo.append(itemBuy);
          console.log(productList.price);
          console.log(productList.description);
          itemBuy.addEventListener('click', function onClick() {

           inputs.forEach(function(element, index, arr) {
              inputs[index].inputEl.value="";
            });

            popupBg.classList.add('active');
            popup.classList.add('active');
            closePopupButton.addEventListener('click', () => {
              popupBg.classList.remove('active');
              popup.classList.remove('active');
              productListItemInfo.innerHTML = "";
              let content = document.querySelector(".content");
              content.innerHTML = "";
            });
          })
        });
      }
    }
  }
}

//счетчик количества товара
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const counter = document.getElementById('counter');
let count = 0;

decrement.addEventListener('click', function () {
  count--;
  counter.innerHTML = count;
});

increment.addEventListener('click', function () {
  count++;
  counter.innerHTML = count;
});

//работа с формой
const form = document.querySelector(".form");
const firstnameInput = form.firstname;
const lastnameInput = form.lastname;
const surnameInput = form.surname;
const comment = form.comment;
const button = document.querySelector('#submit');
const selectCity = document.getElementById("selectCity");
const selectDelivery = document.getElementById("selectDelivery");
const selectPayment = document.getElementById("selectPayment");
const divResult = document.createElement("div");

function validateStringLength(value, length) {
  return value.length >= length;
}

function validateForValue(value) {
  return !!value.trim();
}

const inputs = [
  {
    name: 'firstName',
    inputEl: firstnameInput,
    maxLengthValue: 2,
    validationRules: [validateStringLength, validateForValue],
    isValid: false,
    isValidValue: false,
    isValidLength: false
  },
  {
    name: 'lastName',
    inputEl: lastnameInput,
    maxLengthValue: 6,
    validationRules: [validateStringLength, validateForValue],
    isValid: false,
    isValidValue: false,
    isValidLength: false
  },
  {
    name: 'surName',
    inputEl: surnameInput,
    maxLengthValue: 3,
    validationRules: [validateStringLength, validateForValue],
    isValid: false,
    isValidValue: false,
    isValidLength: false
  },
]

form.addEventListener('click', (e) => {
  e.preventDefault();
})


button.addEventListener('click', (event) => {
  event.preventDefault();
  divFeedback.innerHTML = "";

  const validateArr = inputs.map((el) => {
    const isAllValid = el.validationRules.map(func => {
      return func(el.inputEl.value, el.maxLengthValue);
    })

    return isAllValid.every(el => el === true);
  })

  if (validateArr.every(el => el === true)) {
    const data = {};

    inputs.forEach((input) => {
      data[input.name] = input.inputEl.value;

    })
    data[selectCity.id] = selectCity.value;
    data[selectDelivery.id] = selectDelivery.value;
    data[selectPayment.id] = selectPayment.value;
    data[counter.id] = counter.innerText;
    data[comment.id] = comment.value;
    sendData(data);
  }
  else {
  
    const validateArrLength = inputs.map((el) => {
      const isAllValid2 = el.validationRules.map(func => {
        return func(el.inputEl.value, el.maxLengthValue);
      })
      return isAllValid2[0];
     
    })

      const validateArrValue = inputs.map((el) => {
      const isAllValid2 = el.validationRules.map(func => {
        return func(el.inputEl.value, el.maxLengthValue);
      })
      return isAllValid2[1];
    })


     inputs.forEach(function (element, index) {
      element.isValidLength = validateArrLength[index];
      element.isValidValue = validateArrValue[index];
      element.isValid=validateArr[index];

      if(element.isValidValue==false){
        inputs[index].inputEl.className = "red";
        inputs[index].inputEl.value="";
        inputs[index].inputEl.placeholder="Пустое значение";
      }
      else if(element.isValidLength==false){
        inputs[index].inputEl.className = "red";
        inputs[index].inputEl.value="";
        inputs[index].inputEl.placeholder="Мало символов"
      }
      else{
          inputs[index].inputEl.className = "green";
      }
     })
     console.log(inputs);
  }
})

function sendData(data) {
  console.log(data);
  divResult.innerHTML = "";

  popupBg.classList.remove('active');
  popup.classList.remove('active');

  const ResultHeader = document.createElement("div");
  const ResultName = document.createElement("div");
  const ResultPrice = document.createElement("div");
  const ResultDeliveryCity = document.createElement("div");
  const ResultDeliveryPost = document.createElement("div");
  const ResultQuantity = document.createElement("div");

  ResultHeader.innerHTML = "Ваш заказ принят. Данные заказа:";
  ResultName.innerHTML = `Название позиции:${positionName}`;
  ResultPrice.innerHTML = `Цена:${positionPrice}`;
  ResultQuantity.innerHTML = `Количество: ${data.counter}`;
  ResultDeliveryCity.innerHTML = `Город доставки: ${data.selectCity} `;
  ResultDeliveryPost.innerHTML = `Почтовый филиал: ${data.selectDelivery} `;

  divFeedback.append(ResultHeader);
  divFeedback.append(ResultName);
  divFeedback.append(ResultQuantity);
  divFeedback.append(ResultPrice);
  divFeedback.append(ResultDeliveryCity);
  divFeedback.append(ResultDeliveryPost);

}


