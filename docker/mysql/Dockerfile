FROM mysql:8.0
# COPY ./mysqldump.sql.gz /docker-entrypoint-initdb.d
# COPY ./mysqld.cnf /etc/mysql/mysql.conf.d/

# Set Timezone to Tokyo (GMT+9)
ENV TZ=Asia/Tokyo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 3306 
# ENTRYPOINT [ "/bin/sh", "-c", "/etc/init.d/elasticsearch start && sleep infinity"]