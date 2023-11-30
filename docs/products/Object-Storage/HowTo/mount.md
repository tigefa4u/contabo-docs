---
title: Mounting S3 Object Storage Files
sidebar_position: 2
---

# Mounting S3 Object Storage Files

It is possible to mount S3 Object Storage to your VPS/VDS or personal computer. This way you can access the files and folders of your S3 Object Storage like a local drive. This makes usage more convenient.

:::danger Filesystem Caveats
Please note that that a mounted Object Storage bucket doesn't always behave like a normal POSIX file system. Depending on how your application is accessing files, you may encounter issues like:

* no/wrong file system usage statistics
* sub-par performance
* unexpected unmounts
* duplicate writes leading to hidden objects that occupy space but are invisible to S3 API requests

If possible, using other tools like [rclone](/docs/products/Object-Storage/Tools/rclone) to access Object Storage is recommended.
:::

All you will need is:

* `access_key`
* `secret_key`
* Contabo's S3 URL

For `access_key`, `secret_key` and the S3 URL please check [here](/docs/products/Object-Storage/s3-connection-settings).

#### Example values

* `access_key` = 82046e8110804a43bf29c1ae426a724d
* `secret_key` = 82e69bd7a52076c527154297a76c2233
* S3 URL = https://eu2.contabostorage.com

## Linux

:::warning rsync usage
The following parameters are recommend when transferring files via rsync to a mounted Object Storage:
`rsync -W --inplace --size-only`

This will avoid unnecessary file transfers. If this is you main use case, please also check if [rclone](/docs/products/Object-Storage/Tools/rclone) is an option for you.
:::

### goofys

For Linux [goofys](https://github.com/kahing/goofys) can be used which offers better performance than s3fs-fuse. Please follow the install instructions. In the following example we consider the mount path to be `/mnt/foo` and the bucket to be mounted `foo`. Please make sure that you set up your `~/.aws/credentials` file with the proper values.

```bash
sudo mkdir /mnt/foo
echo 'goofys#foo /mnt/foo fuse _netdev,allow_other,--file-mode=0666,--dir-mode=0777,--endpoint=eu2.contabostorage.com 0 0' | sudo tee -a /etc/fstab
```

### s3fs-fuse

For Linux [s3fs-fuse](https://github.com/s3fs-fuse/s3fs-fuse) can be used. Please follow the install instructions. In the following example we consider the mount path to be `/mnt/foo` and the bucket to be mounted `foo`

```bash
sudo echo 82046e8110804a43bf29c1ae426a724d:82e69bd7a52076c527154297a76c2233 > /etc/passwd-s3fs
sudo chmod 600 /etc/passwd-s3fs
sudo mkdir -p /mnt/foo
sudo echo "foo /mnt/foo fuse.s3fs _netdev,allow_other,use_path_request_style,url=https://eu2.contabostorage.com 0 0" >> /etc/fstab
sudo mount -a
```

## Windows

For Windows there are several tools out there. Here two ones are described.

### Air Live Drive

Please follow installation instructions from [Air Live Drive](https://www.airlivedrive.com/en/). Once installed and started please perform following steps.

1. Click on `Add Cloud Disk`. The following screen should appear ![AirLiveDrive-Add](/img/products/object-storage/howto/mount/airlivedrive-add.png)
2. Select `S3`. The following screen should appear ![AirLiveDrive-Add](/img/products/object-storage/howto/mount/airlivedrive-config.png)
3. Please specify following data
   * For `REST endpoint` the S3 URL, e.g. `https://eu2.contabostorage.com`
   * For `Access Key ID` your `access_key`, e.g. `82046e8110804a43bf29c1ae426a724d`
   * For `Secret Access Key` your `secret_key`, e.g. `82e69bd7a52076c527154297a76c2233`
   * Please check `Use Path style addressing model`
   * Click `OK`
   * Click `Connect`
4. You are done. The drive with the specified letter should show the contents of your S3 Object Storage

### Mountain Duck

Please follow installation instructions from [Mountain Duck](https://mountainduck.io/). Once installed and started please perform following steps.

1. You should see a screen like the following. If you don't see it then right click in the toolbar on the duck icon and select `Open Connection`. ![AirLiveDrive-Add](/img/products/object-storage/howto/mount/mountainduck.png)
2. Please specify following data
   * For `Server` the S3 URL without protocol, e.g. `eu2.contabostorage.com`. Please note NOT to enter with `https://`
   * For `Port` specify `443`
   * For `Access Key ID` your `access_key`, e.g. `82046e8110804a43bf29c1ae426a724d`
   * For `Secret Access Key` your `secret_key`, e.g. `82e69bd7a52076c527154297a76c2233`
   * Click `OK`
3. That's it. The drive with the specified letter should show the contents of your S3 Object Storage
