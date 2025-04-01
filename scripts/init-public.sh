#!/bin/bash

echo "Creating public directory and index.html..."
mkdir -p public
cat <<EOF > public/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$CHILD_APP_NAME</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
EOF
