console.log('check')
document.getElementById('Rrange').addEventListener("input", function(){
console.log('Rrange change?');
document.getElementById('RrangeLabel').innerHTML=document.getElementById('Rrange').value;
});
document.getElementById('Grange').addEventListener("input", function(){
console.log('Grange change?');
document.getElementById('GrangeLabel').innerHTML=document.getElementById('Grange').value;
});
document.getElementById('Brange').addEventListener("input", function(){
console.log('Brange change?');
document.getElementById('BrangeLabel').innerHTML=document.getElementById('Brange').value;
});