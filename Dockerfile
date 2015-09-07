FROM phusion/passenger-customizable:0.9.15
MAINTAINER 100 Shapes <paolo@100shapes.com>
# Set correct environment variables.

# ENV HOME /app

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

#   Build system and git.
RUN /pd_build/utilities.sh
RUN /pd_build/python.sh
RUN /pd_build/nodejs.sh

RUN apt-get update && apt-get install -y -o Dpkg::Options::="--force-confold" passenger nginx-extras
RUN curl -sLo /usr/local/bin/ep https://github.com/kreuzwerker/envplate/releases/download/v0.0.7/ep-linux && chmod +x /usr/local/bin/ep

RUN npm install -g npm
RUN npm install -g webpack

ENV BRANCH stage
ENV GIT_URL https://github.com/100Shapes/100Shapes.com-Lithium.git
ENV API_BASE_URL http://api.100shapes.com
ENV VIRTUAL_HOST www.100shapes.com
ENV PRERENDER_TOKEN 00000000000000

RUN mkdir -p /etc/my_init.d
ADD clone-content.sh /pd_build/clone-content.sh
RUN ep /pd_build/clone-content.sh
RUN /pd_build/clone-content.sh

ADD pull-content.sh /etc/my_init.d/pull-content.sh
RUN ep /etc/my_init.d/pull-content.sh
RUN chmod u+x /etc/my_init.d/pull-content.sh

# Enable nginx
RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default
ADD nginx.conf /etc/nginx/sites-enabled/nginx.conf

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 80
