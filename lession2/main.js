class Animal{
  constructor(name){
    this.name =name ;
  }
  eat (){
    console.log('eating...');
  }
}
class Bird extends Animal{
  fly(){
    console.log('Flying...')
  }
}
const bird = new Bird('Thông');
bird.fly();