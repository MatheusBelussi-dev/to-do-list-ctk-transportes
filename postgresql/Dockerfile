FROM postgres:alpine

ADD /postgresql/seed/1_schema.sql /docker-entrypoint-initdb.d


RUN chmod a+r /docker-entrypoint-initdb.d/*