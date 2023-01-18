FROM fedora:36

# install nginx + fancyindex module
RUN dnf -y install https://extras.getpagespeed.com/release-latest.rpm && dnf -y install nginx nginx-module-fancyindex
# add module in config
RUN sed -i '1s/^/load_module "modules\/ngx_http_fancyindex_module.so";\n/' /etc/nginx/nginx.conf
# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
