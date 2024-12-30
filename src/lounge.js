import restaurant0 from '../src/assets/restaurant.png';
import restaurant1 from '../src/assets/restaurant1.jpg';
import restaurant2 from '../src/assets/restaurant2.jpg';
import spa1 from '../src/assets/spa_1.png';
import spa2 from '../src/assets/spa_2.png';

export const restaurant = {
  "name": "Restaurant",
  "capacity": 200,
  "tables": 50,
  "description": "Our restaurant offers a capacity of 200 guests with 50 tables, providing a delightful dining experience for every occasion.",
  "images": [
    restaurant0,
    restaurant1,
    restaurant2
  ]
}

export const spa = {
  "name": "Spa",
  "treatments": [
    "Facial Radiofrequency",
    "Hydrodermabrasion",
    "Invigorating Body Massages"
  ],
  "description": "Experience relaxation in our spa with treatments such as facial radiofrequency, hydrodermabrasion, and invigorating body massages. Rejuvenate with modern facilities tailored to your needs.",
  "images": [
    spa1, spa2
  ]
}

