const posts = [
    {
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" }
        ]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]

const removeComment = function (postId, commentId) {
    for (let post of posts) { // add let and replace in instead of  of  
        if (post.id === postId) {
            removeCommentFromPost(post, commentId);
        }
    }
}

const removeCommentFromPost = function(post, commentId){
    for (let i =0; i < post.comments.length; i++) { // add "post." in the beging
        if (post.comments[i].id === commentId) {
            post.comments.splice(commentId-1, 1); // change comment to commentId // use splice function  instead of remove
        }
    }
}

removeComment(2, 3)
console.log(posts);

// 5 bugs