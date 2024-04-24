# js-lab-149
### Lab 149 ES6: ฟังก์ชันที่ใช้คุณสมบัติของ Spread operator
จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

```JavaScript
const array1 = [1, 2, 3, 4, 5];
const modifiedArray = modifyArray(array1);

console.log(array1); // [1, 2, 3, 4, 5]
console.log(modifiedArray); // [1, 2, 3, 16, 5]
```
