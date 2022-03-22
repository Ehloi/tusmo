document.body.style.border = "5px solid red";

A = 0;
Z = 1;
E = 2;
R = 3;
T = 4;
Y = 5;
U = 6;
I = 7;
O = 8;
P = 9;
Q = 10;
S = 11;
D = 12;
F = 13;
G = 14;
H = 15;
J = 16;
K = 17;
L = 18;
M = 19;
BACK = 20;
W = 21;
X = 22;
C = 23;
V = 24;
B = 25;
N = 26;
ENTER = 27;




var keys = document.getElementsByClassName("zutom key");
all_cells = document.getElementsByClassName("cell-content zutom");
first_letter = document.getElementsByClassName("cell-content zutom bg-sky-600")[0].firstChild.textContent;

console.log("first letter is " + first_letter);


world_lenght = all_cells.length / 6;
console.log("word length is " + world_lenght);

function keypress(key)
{
    keys[key].click();
}

keypress(O);
keypress(U);
keypress(P);
keypress(S);
keypress(ENTER);

console.log(all_cells[3].attributes);
// Itérer sur les attributs de l'élément
for(let name of all_cells[3].getAttributeNames())
{
    let value = all_cells[3].getAttribute(name);
    console.log(name, value);
}