---
sidebar_position: 6
---

# Goofys

:::danger Filesystem Caveats
Please note that that a mounted Object Storage bucket doesn't always behave like a normal POSIX file system. Depending on how your application is accessing files, you may encounter issues like:

* no/wrong file system usage statistics
* sub-par performance
* unexpected unmounts
* duplicate writes leading to hidden objects that occupy space but are invisible to S3 API requests

If possible, using other tools like [rclone](/docs/products/Object-Storage/Tools/rclone) to access Object Storage is recommended.
:::

[Goofys](https://github.com/kahing/goofys) is another S3 file system tool for Linux and macOS. It provides the same functionality as [s3fs-fuse](/docs/products/Object-Storage/Tools/s3fs-fuse) but with better performance.

Please follow the installation instruction like described on [Installation](https://github.com/kahing/goofys#installation)

On Linux systems, make sure package `fuse-utils` is installed and run:

```bash
wget https://github.com/kahing/goofys/releases/latest/download/goofys
sudo install goofys /usr/local/bin/
```

All you will need is:

* `access_key`
* `secret_key`
* Contabo's S3 URL

For `access_key`, `secret_key` and the S3 URL please check [here](/docs/products/Object-Storage/s3-connection-settings).

## Configuration

Either follow the steps from [aws-cli](/docs/products/Object-Storage/Tools/aws-cli) to configure an endpoint in `~/.aws/credentials` or create the file manually:

```conf
[default]
aws_access_key_id=82046e8110804a43bf29c1ae426a724d
aws_secret_access_key=82e69bd7a52076c527154297a76c2233
```

## Example

```bash
# create mount point
mkdir ${HOME}/foo
# mount bucket foo to ${HOME}/foo
goofys --endpoint="https://eu2.contabostorage.com" foo ${HOME}/foo

# adding an fstab entry to mount the bucket automatically at boot time
# credentials must be present in /root/.aws/credentials
sudo mkdir /mnt/foo
echo 'goofys#foo /mnt/foo fuse _netdev,allow_other,--file-mode=0666,--dir-mode=0777,--endpoint=eu2.contabostorage.com 0 0' | sudo tee -a /etc/fstab
```
