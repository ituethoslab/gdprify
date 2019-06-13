gdpr_style = document.createElement('style');
gdpr_style.innerHTML = '.gdprified {filter: blur(5px);}';
document.querySelector('body').appendChild(gdpr_style);

paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    content = p.innerText.split(' ');
    gdprified_content = content.map(w => {
	if (Math.random() > 0.2) {
	    return "<span class='gdprified'>" + w + "</span>";
	} else {
	    return w;
	}
    });
    gdprified_content = gdprified_content.join(' ')
    p.innerHTML = gdprified_content;
});
