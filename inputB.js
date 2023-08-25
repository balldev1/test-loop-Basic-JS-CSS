//XSF: Frontend Developer Test
//Pt.1 Basic JS, CSS
//กำหนด input ที่รับเข้ามา

// B
// รับ input เข้ามา มี customer , contact [{} ,] ,address
const input = {
    customer: "Xsurface",
    contact: [
        { name: "Max" },
        { name: "Mike" },
        { name: "Adam" }
    ],
    address: "Sukhumvit 62"
};

const output = Format(input);
console.log(output);

// สร้าง funtion format
function Format(input) {
    // สร้าง array ใหม่โดยใช้ contact name ,
    // แล้ว ส่งค่า customer,address เข้าไป แต่ละcontact.name
    const output = input.contact.map(contact => ({
        name: contact.name,
        customer: input.customer,
        address: input.address
    }));

    return output;
}


