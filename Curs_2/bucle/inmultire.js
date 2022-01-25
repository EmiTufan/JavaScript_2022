var i = 2;
var j = 1;
var max = 10;
document.write('<br>********************************************************<br>');
while (j<=max) {
    var message = (j+ '*' +i+ '=' + i*j + "<br>" );
    message = `${j} x ${i} = ${j*i} <br>`

    document.write(message);
    j++;
    
}


for(i=1; i<=max; i++)
{
    document.write('<br>********************************************************<br>');
    for (j =1; j<=max; j++){
        message = `${j} x ${i} = ${j*i} <br>`
        document.write(message);
    }
}
document.write('<br>********************************************************<br>');


