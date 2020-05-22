const posts = [
   {title: 'Post One', body: 'This is post one'},
   {title: 'Post Two', body: 'This is post two'},
];

//Function that get posts (title) and displays it on the document
function getPosts(){
   setTimeout(() => {
      let output = '';
      posts.forEach((post, index) => {
         output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output
   }, 1000);

}

/*Function that create a new post. 
 *The new post is pushed in the array by calling the
 *function, and giving it an oobject.
 */
function createPost(post, callback){ //The second parameter can be called anything
   setTimeout(() => {
      posts.push(post);
      callback();
   }, 2000);
}


createPost({title: 'Post Three', body: 'This is post Three'}, getPosts);