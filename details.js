let images= document.querySelectorAll('.thumbs img');
for(let im of images)
    im.addEventListener('click',function()
{
    let main = document.getElementById('main-img');
    main.src = this.src;
});
function addComment()
{
    if (confirm("Ban chac chan them binh luan?")===true)
    {
        let c =document.getElementById('comment-content');
        let h=`
        <li class="comment flex">
                    <div class="col10">
                        <img src="images/user.png" alt="user"/>
                    </div>
                    <div class="col90">
                        <h4>$(c.value)</h4>
                        <p>$(new.Date()}</p>
                    </div>
                </li>
        `
    }
}