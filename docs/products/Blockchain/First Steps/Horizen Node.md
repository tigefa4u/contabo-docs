---
sidebar_position: 5
---

### Horizen Node Image

Contabo's Horizen Node image is based on the Zen (https://github.com/HorizenOfficial/zen)

The image contain every required dependency to setup your Horizen Node for staking.

### Switch to Horizen user

Switch to horizen user, this user was created for security reasons.

```su horizen```

### Zen-CLI commands:

P2P Network info: `zen-cli getnetworkinfo`


Request sync status: `zen-cli getblockchaininfo`


### Setting up your node for staking:

- Following commands should be executed as `root` user (or user with sudo privileges)

#### Disable Apache to avoid port conflicts
````
sudo systemctl disable apache2
sudo systemctl stop apache2
````

#### Install Certbot for SSL
````
sudo certbot certonly --preferred-chain "ISRG Root X1" --key-type rsa -n --agree-tos --register-unsafely-without-email --standalone -d $FQDN
````

#### Setup Certificates for Horizen Node
````
sudo chown -R horizen:horizen /etc/letsencrypt/

sudo chmod -R 750 /etc/letsencrypt/

sudo csplit -s -z -f /usr/local/share/ca-certificates/intermediate-cert- /etc/letsencrypt/live/$FQDN/chain.pem '/-----BEGIN CERTIFICATE-----/' '{*}' --suffix-format='%02d.crt'


sudo update-ca-certificates --fresh\
````

#### Write out the Certificates to the config file
````
echo "tlscertpath=/etc/letsencrypt/live/$FQDN/cert.pem" >> /home/horizen/.zen/zen.conf
echo "tlskeypath=/etc/letsencrypt/live/$FQDN/privkey.pem" >> /home/horizen/.zen/zen.conf

export IPV4=$(ip -4 addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}')

echo "externalip=$IPV4" >> /home/horizen/.zen/zen.conf

echo "port=9033" >> /home/horizen/.zen/zen.conf
````

#### Restart Zen node
- This step should be executed by `horizen` user then switch back to `root` user to finish the setup
````
zen-cli stop && sleep 60 && zend && sleep 30
````


### Install Node Tracker

- Nodetracker is an application which managing your staking

````
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg


NODE_MAJOR=18
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list

sudo apt-get update
sudo apt-get install nodejs -y

cd ~/ && git clone https://github.com/HorizenOfficial/nodetracker.git

cd nodetracker

````

#### Setup the Nodetracker
````
ZENCONF=/home/horizen/.zen/zen.conf ZEN_HOME=/home/horizen/.zen/zen.conf node setup.js
````

#### Start the Nodetracker (for testing)
````
ZENCONF=/home/horizen/.zen/zen.conf ZEN_HOME=/home/horizen/.zen/zen.conf node app.js
````

### Start Nodetracker with PM2 for auto-restart

````
npm install pm2@latest -g

ZENCONF=/home/horizen/.zen/zen.conf ZEN_HOME=/home/horizen/.zen/zen.conf pm2 start app.js --name nodetracker
````

### 2.4 Read logs of Nodetracker
```` 
pm2 logs nodetracker
````

### Official Horizen documentation:

- https://horizenofficial.atlassian.net/wiki/spaces/ZEN/pages/136872141/Secure+and+Super+Nodes