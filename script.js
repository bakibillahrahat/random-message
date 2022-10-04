const randomMessage = () => {
    let messagess = ["Be yourself; everyone else is already taken.","So many books, so little time","A room without books is like a body without a soul.","You only live once, but if you do it right, once is enough.","Be the change that you wish to see in the world.","If you tell the truth, you don't have to remember anything."];
    for(let i = 0; i < messagess.length; i++){
        let randIndex = Math.floor(Math.random() * messagess.length);
        return messagess[randIndex];
    }
}
 console.log(randomMessage());