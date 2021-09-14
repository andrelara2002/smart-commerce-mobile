import defaultBackground from '../../../assets/image/FakeData/Background/defaultBackground.jpg'
import defaultLogo from '../../../assets/image/FakeData/Logos/defaultLogo.png'

export default FakeData = [
    {
        id: 0, title: 'Smart Commerce ',
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
        segment: 'Economia',
        image: defaultBackground,
        logo: defaultLogo,
        distance: 23000,
        products: [
            { id: 0, name: "Celular", description: "Celular", image: defaultLogo },
            { id: 1, name: "Celular", description: "Celular", image: defaultLogo },
            { id: 2, name: "Celular", description: "Celular", image: defaultLogo },
        ],
        rank: 1,
        qtdVotacoes: 10,
        logo: defaultLogo,
        distance: 23000,
    },
    { id: 1, title: 'Smart Commerce ', segment: 'Economia', image: defaultBackground, logo: defaultLogo, distance: 23000 },
    { id: 2, title: 'Smart Commerce ', segment: 'Economia', image: defaultBackground, logo: defaultLogo, distance: 23000 },
    { id: 3, title: 'Smart Commerce ', segment: 'Economia', image: defaultBackground, logo: defaultLogo, distance: 23000 },
]

export const mostVotted = [
    { id: 0, title: 'SmartCommerce', qtdVotos: '100', qtdTotalVotos: '200', image: defaultLogo },
    { id: 1, title: 'SmartCommerce', qtdVotos: '100', qtdTotalVotos: '200', image: defaultLogo },
    { id: 2, title: 'SmartCommerce', qtdVotos: '100', qtdTotalVotos: '200', image: defaultLogo },

]

export const categories = [
    { id: 0, title: "Alimentação", icon: { name: "food-apple-outline", type: "material-community" } },
    { id: 1, title: "Economia", icon: { name: "cash-usd-outline", type: "material-community" } },
    { id: 2, title: "Educação", icon: { name: "book-outline", type: "material-community" } },
]

export const companies = [
    {
        id: 0,
        name: "LLC Integer",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
        products: [
            { id: 0, name: "Celular", description: "Celular", image: defaultLogo },
            { id: 1, name: "Celular", description: "Celular", image: defaultLogo },
            { id: 2, name: "Celular", description: "Celular", image: defaultLogo },
        ],
        rank: 1,
        qtdVotacoes: 10,
        logo: defaultLogo,
        distance: 23000,
    }
]