# WhoisENS.org

Web service that provide Whois and ENS info about Ethereum names.


### Install (for production)

#### Install docker

1. Install [Docker CE](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce)

2. Copy SSL keys into `docker-files/certs` folder.

3. Deploy

```bash
npm run docker-deploy

# or if no Node.js installed

docker build . -t whoisens-website

docker stop whoisens-website
docker rm whoisens-website

# see env/README.md how to run on existing env
docker run -dit -p 80:80 -p 443:443 --name whoisens-website whoisens-website
```


#### Debug Docker

```bash
npm run docker-debug
```

### Install (for development)

```bash
npm ci
npm run serve
```
