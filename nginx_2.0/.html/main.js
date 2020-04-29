// By JCat
// Contacts: https://jocat.ru/

// Breadcrumbs
let breadcrumbs_el = document.querySelector('#js__breadcrumbs');
let breadcrumbs = location.pathname.split('/').filter(word => word.length > 0);

breadcrumbs_el.append(get_breadcrumbs_el('/', 'Home', breadcrumbs.length == 0));
if (breadcrumbs.length > 0) {
	let tree = '';
	breadcrumbs.forEach((link, index) => {
		tree += '/'+link;
		breadcrumbs_el.append(get_breadcrumbs_el(tree, link, index == breadcrumbs.length-1));
	});
}

function get_breadcrumbs_el(link, text, last = false) {
	el = document.createElement('li');
	el.classList.add('breadcrumb-item');
	if (last === true) {
		el.classList.add('active');
		el.innerHTML = text;
		return el;
	}
	let a = document.createElement('a');
	a.href = link;
	a.innerHTML = text;
	el.append(a);
	return el;
}

// Toggle content
for (let el of document.getElementsByClassName('js__toggle_content')) {
	if (el.dataset.pathname == location.pathname) el.style.display = 'block';
}

// Pretty table
let table = document.querySelector('table');
table.classList.add('table', 'table-hover');

let headers = ['Дата загрузки / изменения', 'Размер файла', 'Файл'];
for (let el of table.querySelector('thead').querySelector('tr').children) {
	el.children[0].innerText = headers.pop();
}

let table_body_el_list = table.querySelector('tbody').children;

for (let row of table_body_el_list) {
	let file_size = row.querySelector('.size');
	if (file_size.innerText != '-') file_size.innerText = formatFileSize(file_size.innerText);

	let file_link = row.querySelector('.link');
	let file_type = file_link.innerHTML.match(/<a href=".+?((?<=\.)\w+|\.\/|\/)"(?: title=".+")?>.+<\/a>/)[1];
	let a = file_link.children[0];
	let img = document.createElement('img');
	let img_wrap = document.createElement('span');

	if (file_type == './') {
		a.innerText = '..';
		img.src = '/.html/icons/folder-home.svg';
	} else if (file_type == '/') {
		img.src = '/.html/icons/folder.svg';
	} else if (file_type == 'jar') {
		img.src = '/.html/icons/java.svg';
	} else {
		img.src = '/.html/icons/'+file_type+'.svg';
	}
	img_wrap.prepend(img);
	a.prepend(img_wrap);
}

function formatFileSize(bytes) {
   	var k = 1024,
   		dp = 0,
       	sizes = ['Bytes', 'KB', 'MB', 'GB'],
       	i = Math.floor(Math.log(bytes) / Math.log(k));
   	return parseFloat((bytes / Math.pow(k, i)).toFixed(dp)) + ' ' + sizes[i];
}