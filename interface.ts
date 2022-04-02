interface player {
    name:string,
    age:number,
    salary:number,
    club:string,
    wife?:string,
    previousClub?:string[]
}
const Rakib : player = {
    name:'Rakib',
    age:23,
    salary:200000,
    club:"abahoni",
    wife: 'R Ramisa'
}

const Ratul : player = {
    name:'Ratul Mia',
    age:29,
    salary:290000,
    club:"Mohamedam",
    previousClub:['dvgd','sfguf','sgdh']
}