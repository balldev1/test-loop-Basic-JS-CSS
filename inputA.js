//XSF: Frontend Developer Test
//Pt.1 Basic JS, CSS
//กำหนด input ที่รับเข้ามา

// A
const input = [
    { name: "Alex", tel: "0991112222", code: "xsf0001" },
    { name: "Jane", tel: "0812221234", code: "xsf0002" },
    { name: "Alex", tel: "0832214433", code: "xsf0001" },
    { name: "Alex", tel: "0991113122", code: "xsf0003" }
];

//ใช้ function format(input) console.log(output)
const output = forMat(input);
console.log(output);

// สร้าง function format รับ input 
// 
function forMat(input) {
    const output = [];
    const data = {};
    // loop foreachใน array ใช้ code เป็นคีย์ในการหาข้อมูล xsf0001 , 0002, 0003  
    // ได้code แล้วจะ loop เพือหาค่าที่ ตรงกัน name ,tel[], code 
    // 
    input.forEach(i => {
        if (!data[i.code]) {
            data[i.code] = {
                name: i.name,
                tel: [i.tel],
                code: i.code
            };
        } else {
            data[i.code].tel.push(i.tel); // เพิ่มเบอร์ เข้าไปที่ code ซ้ำกัน ใน [] 
        }
    });

    // loop object data ใน output array เพิ่ม object data ที่ได้รับมา
    for (const code in data) {
        output.push(data[code]);
    }

    return output;
}





