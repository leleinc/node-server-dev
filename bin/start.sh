#!/bin/sh
if [ ! -f "pid" ]
then
    node deamon.js conf/config.json &
    echo $! > pid
fi