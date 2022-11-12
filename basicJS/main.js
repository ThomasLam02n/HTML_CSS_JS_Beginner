
var result = NaN || undefined || false;
// console.log(result);

//Bước 1: Tất cả các giá trị của result không nằm trong bản 6 giá trị false
//Bước 2: Nó sẽ dò từng giá trị, nếu giá trị đầu tiên ko nằm trong bảng 6
//        giá trị false thì sẽ dò tiếp
//Bước 3: Cuối cùng nó sẽ chọn giá trị mà nằm trong bản 6 giá trị false để
//        gán vào result và kết thúc dò - Trường hợp nếu không có bất kỳ giá trị
//        nào false thì nó sẽ gán giá trị cuối cùng vào result 

if (result) {
    console.log('DIEU KIEN DUNG');
}else{
    console.log('DIEU KIEN SAI');
}