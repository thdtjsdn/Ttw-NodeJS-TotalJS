:del /q Log\B2LiNK\0\.
mkdir Log
mkdir Log\B2LiNK
mkdir Log\B2LiNK\0

:..\..\..\Development-Binary-Windows\Binary\MongoDB\3.4.10\mongod --config Config\B2LiNK\0.conf
..\..\..\Development-Binary-Windows\Binary\MongoDB\3.6.2\mongod --config Config\B2LiNK\0.conf
:..\..\..\Development-Binary-Windows\Binary\MongoDB\3.6.2\mongod --master --config Config\B2LiNK\0.conf