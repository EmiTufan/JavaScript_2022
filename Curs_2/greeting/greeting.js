document.write("<center><font size=+30 style='color: green;'>");
var ziua = new Date();
var ora = ziua.getHours();




if (ora < 12) {
    document.write("Buna dimineata");
} else if (ora == 12) {
    document.write("Pofta buna");
} else if (ora >= 12 && ora <= 17) {
    document.write("Buna ziua!");
} else{
    document.write("Buna seara");
}

