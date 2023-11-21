---
sidebar_position: 2
---

### Ethereum Node Image

Contabo's Ethereum Node image is based on the Eth-docker (https://eth-docker.net/)

The image contain every required dependency to start your Eth-docker setup

### Switch to Ethereum user

For accessing ethd command you should switch to ethereum user, which is created for security reasons.

```sudo -u ethereum -i```

### Start Eth-Docker config:

```ethd config```

Recommended consensus/execution clients:

- **Geth/Lighthouse** (Best performance)
- **Nethermind/Lighthouse** (Best performance)
- Geth/Teku
- Nethermind/Teku


### Start Eth-Docker:

```ethd up```

### Official Eth-Docker documentation:

Further steps and maintenance please read the official documentation: 

- https://eth-docker.net/