
 var cl=console.log;
 
 var allLinks= [...document.querySelectorAll('.tabHeading a')];
 const cards=document.querySelectorAll('.card')
 cl(allLinks);
 
 allLinks.forEach(ele =>{
	 ele.addEventListener('click',(eve) => {
		let li= eve.target;
		let getId = li.getAttribute('data-id');
		 cards.forEach(card => card.classList.remove('active'))
		document.getElementById(getId).classList.add('active')
		//remove active class from all anchor tags
		allLinks.forEach(a => a.classList.remove('active'))
		li.classList.add('active')
	 })
 })