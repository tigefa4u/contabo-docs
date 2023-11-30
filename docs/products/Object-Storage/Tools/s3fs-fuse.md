---
sidebar_position: 7
---

# s3fs-fuse

:::danger Filesystem Caveats
Please note that that a mounted Object Storage bucket doesn't always behave like a normal POSIX file system. Depending on how your application is accessing files, you may encounter issues like:

* no/wrong file system usage statistics
* sub-par performance
* unexpected unmounts
* duplicate writes leading to hidden objects that occupy space but are invisible to S3 API requests

If possible, using other tools like [rclone](/docs/products/Object-Storage/Tools/rclone) to access Object Storage is recommended.
:::

Using [s3fs-fuse](https://github.com/s3fs-fuse/s3fs-fuse) you can mount a bucket of your S3 compatible Object Storage as a folder on Linux, macOS and FreeBSD machine.

Please follow the installation instruction like described on [s3fs-fuse](https://github.com/s3fs-fuse/s3fs-fuse).

In case of Debian / Ubuntu system please perform following action:

```bash
sudo apt install s3fs
```

Here the way to mount a bucket which is not reboot safe is shown. All you will need is:

* `access_key`
* `secret_key`
* Contabo's S3 URL
* your bucket name
* folder (mount point) where you want make your bucket contents available

For `access_key`, `secret_key` and the S3 URL please check [here](/docs/products/Object-Storage/s3-connection-settings).

## Example

* `access_key` = 82046e8110804a43bf29c1ae426a724d
* `secret_key` = 82e69bd7a52076c527154297a76c2233
* S3 URL = https://eu2.contabostorage.com
* bucket name = foo
* mount point = ${HOME}/foo

```bash
# create a settings file with your access_key:secret_key
echo 82046e8110804a43bf29c1ae426a724d:82e69bd7a52076c527154297a76c2233 > ${HOME}/.passwd-s3fs
chmod 600 ${HOME}/.passwd-s3fs
# create mount point
mkdir ${HOME}/foo
# mount bucket foo to ${HOME}/foo
s3fs foo ${HOME}/foo -o passwd_file=${HOME}/.passwd-s3fs -o url=https://eu2.contabostorage.com -o use_path_request_style
# access contents
ls -la ${HOME}/foo
```
