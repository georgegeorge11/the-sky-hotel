import  double1 from '../src/assets/double1.png';
import  double2 from '../src/assets/double2.png';
import  double3 from '../src/assets/double3.png';
import  single1 from '../src/assets/single1.png';
import  single2 from '../src/assets/single2.png';
import  single3 from '../src/assets/single3.png';
import  suite1 from '../src/assets/suite1.png';
import  suite2 from '../src/assets/suite2.png';
import  suite3 from '../src/assets/suite3.png';
import  suite4 from '../src/assets/suite4.png';
import  triple1 from '../src/assets/triple1.png';
import  triple2 from '../src/assets/triple2.png';
import  triple3 from '../src/assets/triple3.png';
export const bookingLists = [
  {
    "id": 1,
    "title": "Camere Single",
    "description": "240 LEI / noapte - 4 camere cu capacitate maxima de 2 persoane, 1 pat.",
    "date": "Disponibilitate: Toată luna",
    "packages": [
      { "details": "Mic dejun inclus" },
      { "details": "Acces gratuit la internet" }
    ],
    "includes": [
      "Acces la piscină",
      "Parcare gratuită",
      "Curățenie zilnică"
    ],
    "images": [
      single1,
      single2,
      single3
    ]
  },
  {
    "id": 2,
    "title": "Camere Double",
    "description": "344 LEI / noapte - 10 camere cu capacitate maxima de 3 persoane, 2 paturi.",
    "date": "Disponibilitate: Luni - Vineri",
    "packages": [
      { "details": "Mic dejun inclus" },
      { "details": "Acces la sală de fitness" }
    ],
    "includes": [
      "Acces la piscină",
      "Parcare gratuită",
      "Wi-Fi"
    ],
    "images": [
      double2,
      double3,
      double1
    ]
  },
  {
    "id": 3,
    "title": "Camere Triple",
    "description": "420 LEI / noapte - 5 camere cu capacitate maxima de 4 persoane, 2 paturi si o canapea extensibila.",
    "date": "Disponibilitate: În perioada vacanței școlare",
    "packages": [
      { "details": "Mic dejun inclus" },
      { "details": "Acces gratuit la internet" }
    ],
    "includes": [
      "Acces la piscină",
      "Parcare gratuită",
      "Curățenie zilnică",
      "Transport gratuit la aeroport"
    ],
    "images": [
      triple2,
      triple3,
      triple1
    ]
  },
  {
    "id": 4,
    "title": "Apartament",
    "description": "500 LEI / noapte - 5 apartamente cu capacitate maxima de 6 persoane, 2 paturi si o canapea extensibila.",
    "date": "Disponibilitate: Toată luna",
    "packages": [
      { "details": "Mic dejun inclus" },
      { "details": "Acces la jacuzzi privat" }
    ],
    "includes": [
      "Acces la piscină",
      "Parcare gratuită",
      "Wi-Fi",
      "Curățenie zilnică",
      "Acces la sala de fitness"
    ],
    "images": [
      suite2,
      suite3,
      suite1,
      suite4
    ]
  }
];
