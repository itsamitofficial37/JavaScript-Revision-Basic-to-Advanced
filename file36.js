// destructuring in objects

const band ={
    bandName : "Sanam",
    favoriteSong : "Jaane woh kaise",
    year : 2016,
    favoriteArtist : "SANAM"
}

const {bandName :name, favoriteSong:song, ...restProps} = band;

// if i want to change the name of key name  
console.log(restProps);
console.log(name);
  
console.log(song);


