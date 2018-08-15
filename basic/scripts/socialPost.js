
const socialPost = {
  template: `
  <section>
    <h1>Whatch You Thinking?</h1>
    <button ng-click="">New Thought</button>
    <post ng-repeat=""></post>
  </section>
  `,

  controller: function (){
      const vm = this;

      vm.postList = [];

      vm.addPost = (newPost) => {
        vm.postList.unshift(angular.copy(newPost))
      }
  }
  
}



angular
    .module("App")
    .component("socialPost", socialPost)































//------------Notes-----------------------------------------------//



// const mathStuff= {
//   template: 
//   // HTMl -----------------------------------//
//         `<input type='number'ng-model="$ctrl.numOne">
//         <input type='number' ng-model="$ctrl.numTwo">
//         <button ng-click="$ctrl.addNums($ctrl.numOne, $ctrl.numTwo)">Add stuff</button>
//         <p>{{ $ctrl.total }}</p>`,

//         controller: function () {
//           const vm = this;
//           vm.addNums = (num1, num2) => {
//             vm.total = num1 + num2;
//           }
//         } 
// };





// angular
//   .module("App")
//   .component("mathStuff", mathStuff);