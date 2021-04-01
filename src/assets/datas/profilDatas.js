// import vsCode from '../../assets/imgs/previews/mouse.jpg';
// import html from '../../assets/imgs/previews/mouse.jpg';
// import photoshop from '../../assets/imgs/previews/mouse.jpg';
// import illustrator from '../../assets/imgs/previews/mouse.jpg';
// import adobeXD from '../../assets/imgs/previews/mouse.jpg';

import Planete from '../icons/earthIcon.svg';
import Des from '../icons/dicesIcon.svg';
 
const profilDatas =
[
    {
        categoryName: "skills",
        skills:
        [
            {
                id: "uxdesign",
                title : "Design U.X.",
                description :
                [
                    "Benchmark",
                    "Persona",
                    "Rush Papier",
                    "User Flow",
                    "Prototypage Mobile Et Desktop"
                ]
            }
        ]
    },
    
    {
        categoryName: "skills",
        skills:
        [
            {
                id: "uidesign",
                title : "Design U.I.",
                description :
                [
                    "Colorimétrie",
                    "Typographie",
                    "Mise En Page",
                    "Mood Board",
                    "Charte Graphique",
                    "Mock-Up"
                ]
            }
        ]
    },
    
    {
        categoryName: "skills",
        skills:
        [
            {
                id: "fdev",
                title : "Développement front-end",
                description :
                [
                    "HTML",
                    "CSS",
                    "Javascript",
                    "React JS",
                    "React Native",
                    "Wordpress",
                ]
            }
        ]
    },

    {
        categoryName: "skills",
        skills:
        [
            {
                id: "bdev",
                title : "Développement back-end",
                description :
                [
                    "Node JS",
                    "Express",
                    "PHP",
                    "Formation en cours..."
                ]
            }
        ]
    },

    {
        id: "historic02",
        categoryName: "myhistory",
        myhistory :
        [
            {
                id: "parc",
                year: "2014",
                descriptionName: "Opératrice de Parc d’attraction (1\u00a0an)",
                descriptionPlace: "St Paul _ Oise"
            },
    
            {
                id: "3d",
                year: "2017",
                descriptionName: "Formation Infographiste Effets Spéciaux 3D (3\u00a0ans)",
                descriptionPlace: "Mons _ Belgique"
            },
    
            {
                id: "design",
                year: "2019",
                descriptionName: "Formation bac+2",
                description: "Web Designer UX\u00a0_\u00a0UI\u00a0_\u00a0Intégration",
                descriptionPlace: "Beauvais _ Oise"
            },
    
            {
                id: "stage1",
                year: "2019",
                descriptionName: "Stage Web Designer",
                description: "chez J-S QUETTIER (4\u00a0mois)",
                descriptionPlace: "Beauvais _ Oise"
            },
    
            {
                id: "stage2",
                year: "2019",
                descriptionName: "Stage et réalisation du site internet pour DESIM (5\u00a0mois)",
                descriptionPlace: "Ivry sur seine"
            },
    
            {
                id: "iacess",
                year: "2020",
                descriptionName: "Réalisation du site internet pour l'association IACESS",
                descriptionPlace: "Paris _ Ile de France"
            },
    
            {
                id: "autoEntrepreneur",
                year: "2020",
                descriptionName: "Création de statut auto-entrepreneur",
                descriptionPlace: "Beauvais _ Oise"
            },
    
            {
                id: "tctChalls",
                year: "2020 - Actuellement",
                descriptionName: "Participation aux challenges The Cacatoes Theory",
                descriptionPlace: "En ligne"
            },
    
            {
                id: "pwm",
                year: "Actuellement",
                descriptionName: "Formation Programmeur Web et Web-mobile",
                descriptionPlace: "Beauvais _ Oise"
            },
        ]
    },

    {
        id: "hobbies03",
        categoryName: "Hobbies",
        myhobbies :
        [
            {
                id: "meetings",
                icon: Planete,
                kind: "Rencontre internationale d’ordre culturel. Particulièrement culture asiatique (Corée du Sud)"
            },
    
            {
                id: "games",
                icon: Des,
                kind: "Jeux de société, jeux de rôle et énigmes"
            }
        ]
    }
]

export default profilDatas;