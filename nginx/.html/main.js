// Show titles
let titles = document.getElementsByClassName('js__title');
for (let title of titles) {
	title.innerText = location.pathname;
}

// Toggle content
let toggle_blocks = document.getElementsByClassName('js__toggle_content');
for (let block of toggle_blocks) {
	if (block.dataset.pathname == location.pathname) {
		block.style.display = 'block';
	}
}

// Hide root dir in index
if (location.pathname == '/') {
	document.getElementById('js_to_prnt_dir').remove();
}

// Show table
let data = Array.from(document.querySelector('#js__listing pre').innerHTML.matchAll(/<a href="(.+(\.[\w]{2,4}|\/))">(.+)<\/a>\s+([\w-]+\s[\d:]+)\s+([\d]+[K|M]?|-)/g));
let table = document.querySelector('#js__listing_table tbody');

for (let row of data) {
	let template = document.getElementsByTagName('template')[0];
    let element = document.importNode(template.content.childNodes[1], true);
	let td_list = element.getElementsByTagName('td');

	td_list[0].getElementsByTagName('a')[0].href = row[1];
	td_list[0].getElementsByTagName('img')[0].src = '/.html/icons/'+(row[2] == '/' ? 'folder' : row[2].substr(1))+'.png';
	td_list[0].getElementsByTagName('span')[0].innerHTML = row[3];
	td_list[1].innerHTML = new Date(row[4]).toLocaleString('ru', {
		year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'
	});
	td_list[2].innerHTML = row[5];
	table.append(element);
}
document.querySelector('#js__listing').remove();