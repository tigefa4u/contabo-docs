---
sidebar_position: 1
---

# Using Custom Images

Custom Images are images to be used to install Cloud VPS or VDS. These Custom Images are not provided by Contabo but are provided by the customer. Please note that a paid addon is required to upload and use Custom Images. It allows you to upload up to 25 GB of Custom Images (which can be extended of course).

:::warning Limits
The maximum supported image size is 100 GB. Images exceeding 100 GB will fail to install on a Cloud VPS or VDS.
:::

:::note Intended Use of Custom Images
Please note that the **only** usage of Custom Images is to **install** Cloud VPS or VDS with a new operating system.

It is not about to create snapshots of existing Cloud VPS or VDS. Please use the snapshot feature for that purpose.
:::

By using Custom Image you can for example use operating systems or Linux distributions or even versions not offered out of the box by Contabo. For more advanced users it also possible to create images on their own which do have different configuration and installation without the need to do the installation process and thus shorten the time for the Cloud VPS or VDS to become operational.

## Supported Formats?

Supported formats are `ISO` and `QCOW2`. The qcow2 images can be internally compressed, i.e. compressing qcow2 images as an archive like `image.qcow2.gz` or the like is **not** supported.

Please note that `ISO` formats should be seen as installation CDs/DVDs/Bluerays/bootable USB flash drives. They need to be bootable and contain an operating system installer. Thus `ISO` images are mounted and used to install the operating system on the hard disk of the Cloud VPS or VDS.

`QCOW2` images are like a bootable copy of a hard disk where the operating system and other software is already installed. Thus the copy of those images _become_ the hard disk of the Cloud VPS or VDS.

Please be aware that the system will check if an image is either `ISO` or `QCOW2` image. Having file endings being `.iso` or `.qcow2` images is not sufficient. You can easily verify it by downloading the image  or having it available locally on your computer and exectute (for Linux/BSD/Mac only) `file <name of the image>`.

E.g. for and alpine ISO image and a debian qcow2 image the following results are fine:

```sh
file alpine-virt-3.16.0-x86_64.iso
alpine-virt-3.16.0-x86_64.iso: ISO 9660 CD-ROM filesystem data (DOS/MBR boot sector) 'alpine-virt 3.16.0 x86_64' (bootable)

file debian-11-generic-amd64-20210814-734.qcow2
debian-11-generic-amd64-20210814-734.qcow2: QEMU QCOW2 Image (v3), 2147483648 bytes
```

## Supported Operating Systems

The Custom Image must use the `x86-64` (aka `amd64`) architecture and must include support for VirtIO drivers, i.e. `virtio_scsi` for the hard disk and `virtio_net` for networking.

## Adding Custom Image

For adding a Custom Image you specify a URL from which the Custom Image will be downloaded.

:::info Infos about Custom Image URLs
Please be aware that only direct links to Custom Images are supported.

* If the download of the image starts automatically by opening the URL in a browser then everything is fine.
* If however you need to click on a button or link to start the download like e.g. on Google Drive then this URL won't work.
:::

After the Custom Image is downloaded it is available for any of your Cloud VPS or VDS at any location.

## Using Custom Image on (Re-) Installation

For using your Custom Image for a Cloud VPS or VDS please make sure that the `cloud-init` toggle in the VPS/VDS overview is green. Then click on reinstallation, then a screen will appear where you can choose the Custom Image to be used.

## Special Note on Microsoft Windows

Please note that due to Microsoft license regulations no custom Windows license can be used. We strongly recommend to use our standard Windows images or at least to buy a Windows license from Contabo.

Furthermore it is very likely that custom Windows images **won't** work as they are usually missing VirtIO drivers to make the hard disk of the Cloud VPS or VDS available.