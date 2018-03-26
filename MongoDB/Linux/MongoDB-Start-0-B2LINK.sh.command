#!/bin/sh
cd $(dirname $0)

echo "Kill process..."
pid=`lsof -i TCP:50345 | awk '/LISTEN/ {print $2}'`
if test -z "$pid"
then
	echo "Not running process!"
else
	echo "pid=$pid"
	kill -9 $pid
	echo "Kill process complete!"
fi

#echo "Remove log files..."
#rm -rf ./Log/B2LiNK/0/*
#echo "Remove complete!"
mkdir -p Log/B2LiNK/0

#ulimit -n 2048 && ../../../Development-Binary-Linux-Ubuntu/Binary/MongoDB/3.4.10/mongod --port 50345 --config ./Config/B2LiNK/0.conf
ulimit -n 2048 && ../../../Development-Binary-Linux-Ubuntu/Binary/MongoDB/3.6.2/mongod --port 50345 --config ./Config/B2LiNK/0.conf
