#!/bin/bash

response=`lsof -i -P -n | grep -E '3000.*LISTEN'`
listen='LISTEN'

if [[ "$response" == *"$listen"* ]]; then
    yarn cypress:open
else
    yarn start & yarn cypress:open
fi