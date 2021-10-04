#!/bin/bash

# Copy pages
cp templates/*.{html,css} pages/v21
cp templates/*.{html,css} pages/v22

# Install deps
cd pages/v21
npm install
cd ../..

cd pages/v22
npm install
cd ../..
