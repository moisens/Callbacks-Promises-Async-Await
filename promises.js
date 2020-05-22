const posts = [
   {title: 'Post Four', body: 'This is post Four'},
   {title: 'Post Five', body: 'This is post Five'},
];

function getPosts(){
   setTimeout(() => {
      let output = '';
      posts.forEach((post, index) => {
         output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output
   }, 1000);

}

function createPost(post){
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         posts.push(post);

         const error = false;
         if(!error){
            resolve();
         }else{
            reject('Error: something went wrong');
         }

      }, 2000);
   });
   
}

//createPost({title: 'Post Six', body: 'This is post Six'})
//.then(getPosts)
//.catch(err => console.log(err));


//Async/Await
//async function init(){
//   await createPost({title: 'Post Six', body: 'This is post Six'});
//
//   getPosts();
//}
//
//init();


//Async/Await/Fetch
async function fetchUsers(){
   const res = await fetch('http://jsonplaceholder.typicode.com/users');
   const data = await res.json();

   console.log(data);
   
}
fetchUsers()



//Promise.all
//const promise1 = Promise.resolve('Hello world');
//const promise2 = 10;
//const promise3 = new Promise((resolve, reject) => 
//setTimeout(resolve, 2000, 'Goodbye'));

//const promise4 = fetch('http://jsonplaceholder.typicode.com/users')
//.then(res => res.json());

//Promise.all([promise1, promise2, promise3, promise4]).then((values => console.log(values)));