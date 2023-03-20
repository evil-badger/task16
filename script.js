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

let productListContainer = document.querySelector(".content");
let productListItemInfo = document.querySelector(".goodItemInfo");
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

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
                let productListItem = document.createElement('div');
                productListItem.className = "item";
                productListItem.innerHTML = productList.name;
                productListContainer.append(productListItem);
                    productListItem.addEventListener('click', function onClick() {
                        let itemPrice = document.createElement('span');
                        let itemBuy = document.createElement('button');
                        itemBuy.className = "buy";
                        itemBuy.innerHTML = "купить";
                        itemPrice.innerHTML = `Стоимость: ${productList.price}`;
                        productListItemInfo.innerHTML = `${productList.description}`;
                        productListItemInfo.append(itemPrice);
                        productListItemInfo.append(itemBuy);
                        itemBuy.addEventListener('click', function onClick() {
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
