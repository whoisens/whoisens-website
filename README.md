# WhoisENS.org

<p>
    <a href="https://travis-ci.org/whoisens/whoisens-website">
        <img src="https://api.travis-ci.org/whoisens/whoisens-website.svg?branch=master" alt="Build status">
    </a>
    <a href="https://www.browserstack.com/automate/public-build/RE9PZXloT0FuUjJ6dS9XNnl1ZVlQYm9CVzlvT2F4cVVCbFhiNW9wZmlqQT0tLU1md21XdEE0WEx1MjFTbjc0d1pBQXc9PQ==--ffd224bee430fc12a69d51b2764610d2bc167d48">
        <img src='https://www.browserstack.com/automate/badge.svg?badge_key=RE9PZXloT0FuUjJ6dS9XNnl1ZVlQYm9CVzlvT2F4cVVCbFhiNW9wZmlqQT0tLU1md21XdEE0WEx1MjFTbjc0d1pBQXc9PQ==--ffd224bee430fc12a69d51b2764610d2bc167d48'/>
    </a>
    <a href="https://github.com/whoisens/whoisens-lib/blob/master/LICENSE">
        <img src="https://img.shields.io/npm/l/whoisens-lib.svg" alt="license">
    </a>
</p>

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


### Sponsors

<a href="https://www.browserstack.com">
    <img src="./tests/e2e/Browserstack-logo.svg" alt="BrowserStack" />
</a>
