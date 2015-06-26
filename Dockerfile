FROM phusion/passenger-customizable:0.9.15
MAINTAINER 100 Shapes <paolo@100shapes.com>
# Set correct environment variables.

# ENV HOME /app
ENV VIRTUAL_HOST proto.100shapes.com

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

#   Build system and git.
RUN /pd_build/utilities.sh
RUN /pd_build/nodejs.sh

RUN apt-get update && apt-get install -y -o Dpkg::Options::="--force-confold" passenger nginx-extras

ADD package.json /home/app/

WORKDIR /home/app/

RUN npm install -g npm

RUN npm install -g webpack

RUN npm install

ADD . /home/app/

RUN webpack -p

# Enable nginx
RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default
ADD nginx.conf /etc/nginx/sites-enabled/nginx.conf

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 80
