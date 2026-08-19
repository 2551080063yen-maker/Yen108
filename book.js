function openRegisterModal(obj)
{
    let id= obj.getAttribute('rel');
    let e = document.getElementById(id);
    e.classList.remove('modal-hide');
    e.classList.add('modal-show');
    // e.style.visibility='visible';
    // e.style.pacity=1;
}   
function closeModal(obj)
{
    let id = obj.getAttribute('rel');
    let e = document.getElementById(id);
    e.classList.remove('modal-show');
    e.classList.add('modal-hide');
    //e.style.visibility='hidden';
    //e.style.pacity=0;
}