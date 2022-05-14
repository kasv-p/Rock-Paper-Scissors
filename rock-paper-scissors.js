var choiceslist=['rock','paper','scissors'];
var playerScore=0;
var computerScore=0;
var player;
var computer;
window.onload= function ()
{
for (var i=0;i<3;i++)
{
  image=document.createElement('img');
  image.id=choiceslist[i];
  image.src=choiceslist[i]+'.png';
  image.addEventListener('click',scores);
  document.getElementById('choices').appendChild(image);
}
reset=document.getElementById('reset');
reset.addEventListener('click',function ()
{
window.location.reload();
})
}
function scores()
{
  you=this.id;
  player=document.getElementById('player');
  player.src=you+'.png';;

  opponent=choiceslist[Math.floor(Math.random()*3)];

  computer=document.getElementById('computer');
  computer.src=opponent+'.png';

  if (you=='rock')
  {
    if (opponent=='scissors')
    {
      playerScore+=1;
    }
    else if (opponent=='paper')
    {
      computerScore+=1;
    }
  }
  else if (you=='scissors')
  {
    if (opponent=='paper')
    {
      playerScore+=1;
    }
    else if (opponent=='rock')
    {
      computerScore+=1;
    }
  }
  else if (you=='paper')
  {
    if (opponent=='rock')
    {
      playerScore+=1;
    }
    else if (opponent=='scissors')
    {
      computerScore+=1;
    }
  }
  document.getElementById('playerscore').innerText='player score - '+playerScore.toString();
  document.getElementById('opponentscore').innerText='opponent score - '+computerScore.toString();
}
