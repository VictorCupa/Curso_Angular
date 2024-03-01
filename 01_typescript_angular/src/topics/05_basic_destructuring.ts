/***aqui esta creada la interfaz del objeto auido player */
interface AudioPlayer{
    audioVolumen: number;
    sonsDuration: number;
    song:string;
    detail:Detail;
}
/****aque esta creada la interface de detail */
interface Detail{
    author:string;
    year:number;
}

const audioPlayer: AudioPlayer ={
    audioVolumen:50,
    sonsDuration: 36,
    song: "Mess",
    detail: {
        author: 'xccxxx',
        year: 2024,
    }
}
// const song= 'new song';
// const {song:anotherSong}=audioPlayer;
// const {sonsDuration}=audioPlayer;
// const {author}=audioPlayer.detail;
// const {year}=audioPlayer.detail;
// console.log(`song: ${anotherSong}`);
// console.log(sonsDuration);
// console.log(author);
// console.log('año de lanzamiento: ', year );


const [ , ,Gohan='not found']:string[] =['Goku', 'Vegeta','Trunks']

// console.table(dbz);
// console.log(`el segundo personaje de dbz es: ${dbz[1]}`)

console.error('personaje 3: ',Gohan)

export{}