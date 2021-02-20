function string2color(s) {
    var isRGBA = s.includes('rgba');
    var isRGB = s.includes('rgb');
    if (isRGB) {
        c=s.split(',');
        i=c[0].substring(c[0].indexOf('(')+1) ;
        var RGB=[ parseInt(i) , parseInt(c[1]) , parseInt(c[2]) ] ;
    }
    if (isRGBA){
        RGB.push(parseInt(c[3]));
    }
    return RGB;
}
function isBright(RGB) {
    luma= 0.213*RGB[0] + 0.715*RGB[1] + 0.08*RGB[2]; 
    if (luma>225 && RGB[0]/256>0.8 && RGB[1]/256>0.8 && RGB[2]/256>0.8) {
        return true;
    }else{
        return false;
    }
}
function dimRGB(RGB,x) {
    R=RGB[0]; G=RGB[1]; B=RGB[2];
    RGBres=[0,0,0];
    a=[x,x,0.985*x];
    for (let i = 0; i < 3; i++) {
        color=RGB[i];
        if (color>55) {
            RGBres[i]= (5*color-255)*a[i]/4;
        } else {
            RGBres[i]=a[i]*color;
        }
    }
    return RGBres;
}

b=window.getComputedStyle(document.body, null).getPropertyValue('background-color');
Bcolor=string2color(b);
if (isBright(Bcolor )  ) {
    document.body.style.backgroundColor='rgb('+dimRGB(Bcolor,0.95)+')';
}else{
    console.log(Bcolor +'body was dark')
}

b=document.body.getElementsByTagName('iframe');
for (let i = 0; i < b.length; i++) {
    d=window.getComputedStyle(b[i], null).getPropertyValue('background-color');
    icolor=string2color(d);
    if (isBright(icolor)) {
        b[i].style.backgroundColor='rgb('+dimRGB(icolor,0.95)+')';
    }
}

var docdivs=document.body.getElementsByTagName('div');
for (let i = 0; i < docdivs.length; i++) {
    b=window.getComputedStyle(docdivs[i], null).getPropertyValue('background-color');
    dcolor=string2color(b);
    if (isBright(dcolor)  ) {
        docdivs[i].style.backgroundColor='rgb('+dimRGB(dcolor,0.91)+')';
    }
}