#!/bin/bash

# To execute script:
# chmod +x create-mfe.sh
# ./create-mfe.sh <child-app-name>

# Ensure a project name is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <child-app-name>"
    exit 1
fi

CHILD_APP_NAME=$1
SCRIPTS_DIR="$(pwd)/scripts"  # Store the absolute path to scripts directory

# Ask for port and remote name
read -p "Enter the port number for $CHILD_APP_NAME (default: 3003): " PORT
read -p "Enter the remote name for $CHILD_APP_NAME (default: $CHILD_APP_NAME): " REMOTE_NAME

# Default values if not provided
PORT=${PORT:-3003}
REMOTE_NAME=${REMOTE_NAME:-$CHILD_APP_NAME}

ROOT_DIR=$(pwd)/$CHILD_APP_NAME

echo "Creating Micro-Frontend Child App: $CHILD_APP_NAME on port $PORT with remote name $REMOTE_NAME"

# Create project directory
mkdir -p $ROOT_DIR
cd $ROOT_DIR

# Import functions for project setup
source "$SCRIPTS_DIR/init-package-json.sh"
source "$SCRIPTS_DIR/init-webpack.sh"
source "$SCRIPTS_DIR/init-tailwind.sh"
source "$SCRIPTS_DIR/init-postcss.sh"
source "$SCRIPTS_DIR/init-react.sh"
source "$SCRIPTS_DIR/init-public.sh"

# Install dependencies
echo "Installing dependencies..."
npm install

echo "Micro-Frontend Child App $CHILD_APP_NAME is ready!"
echo "Run 'cd $CHILD_APP_NAME && npm start' to start development."