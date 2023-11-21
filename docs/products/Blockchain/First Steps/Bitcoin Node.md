---
sidebar_position: 1
---

### Bitcoin Node Image

Contabo's Bitcoin Node image is based on the Bitcoin Core v25.0 (https://bitcoincore.org/bin/)

The Bitcoin Image is not provided with synced chain data, the syncing start once the image installed, this can take up to 12-48h depending on the available nodes.

### Data path structure:

Chain data: `/var/lib/bitcoind`

bitcoind config: `/etc/bitcoin/bitcoin.conf`

bitcoin-cli config: `/home/bitcoin/.bitcoin/bitcoin.conf`

### Switch user for Bitcoin user:

For accessing bitcoin-cli command you should switch to bitcoin user, which is created for security reasons.

```sudo -u bitcoin -i```

### P2P Network info:

```bitcoin-cli getnetworkinfo```

Healthy response (example):

```` 
  "networkactive": true,
  "connections": 13,
  "connections_in": 3,
  "connections_out": 10,`
  ````

  
### Blockchain (sync status) info:

The syncing can take up to 48h, depending on available nodes.

```bitcoin-cli getblockchaininfo```

Healthy response:

```` 
  {
  "chain": "main",
  "blocks": 170260, <-- Highest synced block
  "headers": 813630, <-- Highest block on the network
  "bestblockhash": "0000000000000049ec54c7c6df79fce11e724b4b56103e005e03fa8e8c2a4a09",
  "difficulty": 1496978.595025569,
  "time": 1331249860,
  "mediantime": 1331245089,
  "verificationprogress": 0.002915741002688988, <---- 0.29% synced
  "initialblockdownload": true,
  "chainwork": "00000000000000000000000000000000000000000000000df7e38ad4228191c1",
  "size_on_disk": 1234406989,
  "pruned": false,
  "warnings": ""
}
  ````
* `verificationprogress` never reach 1.00 even at fully synced it will be around 0.9999....

### Check if Bitcoin Node is running:

```systemctl status  bitcoind.service```

#### Restart bitcoind server:

```systemctl restart  bitcoind.service```

### Read logs:

```tail -n 100  /var/lib/bitcoind/debug.log```	

### Edit bitcoind config file:

```nano /etc/bitcoin/bitcoin.conf```

* Restart your node to apply new configurations

### Data directory of bitcoin service:

```/var/lib/bitcoind```

### Activate firewall:
Better to do this step at the beginning to avoid problems later on, and risk that your are closing yourself out!

```
sudo apt install ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh # If you're using SSH
sudo ufw allow 8333 # Allows Bitcoin network connections
sudo ufw enable

Extra rules:
sudo ufw allow 8332 # For JSON-RPC for remote wallet

sudo ufw allow 28332 # Zero MQ for listening 
sudo ufw allow 28333 # Zero MQ for listening 

sudo ufw allow 8443 # Lightning Terminal

```

### Common used plugins application for Bitcoin Nodes:

BTC Payserver:
- https://docs.btcpayserver.org/

Lightning Network Node:
- https://github.com/lightningnetwork/lnd/blob/master/docs/INSTALL.md

Lightning Terminal:

- https://github.com/lightninglabs/lightning-terminal
