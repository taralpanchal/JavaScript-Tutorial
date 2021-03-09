const blogPost = {
    title : 'abc',
    body : 'Blog Post',
    author : 'AK',
    views : 12,
    comments : [
        {author :'abc' , body : 'Bolg Post'},
        {author :'asd' , body : 'Bolg'},
    ],
    isLive : true
 };

function Post(title,body,author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 12;
    this.comments = [];
    this.isLive = false;
 }
 const post1 = new Post('abc','asd','aasd');
 console.log(post1);