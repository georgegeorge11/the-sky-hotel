import Cristea from '../src/assets/Cristea Robert.png';
import Anton from '../src/assets/Anton Ana.png';
import Beglet from '../src/assets/Beglet Bianca.png';
import Cocea from '../src/assets/Cocea Tudor.png';
import Croitoru from '../src/assets/Croitoru Iolanda.png';
import Dima from '../src/assets/Dima Vivian.png';
import Ionescu from '../src/assets/Ionescu Timeea.png';
import Negraia from '../src/assets/Negraia Carmen.png';
import Nistor from '../src/assets/Nistor Denisa.png';
import Panfil from '../src/assets/Panfil Florin.png';
import Rusu from '../src/assets/Rusu Denisa.png';
import Sorcaru from '../src/assets/Sorcaru Andra.png';
import Stegaru from '../src/assets/Stegaru Mihaela.png';


export const organigramList = [
  {
    "name": "Cristea Robert Stefan",
    "position": "General Manager",
    "image": Cristea,
    "subordinates": [
      {
        "name": "Beglet Bianca Iulia",
        "position": "Sef contabil",
        "image": Beglet,
        "subordinates": [
          {
            "name": "Negraia Carmen Mihaela",
            "position": "Angajat departament contabilitate",
            "image": Negraia
          },
          {
            "name": "Anton Ana Maria",
            "position": "Angajat departament contabilitate",
            "image": Anton
          }
        ]
      },
      {
        "name": "Croitoru Iolanda Ioana",
        "position": "Sef resurse umane",
        "image": Croitoru,
        "subordinates": [
          {
            "name": "Ionescu Timeea Maria",
            "position": "Angajat departament resurse",
            "image": Ionescu
          }
        ]
      },
      {
        "name": "Panfil Florin Eduard",
        "position": "Sef IT",
        "image": Panfil
      },
      {
        "name": "Stegaru Doinita Mihaela",
        "position": "Sef comerciale",
        "image": Stegaru,
        "subordinates": [
          {
            "name": "Rusu Denisa Gabriela",
            "position": "Angajat departament comerciale",
            "image":Rusu
          },
          {
            "name": "Dima Vivian",
            "position": "Angajat departament comerciale",
            "image": Dima
          }
        ]
      },
      {
        "name": "Nistor Denisa Mihaela",
        "position": "Sef Marketing",
        "image": Nistor,
        "subordinates": [
          {
            "name": "Sorcaru Andra Cosmina",
            "position": "Angajat department marketing",
            "image": Sorcaru
          },
          {
            "name": "Cocea Tudor",
            "position": "Angajat department marketing",
            "image": Cocea
          }
        ]
      }
    ]
  }
];
