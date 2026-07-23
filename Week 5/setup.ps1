$ErrorActionPreference = "Stop"

Write-Host "Creating template app..."
npx -y create-react-app@latest template-app

Write-Host "Setting up Task 1..."
New-Item -ItemType Directory -Force -Path "Task1"
Copy-Item -Path "template-app" -Destination "Task1\myfirstreact" -Recurse

Write-Host "Setting up Task 2..."
New-Item -ItemType Directory -Force -Path "Task2"
Copy-Item -Path "template-app" -Destination "Task2\StudentApp" -Recurse

Write-Host "Setting up Task 3..."
New-Item -ItemType Directory -Force -Path "Task3"
Copy-Item -Path "template-app" -Destination "Task3\scorecalculatorapp" -Recurse

Write-Host "Setting up Task 4..."
New-Item -ItemType Directory -Force -Path "Task4"
Copy-Item -Path "template-app" -Destination "Task4\blogapp" -Recurse

Write-Host "Setting up Task 5..."
New-Item -ItemType Directory -Force -Path "Task5"
Copy-Item -Path "template-app" -Destination "Task5\dashboard" -Recurse

Write-Host "Cleaning up template..."
Remove-Item -Path "template-app" -Recurse -Force

Write-Host "Done!"
