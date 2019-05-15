FROM ubuntu:18.04

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

RUN apt-get update && \
    apt-get install -y software-properties-common

RUN add-apt-repository -y ppa:ondrej/apache2 && \
    apt-get update && \
    apt-get install -y apache2 curl nano

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

COPY . /tmp/ui

WORKDIR /tmp/ui
RUN npm ci && npm run build

RUN cp -r dist/* /var/www/html && rm -rf /tmp/ui

RUN a2enmod ssl vhost_alias http2 headers rewrite socache_shmcb
RUN a2dismod deflate -f

COPY docker-files/000-default.conf /etc/apache2/sites-enabled/
COPY docker-files/certs/server.crt /etc/ssl/certs/server.crt
COPY docker-files/certs/server.key /etc/ssl/private/server.key
COPY docker-files/certs/ca-bundle.crt /etc/apache2/ssl.crt/ca-bundle.crt

EXPOSE 80 443

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
