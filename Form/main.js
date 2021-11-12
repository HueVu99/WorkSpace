
function Validator(options){
    function validate(inputElement, rule){
         var errorElement =inputElement.parentElement.querySelector('options.errorSelector');
         var errorMessage =rule.test(inputElement.value)// bien err tra ve undefined trong truong hop k co messae
         if(errorMessage){//va tra ve mesae loi trong truong hop co loi
             errorElement.innerText = errorMessage;
             inputElement.parentElement.classList.add('invalid');
        }else{
            errorElement.innerText='';
            inputElement.parentElement.classList.remove('invalid');
       }    
    }
    //lay element cua form can validate
    var formElement = document.querySelector(options.form);
    
    if(formElement){
        options.rules.forEach(function(rule){
            var inputElement =formElement.querySelector(rule.selector);//tim input lay ra
        
            if(inputElement){
                //value: inputElement.value
                //test func:rule.test
                //Xu ly truong hop blur khoi input
              inputElement.onblur =function(){
                  validate(inputElement,rule);
              }
              //Xu ly moi khi nguoi dung nhap vao input
              inputElement.oninput =function(){
                  var errorElement =inputElement.parentElement.querySelector('options.errorSelector');
                errorElement.innerText='';
                inputElement.parentElement.classList.remove('invalid');  
              }
                }
            });
        //goi array truyen ham
        }
}
//dinh nghia rules bat buoc
//ntac rule :khi co loi tra ra messae loi
// khi hop le : k tra ra cai j (undefined)
Validator.isRequired = function(selector){
  return{// kiem tra nguoi dung nhap chua 
      selector:selector,
      test:function(value){//trim loai bo khoan cach
          return value.trim() ? undefined:'Vui long nhap truong nay'
      }
  };
}
Validator.isEmail =function(selector){
 return{//kiem tra co phai email khong
      selector:selector,
      test:function(value){
          var regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return regex.test(value)? undefined:'Truong nay phai la Email'
      }
  };
}