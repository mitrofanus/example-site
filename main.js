const products = [
    {
        id: 0,
        title: "iPhone 15 Pro",
        price: "99 990 ₽",
        description: "Новейший iPhone с чипом A17 Pro, титановым корпусом и революционной системой камер. Профессиональные возможности в элегантном дизайне.",
        features: [
            "Чип A17 Pro с 6-ядерным GPU",
            "Система Pro-камер 48 Мп",
            "Титановый корпус",
            "Экран Super Retina XDR 6.1\"",
            "USB-C разъем"
        ],
        images: [
            "/Images/15p.jpg",
            "/Images/15p2.jpg",
            "/Images/15p3.jpg",
            "/Images/15p4.jpg"
        ]
    },
    {
        id: 1,
        title: "MacBook Air M2",
        price: "129 990 ₽",
        description: "Невероятно тонкий и легкий ноутбук с чипом M2. Идеальное сочетание производительности и портативности для работы и творчества.",
        features: [
            "Чип Apple M2",
            "Дисплей Liquid Retina 13.6\"",
            "До 18 часов автономной работы",
            "8-ядерный CPU и GPU",
            "Вес всего 1.24 кг"
        ],
        images: [
            "/Images/mac1.png",
            "/Images/mac2.png",
            "/Images/mac3.png",
        ]
    },
    {
        id: 2,
        title: "AirPods Pro (2-го поколения)",
        price: "24 990 ₽",
        description: "Беспроводные наушники с активным шумоподавлением нового уровня. Персонализированное пространственное аудио создает уникальный звуковой опыт.",
        features: [
            "Чип H2 нового поколения",
            "Активное шумоподавление",
            "Персонализированное Spatial Audio",
            "До 6 часов прослушивания",
            "Устойчивость к поту и влаге IPX4"
        ],
        images: [
            "/Images/pods1.jpg",
            "/Images/pods2.jpg",
            "/Images/pods3.jpg"
        ]
    },
    {
        id: 3,
        title: "iPad Pro 12.9\"",
        price: "109 990 ₽",
        description: "Самый продвинутый iPad с чипом M2 и дисплеем Liquid Retina XDR. Профессиональная производительность в ультрапортативном форм-факторе.",
        features: [
            "Чип Apple M2",
            "Дисплей Liquid Retina XDR 12.9\"",
            "Поддержка Apple Pencil (2-го поколения)",
            "Система камер Pro",
            "Thunderbolt / USB 4"
        ],
        images: [
            "/Images/ipad1.jpg",
            "/Images/ipad2.jpg",
            "/Images/ipad3.jpg",
        ]
    },
    {
        id: 4,
        title: "Apple Watch Series 9",
        price: "39 990 ₽",
        description: "Самые умные часы Apple с новым чипом S9 и ярким дисплеем. Продвинутые функции здоровья и фитнеса в стильном корпусе.",
        features: [
            "Чип S9 SiP",
            "Яркий дисплей Always-On Retina",
            "Двойное касание",
            "Улучшенная Siri",
            "Водонепроницаемость до 50 м"
        ],
        images: [
            "/Images/watch1.jpg",
            "/Images/watch2.jpg",
            "/Images/watch3.jpg"
        ]
    },
    {
        id: 5,
        title: "iMac 24\" M3",
        price: "159 990 ₽",
        description: "Новый iMac с чипом M3 в ярких цветах. Идеальное сочетание стиля и производительности для дома и офиса.",
        features: [
            "Чип Apple M3",
            "Дисплей Retina 4.5K 24\"",
            "Камера FaceTime HD 1080p",
            "Студийное качество звука",
            "7 ярких цветов"
        ],
        images: [
            "/Images/imac1.jpg",
            "/Images/imac2.jpg",
            "/Images/imac3.jpg",
            "/Images/imac4.jpg"
        ]
    },
    {
        id: 6,
        title: "Apple Vision Pro",
        price: "349 990 ₽",
        description: "Новый уровень взаимодействия с цифровым миром — гарнитура смешанной реальности от Apple, которая совмещает физическое и виртуальное пространство.",
        features: [
            "Дисплей с разрешением выше 4K на каждый глаз",
            "Чип Apple R1 + M24\"",
            "Управление глазами, голосом и жестами",
            " До 2 часов автономной работы (или весь день с внешним аккумулятором)"
        ],
        images: [
            "/Images/av1.png",
            "/Images/av2.png",
            "/Images/av3.jpg"
        ]
    },
    {
        id: 7,
        title: "Homepod 2",
        price: "33 990 ₽",
        description: "Умная колонка с мощным звуком и глубоким басом. Идеально впишется в экосистему Apple и станет центром твоего умного дома.",
        features: [
            "Пространственное аудио с технологией вычислительного звука",
            "Интеграция с Siri",
            "Распознавание голоса разных пользователей",
            " Датчики температуры и влажности"
        ],
        images: [
            "/Images/pod1.jpg",
            "/Images/pod2.jpg",
            "/Images/pod3.jpg.png"
        ]
    },
    {
        id: 8,
        title: "Magic Keyboard",
        price: "16 990 ₽",
        description: "Элегантная и удобная клавиатура с сенсором Touch ID для быстрой разблокировки и безопасных покупок. Совместима с Mac на чипах Apple.",
        features: [
            "Встроенный Touch ID",
            "Механизм ножницы — тихий и быстрый",
            "Зарядка через Lightning",
            "Компактный дизайн с цифровым блоком"
        ],
        images: [
            "/Images/mk1.jpg",
            "/Images/mc2.jpg",
            "/Images/mc3.jpg"
        ]
    }
];

