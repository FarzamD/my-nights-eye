b=window.getComputedStyle(document.body, null).getPropertyValue('background-color');
c=b.split(',');
if (c[1].includes('255') && c[2].includes('255') && c[0].includes('255')) {
    document.body.style.backgroundColor='#eee';
}
b=document.body.getElementsByTagName('iframe');
n=b.length;
for (let i = 0; i < n; i++) {
    d=window.getComputedStyle(b[i], null).getPropertyValue('background-color');
    c=d.split(',');
    c1=c[1].includes('255');
    c2=c[2].includes('255');
    c3=c[0].includes('255'); 
    if (c1 && c2 && c3) {
        b[i].style.backgroundColor='#e9e9e0';
    }
}
b=window.getComputedStyle(document.body, null).getPropertyValue('background-color');
c=b.split(',');
if (c[1].includes('255') && c[2].includes('255') && c[0].includes('255')) {
    document.body.style.backgroundColor='#eee';
}

var docdivs=document.body.getElementsByTagName('div');
n = docdivs.length;
for (var i = 0; i < n; i++) {
    b=window.getComputedStyle(docdivs[i], null).getPropertyValue('background-color');
    c=b.split(',');
    c1=c[1].includes('255');
    c2=c[2].includes('255');
    c3=c[0].includes('255'); 
    if (c1 && c2 && c3) {
        docdivs[i].style.backgroundColor='#f0f0e9';
    }
}