---
title: Using S3 Object Storage programatically
sidebar_position: 12
---

# How to use use S3 Object Storage in your code

:::danger No support
Please note that Contabo doesn't offer any support for coding / programming issues due to its complexity.

Following information are hints on how to achieve it, without meant to be a step by step guide.
:::

## General

The S3 Object Storage API is not documented in Contabo documentation.

* The S3 Object Storage API was defined by Amazon AWS more than 10 years ago and is maintained by them. Please refer to <https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html>
* Not all features of Amazon S3 are obvioulsy supported. Please refer to <https://docs.ceph.com/en/latest/radosgw/s3/>
* The API documented at <https://api.contabo.com/#tag/Object-Storages> is not the S3 Object Storage API. It is mainly about to purchase and enlarge the storage size. For uploading / downloading files and folders and manage buckets please use the S3 Object Storage API.
* It is in general not encouraged to perfrom the S3 Object Storage API calls directly e.g. via curl. As the S3 API is based on [HMAC](https://en.wikipedia.org/wiki/HMAC) please use S3 SDK libraries which are present for many programming language. Please refer to <https://aws.amazon.com/developer/tools/> or perform an internet search for alternatives.

### Examples

Here are some examples where the integration was made:

* [cntb](https://github.com/contabo/cntb) written in [Go](https://go.dev/) and using the [minio](https://github.com/minio/minio-go) library
* External article on [dev.to](https://dev.to/einlinuus/use-contabo-object-storage-with-nodejs-5b9l) using [NodeJS](https://nodejs.org/en/) and [Python](https://www.python.org/)
* External repository by [lucafulgenzi](https://github.com/lucafulgenzi/contabo-object-storage-api) using [SpringBoot](https://spring.io/)
* Ceph Object Gateway docs include examples for [C++](https://docs.ceph.com/en/latest/radosgw/s3/cpp/), [C#](https://docs.ceph.com/en/latest/radosgw/s3/csharp/), [Java](https://docs.ceph.com/en/latest/radosgw/s3/java/), [Perl](https://docs.ceph.com/en/latest/radosgw/s3/perl/), [PHP](https://docs.ceph.com/en/latest/radosgw/s3/php/), [Python](https://docs.ceph.com/en/latest/radosgw/s3/python/) and [Ruby](https://docs.ceph.com/en/latest/radosgw/s3/ruby/#ruby-aws-s3-examples-aws-s3-gem)

#### Python

using [boto3](https://pypi.org/project/boto3/)

```python
from os import path
import boto3
import humanize

s3 = boto3.client('s3',
                  endpoint_url='https://eu2.contabostorage.com',
                  aws_access_key_id='<your access_key here>',
                  aws_secret_access_key='<your_secret_key_here>')

# list accessible buckets
response = s3.list_buckets()
for bucket in response['Buckets']:
    print(bucket['Name'])

# list bucket contents, optionally filtered by prefix=path
bucket_name = "<bucket_name>"
response = s3.list_objects_v2(Bucket=bucket_name, Prefix='')
for file in response['Contents']:
  signed_url = s3.generate_presigned_url(ClientMethod='get_object', Params={'Bucket': bucket_name, 'Key': file['Key']})
  name = path.basename(file['Key'])
  size = humanize.naturalsize(file["Size"])
  print(name, size, signed_url)
```

using [s3fs](https://s3fs.readthedocs.io/en/latest/#s3-compatible-storage)

```python
from os import environ as env
import s3fs

fs = s3fs.S3FileSystem(
  key='<your access_key here>',
  secret=env.get('CONTABO_SECRET_KEY', '<your_secret_key_here>'),
  endpoint_url='https://eu2.contabostorage.com'
)

fs.ls('my-bucket')
# ['my-file.txt']

with fs.open('my-bucket/my-file.txt', 'rb') as f:
    print(f.read())
# b'Hello, world'
```
