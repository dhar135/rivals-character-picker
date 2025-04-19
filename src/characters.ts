export interface Character {
    id: number;
    name: string;
    role: string;
    abilities: string[];
    image?: string;
}

export enum ROLES {
    VANGUARD = 'VANGUARD',
    DUELIST = 'DUELIST',
    SPECIALIST = 'SPECIALIST'
}

export const characters: Character[] = [
    {
        id: 1,
        name: "Adam Warlock",
        role: ROLES.SPECIALIST,
        abilities: [],
        image: "/character_images/adam_warlock.png"
    },
    {
        id: 2,
        name: "Black Panther",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 3,
        name: "Black Widow",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 4,
        name: "Captain America",
        role: ROLES.VANGUARD,
        abilities: [],
    },
    {
        id: 5,
        name: "Cloak & Dagger",
        role: ROLES.SPECIALIST,
        abilities: [],
    },
    {
        id: 6,
        name: "Doctor Strange",
        role: ROLES.VANGUARD,
        abilities: [],
    },
    {
        id: 7,
        name: "Emma Frost",
        role: ROLES.VANGUARD,
        abilities: [],
    },
    {
        id: 8,
        name: "Groot",
        role: ROLES.VANGUARD,
        abilities: [],
    },
    {
        id: 9,
        name: "Hawkeye",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 10,
        name: "Hela",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 11,
        name: "Hulk",
        role: ROLES.VANGUARD,
        abilities: [],
    },
    {
        id: 12,
        name: "Human Torch",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 13,
        name: "Invisible Woman",
        role: ROLES.SPECIALIST,
        abilities: [],
    },
    {
        id: 14,
        name: "Iron Fist",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 15,
        name: "Iron Man",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 16,
        name: "Jeff the Land Shark",
        role: ROLES.SPECIALIST,
        abilities: [],
    },
    {
        id: 17,
        name: "Loki",
        role: ROLES.SPECIALIST,
        abilities: [],
    },
    {
        id: 18,
        name: "Luna Snow",
        role: ROLES.SPECIALIST,
        abilities: [],
    },
    {
        id: 19,
        name: "Magik",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 20,
        name: "Magneto",
        role: ROLES.VANGUARD,
        abilities: [],
    },
    {
        id: 21,
        name: "Mantis",
        role: ROLES.SPECIALIST,
        abilities: [],
    },
    {
        id: 22,
        name: "Mister Fantastic",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 23,
        name: "Moon Knight",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 24,
        name: "Namor",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 25,
        name: "Peni Parker",
        role: ROLES.VANGUARD,
        abilities: [],
    },
    {
        id: 26,
        name: "Psylocke",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 27,
        name: "The Punisher",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 28,
        name: "Rocket Raccoon",
        role: ROLES.SPECIALIST,
        abilities: [],
    },
    {
        id: 29,
        name: "Scarlet Witch",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 30,
        name: "Spider-Man",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 31,
        name: "Squirrel Girl",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 32,
        name: "Star-Lord",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 33,
        name: "Storm",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 34,
        name: "The Thing",
        role: ROLES.VANGUARD,
        abilities: [],
    },
    {
        id: 35,
        name: "Thor",
        role: ROLES.VANGUARD,
        abilities: [],
    },
    {
        id: 36,
        name: "Venom",
        role: ROLES.VANGUARD,
        abilities: [],
    },
    {
        id: 37,
        name: "Winter Soldier",
        role: ROLES.DUELIST,
        abilities: [],
    },
    {
        id: 38,
        name: "Wolverine",
        role: ROLES.DUELIST,
        abilities: [],
    },
]