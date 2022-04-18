const Tweeter = function() {

    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = 3
    let commentIdCounter = 7

    const getPosts = () => {
        for (const post of posts) {
            console.log(post);
        }
    }

    const getPostIndex = postId => {
        for (const index in posts) 
            if( posts[index].id === postId )
                return index
    }

    const addPost = text => {
        let post = {}
        post['text'] = text
        post['id'] = `p${postIdCounter++}`
        post['comments'] = []

        posts.push(post)
    }

    const removePost = postID => { 
        const index = getPostIndex(postID)
        if(index)
            posts.splice((index),1)
        else
            console.log("There is no post with id " + postID); 
    }

    const addComment = (text,postID) => {
        let comment = {}
        comment['id'] = `c${commentIdCounter++}`
        comment['text'] = text

        const index = getPostIndex(postID)
        if(index)
            posts[index].comments.push(comment)
        else
            console.log("There is no post with id " + postID);
    }

    const removeCommentById = (index,commentID) => {
        for (const comment in posts[index].comments) 
            if( posts[index].comments[comment].id === commentID )
                posts[index].comments.splice(comment,1)
    }

    const removeComment = (postID, commentID) => {
        const index = getPostIndex(postID)
        if(index)
            removeCommentById(index,commentID)
        else
            console.log("There is no post with id " + postID);
    }
    
    return {getPosts:getPosts,
            addPost:addPost,
            removePost:removePost,
            addComment:addComment,
            removeComment:removeComment}

}



const tweeter = Tweeter()

//tweeter.addPost("This is my own post!")
//console.log(tweeter.getPosts())

// tweeter.removePost("p7")
// console.log(tweeter.getPosts())

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())


// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
