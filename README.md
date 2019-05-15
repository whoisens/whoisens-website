# WhoisENS.org

Web service that provide Whois and ENS info about Ethereum names.


#### Development

```bash
npm ci
npm run serve
```


### Production

#### Install docker

```bash
sudo apt-get update
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
   
sudo apt-get install -y docker-ce docker-ce-cli
```

Copy SSL keys into `docker-files/certs` folder.


1. Deploy and ensure it works

```bash
npm run docker-deploy-dev
```

2. Generate archive and deploy it to server

```bash
docker save whoisens > /tmp/whoisens.tar
gzip /tmp/whoisens.tar

scp /tmp/whoisens.tar.gz root@whoisens.org:/tmp

ssh root@whoisens.org
cd /tmp
sudo docker load --input whoisens.tar.gz

sudo docker stop whoisens
docker rm whoisens
sudo docker run -dit -p 80:80 -p 443:443 --name whoisens whoisens
```

3. 

#### Debug Docker

```bash
npm run docker-debug
```
