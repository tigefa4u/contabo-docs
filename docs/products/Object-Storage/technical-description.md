---
sidebar_position: 4
---

# Technical Description

Some more technical details to Contabo's S3 compatible Object Storage.

## Technology

We are using [Ceph](https://ceph.com/) for providing S3 compatible Object Storage.

* Virtual Hosted Buckets are not supported. Path based buckets are being used.
  so e.g. `eu2.contabostorage.com/bucketname` is used instead of `bucketname.eu2.contabostorage.com`
* Custom domain names are supported. Please check [Setup Custom Domain](/docs/products/Object-Storage/HowTo/custom-domain)
* No server side encryption yet
* Transport is encrypted via TLS

## Limits

Limitation is performed to assure good and fair performance for all users of the Object Storage system. Limitiations can be adjusted anytime depending on current usage.

* max. file size is 5 TB
* number of objects is by default limited to 3 millions per customer
* number of S3 API requests are by default limited to 250 requests / second
* every data stored has additional 3 times redundancy
* no additional backup is performed
* bandwidth is limited and regularily adjusted. The default limit is 10 MByte/s (=80 Mbit/s). Please be aware that the actual bandwith depends on various circumstances, e.g. personal internet connection speed and current load situation on Object Storage system.
* by default max. 100 buckets per customer
* if publicly shared objects are set to private, they can still be publicly available for up to one hour due to caching

## ARN (Amazon Resource Name) Format

The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) are used to specify resources like users.

In case you are e.g. building up your own policies you might have the need to specify users like e.g. [Restricting Users to Buckets](/docs/products/Object-Storage/HowTo/restricting-user-bucket)

### ARN Format for Customer (Main User)

`arn:aws:iam::<s3TenantId>:user/<customerId>`

* To get your `s3TenantId` please use `cntb get objectStorages -o=json`

Example: `arn:aws:iam::5c37e60c3ee04f1eb116c436b1afadca:user/12345`

### ARN Format for Users of Cutomer (Sub Users)

`arn:aws:iam::<s3TenantId>:user/<customerId>:<userId>`

* To get your `s3TenantId` please use `cntb get objectStorages -o=json`
* The `userId` is obtained by using `cntb get users`

Example: `arn:aws:iam::5c37e60c3ee04f1eb116c436b1afadca:user/12345:3368c22e-08da-446f-a470-1928e58457a2`
