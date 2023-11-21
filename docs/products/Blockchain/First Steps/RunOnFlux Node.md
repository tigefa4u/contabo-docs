---
sidebar_position: 4
---

### RunOnFlux Node Image

Contabo's RunOnFlux Node image is based on the RunOnFlux multitool (https://github.com/RunOnFlux/fluxnode-multitool)

The image contain every required dependency to start your Flux Node setup

### Switch to Flux user

Switch to flux user, this user was created for security reasons.

```su flux```

### Start Flux Node config:

```cd /home/flux && ./multitoolbox.sh```

Choose Option `2 Install Fluxnode` for start (Docker is already installed)

Follow the steps this will require your Flux Node details.

### After installation useful commands:

```
📋 Pm2 Flux info => status: online, uptime: 8m restarts 0 unstable restarts 0

▶  COMMANDS TO MANAGE FLUX DAEMON.
📌 Start Flux daemon: sudo systemctl start zelcash
📌 Stop Flux daemon: sudo systemctl stop zelcash
📌 Help list: flux-cli help

▶  COMMANDS TO MANAGE BENCHMARK.
📌 Get info: fluxbench-cli  getinfo
📌 Check benchmark: fluxbench-cli  getbenchmarks
📌 Restart benchmark: fluxbench-cli  restartnodebenchmarks
📌 Stop benchmark: fluxbench-cli  stop
📌 Start benchmark: sudo systemctl restart zelcash

▶  COMMANDS TO MANAGE FLUX.
📌 Summary info: pm2 info flux
📌 Logs in real time: pm2 logs flux
📌 Stop Flux: pm2 stop flux
📌 Start Flux: pm2 start flux

▶  COMMANDS TO MANAGE WATCHDOG.
📌 Stop watchdog: pm2 stop watchdog
📌 Start watchdog: pm2 start watchdog --watch
📌 Restart watchdog: pm2 reload watchdog --watch
📌 Error logs: ~/watchdog/watchdog_error.log
📌 Logs in real time: pm2 logs watchdog

📌 IMPORTANT: After installation check 'pm2 list' if not work, type 'source /home/flux/.bashrc'

```

