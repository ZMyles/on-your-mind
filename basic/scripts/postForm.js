

const postForm = {
  bindings: {

  },
  template: 
  `<form>
      <h2>Title</h2>
      <input type="text" placeholder="Post title">
      <h2>Thought</h2>
      <textarea></textarea>
      <button>Add Post</button>
  </form>`
}




angular
    .module("App")
    .component("postForm", postForm)