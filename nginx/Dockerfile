FROM debian:13-slim

# install nginx + fancyindex module
RUN apt-get update && apt install nginx libnginx-mod-http-xslt-filter -y
# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD [ "nginx", "-g", "daemon off;" ]
