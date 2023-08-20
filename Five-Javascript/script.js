const ilk_degisken = "Selam";
let ikinci_degisken = "";

ikinci_degisken = "Canberk";

ikinci_degisken ="Beren";

console.log(ilk_degisken);

const numberType = -5.358;
//console.log(typeof numberType);

console.log(numberType.toFixed(1));

const boolean_type = true; // veya false

const arrayType = ["selam", "dunya", 5,10,10.55,"selam2",true]

arrayType.push("yeni eleman")

console.log(arrayType);

const objectType = {

    firstName: "Canberk",
    lastName: "Beren",
    age: 25,

}


let student_name = objectType.firstName;
console.log("Ogrencinin ismi: ",student_name);

console.log(objectType)


const all_students = [
    {
        firstName: "Ahmet",
        lastName: "Yilmaz",
        age: 30,
        grades:{
            math:100,
            chem:80,
            phy:85,
        }
    },
    {
        firstName: "Ayse",
        lastName: "Yildirim",
        age: 35,
        grades:{
            turkce:100,
            sosyal:75,
        }
    }
]

all_students.map(student => console.log("ogrenci",student.lastName))

const filtered_student = all_students.filter(a => a.age > 30).map(a => console.log("Ogrenci nin yasi:",a.age))


//const findedIndex = all_students.findIndex(b => b.age == 35) şartı sağlayan ilk elemanı bulup getirir.


const finded = all_students.findIndex(b => b.age == 35)
console.log("yasi 35 olan ogrenci",finded)

let age_number = 15;

switch(age_number){
    case 15:
        console.log("Yas 15");
        break;
    case 12:
        console.log("Yas 12");
        break;
    case 13:
        console.log("Yas 13");
        break;
    case 14:
        console.log("Yas 14");
        break;
    default:
    console.log("Hicbiri degil");
}

/* ^^^^^^^^^^^^^^^^^^DONGULER & LOOPS ^^^^^^^^^^^^^^^^^*/

/*const new_array = [40,35,50];
new_array.forEach(sayi => console.log("su anki sayi:",sayi));/* BİRİNCİ VERSİYON ESKİ */

const new_array = [40,35,50];
new_array.forEach((sayi, index) => {
    console.log("su anki sayi:",sayi);          // İKİNCİ VERSİYON
    console.log("bu sayi nin indexi:",index);
});


//FOR DONGUSU 

for(let i=5; i < 20; i++ ){
    console.log("mevcut iterasiyon: ", i)
}

console.log("################################")

//WHILE DONGUSU 

let i = 0;

while(i < 5){
    i++;
    console.log("i degeri 5 ten kucuk: ", i)
}

console.log("################################")

// DO WHILE DONGU

let x = 15;
do {
    x ++;
    console.log("x degeri 5 ten büyük: ", x)     /// oldukca az kullanılır genelde.
} while(x < 5);

/*##########FONKSIYONLAR##############*/

console.log("################################")

let sayac = 55;

function sayacGuncelle(yeni_deger){
    sayac = yeni_deger;
    console.log("Sayaci guncel degeri: ", sayac);
}

sayacGuncelle(25);


let new_array2 = [];

function yeniSayilar(){
    let y = 0;

    while (y <= 5) 
    {
        new_array2.push(y);
        y++;
    }
console.log(new_array2)
}
yeniSayilar();






























