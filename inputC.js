//XSF: Frontend Developer Test
//Pt.1 Basic JS, CSS
//กำหนด input ที่รับเข้ามา

// C

// รับ รับ input name ,age 
const input = [
    { name: "A", age: "30" },
    { name: "B", age: "9" },
    { name: "C", age: "20" },
    { name: "D", age: "18" },
    { name: "E", age: "11" },
    { name: "F", age: "60" },
    { name: "G", age: "27" },
    { name: "H", age: "90" },
    { name: "I", age: "21" },
    { name: "J", age: "12" }
];

const output = Format(input);
console.log(output);

function Format(input) {
    const output = input
        .sort((a, b) => parseInt(a.age) - parseInt(b.age))  // เรียงลำดับ age น้อยไปมาก
        .map(item => item.name)  // สร้างอาเรย์ใหม่ที่มีชื่อเพียงอย่างเดียว
        .filter(name => !["E", "C", "F", "H"].includes(name));  // กรองชื่อที่ไม่อยู่ในนี้
    return output;
}




// 'B', 'E', 'J', 'D',
//  'C', 'I', 'G', 'A',
//  'F', 'H'
// b j d i g a
//9 *11 12 18 *20 21 27 30 60 90
//9 12 18 21 27 30