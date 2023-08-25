// สร้าง function
function displayResults(inputText, outputs) {
    //map ค่าที่รับเข้ามา
    const output = outputs.map((output, index) => {
        //สร้างตัวอักษร A, B,  โดยที่เลข 65 คือรหัส A 
        const letter = String.fromCharCode(65 + index);
        // คืนค่า letter = a,b,c , output ที่รับเข้ามา =  questionCOutputs
        return `This is ${letter}, ${output}`;
    });
    //เว้นบรรทัด  \n join แต่ละ array 
    return output.join('\n');
}

// ตัวแรป
const questionCInput = "Input from question C";
const questionCOutputs = [
    "It correctly outputs from question C.",
    "It correctly outputs from question C."
];

// ใช้function เก็บค่าที่ได้ไว้ที่ result
const result = displayResults(questionCInput, questionCOutputs);
console.log(result)