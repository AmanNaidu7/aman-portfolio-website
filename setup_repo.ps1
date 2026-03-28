$ProjectPath = "C:\Python\Projects\Upwork Portfolio\Website"
$VenvName = ".venv"
$GitHubUser = "AmanNaidu7"
$RepoName = "aman-portfolio-website"

Write-Host "Starting project setup..." -ForegroundColor Cyan

# Move to project folder
Set-Location $ProjectPath

# Create Python virtual environment if it does not exist
if (-Not (Test-Path "$ProjectPath\$VenvName")) {
    Write-Host "Creating virtual environment..." -ForegroundColor Yellow
    python -m venv $VenvName
} else {
    Write-Host "Virtual environment already exists. Skipping..." -ForegroundColor DarkYellow
}

# Activate virtual environment
Write-Host "Activating virtual environment..." -ForegroundColor Yellow
& "$ProjectPath\$VenvName\Scripts\Activate.ps1"

# Upgrade pip
Write-Host "Upgrading pip..." -ForegroundColor Yellow
python -m pip install --upgrade pip

# Create .gitignore if it does not exist
if (-Not (Test-Path "$ProjectPath\.gitignore")) {
    Write-Host "Creating .gitignore..." -ForegroundColor Yellow
@"
# Python
.venv/
__pycache__/
*.pyc

# VS Code
.vscode/

# OS
.DS_Store
Thumbs.db

# Node / Next.js
node_modules/
.next/
out/

# Environment files
.env
.env.local
.env.*.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build artifacts
dist/
build/
"@ | Set-Content "$ProjectPath\.gitignore"
} else {
    Write-Host ".gitignore already exists. Skipping..." -ForegroundColor DarkYellow
}

# Initialize git if needed
if (-Not (Test-Path "$ProjectPath\.git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
} else {
    Write-Host "Git repository already initialized. Skipping..." -ForegroundColor DarkYellow
}

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# First commit
Write-Host "Creating commit..." -ForegroundColor Yellow
git commit -m "Initial project structure and planning docs"

# Rename branch to main
Write-Host "Setting branch to main..." -ForegroundColor Yellow
git branch -M main

# Add remote if it does not exist
$RemoteCheck = git remote
if ($RemoteCheck -notcontains "origin") {
    Write-Host "Adding GitHub remote..." -ForegroundColor Yellow
    git remote add origin "https://github.com/$GitHubUser/$RepoName.git"
} else {
    Write-Host "Remote origin already exists. Skipping..." -ForegroundColor DarkYellow
}

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "Setup complete." -ForegroundColor Green