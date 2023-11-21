---
sidebar_position: 3
---

### IPFS Node Image

Contabo's IPFS Node image is based on the latest Kubo Client Docker image (https://github.com/ipfs/kubo)

### Switch to IPFS user

For accessing ipfs command you should switch to ipfs user, which is created for security reasons.

````sudo -u ipfs -i````

### Retrieve IPFS version:

````ipfs version````

Output (example): `ipfs version 0.22.0`

### File paths:

Staging folder: `/var/lib/ipfs/staging/`

Data folder: `/var/lib/ipfs/data/`

### Docker commands:

Retrieve docker containers:

`docker ps`

Read container logs:

`docker logs ipfs_host`

### Kubo documentation:

- https://docs.ipfs.tech/install/run-ipfs-inside-docker/