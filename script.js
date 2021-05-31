function delPost(){
    let article = document.getElementById(`${postId}`);
    article.remove();
    document.getElementById('edit-box').style.display = "none";
    hiddenPostId.value = "";
 }

function editPost(){ 
    postImgSrc.src = editImgSrc.value;
    postTitle.innerHTML = editTitle.value;
    postText.innerHTML = editContent.value;
    document.getElementById('edit-box').style.display = "none";
    hiddenPostId.value = "";
}

function openEditBox(){
    document.getElementById('edit-box').style.display = "block";

     editImgSrc = document.getElementById("edit-img");
     editTitle = document.getElementById('edit-title');
     editContent = document.getElementById('edit-text');
     hiddenPostId = document.getElementById('hidden-post-id');
     postId = event.srcElement.id;

     postImgSrc = document.querySelector(`#${postId} img`);
     postTitle = document.querySelector(`#${postId} h3`);
     postText = document.querySelector(`#${postId} p`);

    editImgSrc.value = postImgSrc.src;
    editTitle.value = postTitle.textContent;
    editContent.value = postText.textContent;
    hiddenPostId.value = postId;

    document.getElementById('edit-cancel-btn').onclick = function(){
        document.getElementById('edit-box').style.display = "none";
    }
}

function addPost(){
    let addImgSrc = document.getElementById("add-img");
    let addTitle = document.getElementById('add-title');
    let addContent = document.getElementById('add-text');
    let randomId = Math.random().toString(36).replace('.','');

    if(addImgSrc.value == ""){
        alert("image scr must be filled out");
    }else if(addTitle.value == ""){
        alert("title must be filled out");
    }else if(addContent.value == ""){
        alert("content must be filled out");
    }
    else{
        let newPost="";
        newPost += 
        `<article class="blog-post" id="post${randomId}">
            <span class="edit-btn" id="post${randomId}" onclick=openEditBox(); >Edit</span>
            <a href="javascript:;"><img src="${addImgSrc.value}"></a>
            <a href="javascript:;"><h3>${addTitle.value}</h3></a>
            <p>${addContent.value}</p>
        </article> `
    
        //convert string to document and get nodes
        let element = new DOMParser().parseFromString(newPost, 'text/html').getElementsByClassName("blog-post")[0];
    
        blogContainer = document.getElementsByClassName('blog-container');
        blogContainer[0].insertBefore(element, blogContainer[0].childNodes[0]);

    }
    document.getElementById('add-box').style.display = "none";
}

function openAddBox(){
    document.getElementById('add-box').style.display = "block";
    document.getElementById('add-cancel-btn').onclick = function(){
        document.getElementById('add-box').style.display = "none";
    }
}

function doFirst(){
    document.getElementById("add-btn").onclick = openAddBox ;
    document.getElementById("add-save-btn").onclick = addPost;
    document.getElementsByClassName("edit-btn").onclick = openEditBox;
    document.getElementById('edit-save-btn').onclick = editPost;
    document.getElementById('edit-del-btn').onclick = delPost;
}

window.addEventListener('load',doFirst);
