(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

var itemIndex = $.getUrlParam("item");
var imgName = "";
var imgName1 = "";
var imgName2 = "";
var pname = "";
var txt = ""
var txt1 = ""
var txt2 = ""
if (itemIndex == 0) {
    imgName = "../res/p00.png";
    imgName1 = "../res/p01.jpg";
    imgName2 = "../res/p02.jpg";
    pname = 'BORON OXIDE';
    txt = 'Specification: Electronic Grade, Premium Grade, Industry Grade ';
    txt1 = 'Application: Metallurgical alloy steel, ferroalloy, silicate analysis, flux, dopant for semiconductor materials, blow pipe analysis, catalyst for organic synthesis, high temperature lubricant, high quality boron glass, optical glass, heat-resistant glass and glass fiber, etc., paint Refractory additives, new material development.';
    txt2 = 'CAS#:1303-86-2';
} else if (itemIndex == 1) {
    imgName = "../res/p10.jpg";
    imgName1 = "../res/p11.jpg";
    imgName2 = "../res/p12.jpg";
    pname = 'Ferro boron alloy';
    txt = 'Specification: Low carbon, low aluminum, low silicon, low boron';
    txt1 = 'Application: Ndfeb, steel sleeve, aluminum alloy, special steel, thermal spraying,';
    txt2 = 'CAS#:11108-67-1';
} else if (itemIndex == 2) {
    imgName = "../res/p20.jpg";
    imgName1 = "../res/p21.png";
    imgName2 = "../res/p22.jpg";
    pname = 'Boron carbide (B4C）';
    txt = 'Specification: purity 99.9%, size 1.5um+';
    txt1 = 'Application: Specialty Glasses, Refractories industry, Ceramics, Glazes and enamels, Chemical reactions and Metallurgy industry, etc.';
    txt2 = 'CAS#: 12069-32-8';
} else if (itemIndex == 3) {
    imgName = "../res/p30.jpg";
    imgName1 = "../res/p31.jpg";
    imgName2 = "../res/p32.jpg";
    pname = 'Boron nitride (BN)';
    txt = 'Specification: B 43.6%，N 56.4%，spherical，nano，micron';
    txt1 = 'Application: High voltage high frequency electric and plasma arc of insulators, automatic welding, high frequency induction furnace, high temperature resistant coating materials, semiconductor solid admixture, atomic reactor structural materials, packaging materials, to prevent neutron radiation of radar transmission Windows media and rocket engine, radar antenna, rockets, lining material and plasma spray furnace combustion chamber. Packaging material that protects against neutron radiation. High speed cutting tools and drill bits for geological exploration and oil drilling. Casting and optical glass film removal agent, capacitor film aluminum plating, picture tube aluminum plating, display aluminum plating, etc. Evaporation boat, preservation aluminum plating bag, laser anti-counterfeiting aluminum plating, trademark bronzing material';
    txt2 = 'CAS#:10043-11-5';
}
$('#productInfoImg1').attr("src", imgName);
$('#productInfoImg2').attr("src", imgName1);
$('#productInfoImg3').attr("src", imgName2);
$('#productInfoName').text(pname);
$('#productInfoTxt').text(txt);
$('#productInfoTxt1').text(txt1);
$('#productInfoTxt2').text(txt2);
