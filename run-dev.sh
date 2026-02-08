#!/bin/bash

cd "$(dirname "$0")/celstomp" || exit 1

echo "Server running at http://localhost:8000"
echo "Press Ctrl+C to stop"

if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "Error: Python not found"
    exit 1
fi