let currentSlide = 0;
let currentProduct = null;
let cart = [];


function updateCartUI() {
    const cartItemsEl = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');
    cartItemsEl.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.title} — ${item.quantity} шт. (${item.price * item.quantity} ₽)`;
        cartItemsEl.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotalEl.textContent = `Итого: ${total.toLocaleString()} ₽`;
}

document.querySelector('.btn-secondary').addEventListener('click', function() {
    if (!currentProduct) return;

    // Проверяем, есть ли уже товар в корзине
    const existingItem = cart.find(item => item.id === currentProduct.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: currentProduct.id,
            title: currentProduct.title,
            price: parseInt(currentProduct.price.replace(/\D/g, '')),
            quantity: 1
        });
    }

    updateCartUI();
});


// Открытие попапа
document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-product'));
        currentProduct = products[productId];
        showProduct(currentProduct);
        document.querySelector('.popup-overlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Показать товар в попапе
function showProduct(product) {
    // Заполнить информацию о товаре
    document.querySelector('.product-title').textContent = product.title;
    document.querySelector('.product-price').textContent = product.price;
    document.querySelector('.product-description').textContent = product.description;
    
    // Заполнить особенности
    const featuresList = document.querySelector('.features-list');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Создать слайды
    const carousel = document.querySelector('.carousel');
    carousel.innerHTML = '';
    product.images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${image}" alt="${product.title} - изображение ${index + 1}">`;
        carousel.appendChild(slide);
    });

    // Создать миниатюры
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    thumbnailContainer.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="Миниатюра ${index + 1}">`;
        thumbnail.addEventListener('click', () => showSlide(index));
        thumbnailContainer.appendChild(thumbnail);
    });

    currentSlide = 0;
}

// Показать слайд
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    slides.forEach(slide => slide.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    if (slides[index]) {
        slides[index].classList.add('active');
        thumbnails[index].classList.add('active');
        currentSlide = index;
    }
}

// Навигация по слайдам
document.querySelector('.next').addEventListener('click', function() {
    const totalSlides = currentProduct.images.length;
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', function() {
    const totalSlides = currentProduct.images.length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

// Закрытие попапа
document.querySelector('.close-popup').addEventListener('click', function() {
    document.querySelector('.popup-overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.querySelector('.cart-icon').style.display = 'block';
});

// Закрытие попапа при клике на фон
document.querySelector('.popup-overlay').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
        document.querySelector('.cart-icon').classList.remove('disabled');
    }
});

// Управление клавишами
document.addEventListener('keydown', function(e) {
    if (!document.querySelector('.popup-overlay').classList.contains('active')) return;
    
    if (e.key === 'ArrowRight') {
        const totalSlides = currentProduct.images.length;
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    } else if (e.key === 'ArrowLeft') {
        const totalSlides = currentProduct.images.length;
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    } else if (e.key === 'Escape') {
        document.querySelector('.popup-overlay').classList.remove('active');
        document.body.style.overflow = 'auto';
        document.querySelector('.cart-icon').classList.remove('disabled');
    }
});

// Обработчики кнопок действий
document.querySelector('.btn-primary').addEventListener('click', function() {
    alert(`Покупка: ${currentProduct.title}`);
});

document.querySelector('.btn-secondary').addEventListener('click', function() {
    alert(`Добавлено в корзину: ${currentProduct.title}`);
});

const cartBtn = document.getElementById('cartBtn');
  const cartPopup = document.getElementById('cartPopup');
  const closeCart = document.querySelector('.close-cart');

  cartBtn.addEventListener('click', () => {
    cartPopup.classList.add('active');
  });

  closeCart.addEventListener('click', () => {
    cartPopup.classList.remove('active');
  });
 
  document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-product'));
        currentProduct = products[productId];
        showProduct(currentProduct);
        document.querySelector('.popup-overlay').classList.add('active');
        document.body.style.overflow = 'hidden';

        // 👇 Прячем иконку корзины
        document.querySelector('.cart-icon').style.display = 'none';
    });
});


cartBtn.addEventListener('click', () => {
    cartPopup.classList.add('active');
    document.querySelector('.cart-icon').style.display = 'none';
});

closeCart.addEventListener('click', () => {
    cartPopup.classList.remove('active');
    document.querySelector('.cart-icon').style.display = 'block';
});