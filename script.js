let englishData = {
    name: "John",
    age: "Age: 30",
    city: "City: New York",
    occupation: "Occupation: Engineer",
    company: "Company: TechCorp",
    phone: "Phone: +1 555 1234",
    email: "Email: john.doe@example.com",
    address: "Address: 123 Elm St",
    education: "Education: Bachelor's Degree",
    hobby: "Hobby: Photography",
    favorite_food: "Favorite Food: Pizza",
    favorite_color: "Favorite Color: Blue",
    favorite_movie: "Favorite Movie: Inception",
    favorite_book: "Favorite Book: 1984",
    language: "Language: English",
    nationality: "Nationality: American",
    marital_status: "Marital Status: Single",
    has_pets: "Has Pets: Yes",
    children: "Children: 0",
    car: "Car: Tesla Model S"
};

let russianData = {
    name: "Джон",
    age: "Возраст: 30",
    city: "Город: Нью-Йорк",
    occupation: "Профессия: Инженер",
    company: "Компания: ТехКорп",
    phone: "Телефон: +1 555 1234",
    email: "Эл. почта: john.doe@пример.com",
    address: "Адрес: ул. Эльм, 123",
    education: "Образование: Степень бакалавра",
    hobby: "Хобби: Фотография",
    favorite_food: "Любимая еда: Пицца",
    favorite_color: "Любимый цвет: Синий",
    favorite_movie: "Любимый фильм: Начало",
    favorite_book: "Любимая книга: 1984",
    language: "Язык: Английский",
    nationality: "Национальность: Американец",
    marital_status: "Семейное положение: Не женат",
    has_pets: "Есть домашние животные: Да",
    children: "Дети: 0",
    car: "Автомобиль: Тесла Модель S"
};

let currentLanguage = "en"; 

function populateData(data) {
    document.getElementById("name").textContent = data.name;
    document.getElementById("age").textContent = data.age;
    document.getElementById("city").textContent = data.city;
    document.getElementById("occupation").textContent = data.occupation;
    document.getElementById("company").textContent = data.company;
    document.getElementById("phone").textContent = data.phone;
    document.getElementById("email").textContent = data.email;
    document.getElementById("address").textContent = data.address;
    document.getElementById("education").textContent = data.education;
    document.getElementById("hobby").textContent = data.hobby;
    document.getElementById("favorite_food").textContent = data.favorite_food;
    document.getElementById("favorite_color").textContent = data.favorite_color;
    document.getElementById("favorite_movie").textContent = data.favorite_movie;
    document.getElementById("favorite_book").textContent = data.favorite_book;
    document.getElementById("language").textContent = data.language;
    document.getElementById("nationality").textContent = data.nationality;
    document.getElementById("marital_status").textContent = data.marital_status;
    document.getElementById("has_pets").textContent = data.has_pets;
    document.getElementById("children").textContent = data.children;
    document.getElementById("car").textContent = data.car;
}

populateData(englishData);

document.getElementById("translate-button").addEventListener("click", () => {
    if (currentLanguage === "en") {
        populateData(russianData);
        currentLanguage = "ru";
        document.getElementById("translate-button").textContent = "Switch to English";
    } else {
        populateData(englishData);
        currentLanguage = "en";
        document.getElementById("translate-button").textContent = "Switch to Russian";
    }
});
