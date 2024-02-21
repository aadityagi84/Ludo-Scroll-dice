const ludo=()=>{
  const play1=Math.floor(Math.random()*6)+1;
  const playDice1=`images/dice${play1}.png`;
  document.getElementById('check1').setAttribute('src',playDice1);
  const play2=Math.floor(Math.random()*6)+1;
  const playDice2=`images/dice${play2}.png`;
  document.getElementById('check2').setAttribute('src',playDice2);
 
  if(play1>play2){
    document.getElementById('player').innerHTML='Player 1 is won :)'
  }else  if(play1<play2){
    document.getElementById('player').innerHTML='Player 2 is won :)'
  }
  else {
    document.getElementById('player').innerHTML='Rolling Draw:)'
  }
  // inter = setInterval(user2, 60);
  
  // inter = setInterval(ludo, 60);
 
  // setTimeout(() => {
  //   clearInterval(intervalId );
  // }, 2000);
 
};
setTimeout(() => {
  clearInterval(inter);
}, 2000);



