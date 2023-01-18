dev-apache:
	docker run --rm -dit --name dev-apache -p 8080:80 -v $(PWD)/apache/site:/usr/local/apache2/htdocs/ -v $(PWD)/apache/my-httpd.conf:/usr/local/apache2/conf/httpd.conf httpd:2.4

dev-apache-stop:
	docker stop dev-apache

dev-nginx:
	docker run --rm -d --name dev-nginx -p 8081:80 -v $(PWD)/nginx/site:/usr/share/nginx/html:ro -v $(PWD)/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro nginx

dev-nginx-stop:
	docker stop dev-nginx

dev-nginx-fancyindex-prepare:
	docker build -t nginx-fancyindex nginx-fancyindex

dev-nginx-fancyindex: dev-nginx-fancyindex-prepare
	docker run --rm -d --name dev-nginx-fancyindex -p 8082:80 -v $(PWD)/nginx-fancyindex/site:/usr/share/nginx/html:ro -v $(PWD)/nginx-fancyindex/default.conf:/etc/nginx/conf.d/default.conf:ro nginx-fancyindex

dev-nginx-fancyindex-stop:
	docker stop dev-nginx-fancyindex
