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
        image: "/character_images/black_panther.png"
    },
    {
        id: 3,
        name: "Black Widow",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/black_widow.png"
    },
    {
        id: 4,
        name: "Captain America",
        role: ROLES.VANGUARD,
        abilities: [],
        image: "/character_images/captain_america.png"
    },
    {
        id: 5,
        name: "Cloak & Dagger",
        role: ROLES.SPECIALIST,
        abilities: [],
        image: "/character_images/cloak_and_dagger.png"
    },
    {
        id: 6,
        name: "Doctor Strange",
        role: ROLES.VANGUARD,
        abilities: [],
        image: "/character_images/doctor_strange.png"
    },
    {
        id: 7,
        name: "Emma Frost",
        role: ROLES.VANGUARD,
        abilities: [],
        image: "/character_images/emma_frost.png"
    },
    {
        id: 8,
        name: "Groot",
        role: ROLES.VANGUARD,
        abilities: [],
        image: "/character_images/groot.png"
    },
    {
        id: 9,
        name: "Hawkeye",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/hawkeye.png"
    },
    {
        id: 10,
        name: "Hela",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/hela.png"
    },
    {
        id: 11,
        name: "Hulk",
        role: ROLES.VANGUARD,
        abilities: [],
        image: "/character_images/hulk.png"
    },
    {
        id: 12,
        name: "Human Torch",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/human_torch.png"
    },
    {
        id: 13,
        name: "Invisible Woman",
        role: ROLES.SPECIALIST,
        abilities: [],
        image: "/character_images/invisible_woman.png"
    },
    {
        id: 14,
        name: "Iron Fist",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/iron_fist.png"
    },
    {
        id: 15,
        name: "Iron Man",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/iron_man.png"
    },
    {
        id: 16,
        name: "Jeff the Land Shark",
        role: ROLES.SPECIALIST,
        abilities: [],
        image: "/character_images/jeff_the_land_shark.png"
    },
    {
        id: 17,
        name: "Loki",
        role: ROLES.SPECIALIST,
        abilities: [],
        image: "/character_images/loki.png"
    },
    {
        id: 18,
        name: "Luna Snow",
        role: ROLES.SPECIALIST,
        abilities: [],
        image: "/character_images/luna_snow.png"
    },
    {
        id: 19,
        name: "Magik",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/magik.png"
    },
    {
        id: 20,
        name: "Magneto",
        role: ROLES.VANGUARD,
        abilities: [],
        image: "/character_images/magneto.png"
    },
    {
        id: 21,
        name: "Mantis",
        role: ROLES.SPECIALIST,
        abilities: [],
        image: "/character_images/mantis.png"
    },
    {
        id: 22,
        name: "Mister Fantastic",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/mister_fantastic.png"
    },
    {
        id: 23,
        name: "Moon Knight",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/moon_knight.png"
    },
    {
        id: 24,
        name: "Namor",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/namor.png"
    },
    {
        id: 25,
        name: "Peni Parker",
        role: ROLES.VANGUARD,
        abilities: [],
        image: "/character_images/peni_parker.png"
    },
    {
        id: 26,
        name: "Psylocke",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/psylocke.png"
    },
    {
        id: 27,
        name: "The Punisher",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/the_punisher.png"
    },
    {
        id: 28,
        name: "Rocket Raccoon",
        role: ROLES.SPECIALIST,
        abilities: [],
        image: "/character_images/rocket_raccoon.png"
    },
    {
        id: 29,
        name: "Scarlet Witch",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/scarlet_witch.png"
    },
    {
        id: 30,
        name: "Spider-Man",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/spider_man.png"
    },
    {
        id: 31,
        name: "Squirrel Girl",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/squirrel_girl.png"
    },
    {
        id: 32,
        name: "Star-Lord",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/star_lord.png"
    },
    {
        id: 33,
        name: "Storm",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/storm.png"
    },
    {
        id: 34,
        name: "The Thing",
        role: ROLES.VANGUARD,
        abilities: [],
        image: "/character_images/the_thing.png"
    },
    {
        id: 35,
        name: "Thor",
        role: ROLES.VANGUARD,
        abilities: [],
        image: "/character_images/thor.png"
    },
    {
        id: 36,
        name: "Venom",
        role: ROLES.VANGUARD,
        abilities: [],
        image: "/character_images/venom.png"
    },
    {
        id: 37,
        name: "Winter Soldier",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/winter_soldier.png"
    },
    {
        id: 38,
        name: "Wolverine",
        role: ROLES.DUELIST,
        abilities: [],
        image: "/character_images/wolverine.png"
    },
]