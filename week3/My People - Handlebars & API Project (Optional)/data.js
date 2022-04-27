let dummyData = []

$.ajax({
    url: 'https://randomuser.me/api/?results=20',
    dataType: 'json',
    success: function(data) {
        for (const user of data.results) {
            if (preProcessing(user))
                dummyData.push(preProcessing(user))
        }
        renderUsers(dummyData)
    }
    });
    
function preProcessing(user) {
    if(user.id.value){
        const newUser = {}
        newUser.id = user.id.value
        newUser.name = user.name.first + " " + user.name.last
        newUser.email = user.email
        return newUser
    }
}

