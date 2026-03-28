$ProjectPath = "C:\Python\Projects\Upwork Portfolio\Website"
$VenvName = ".venv"
$GitHubUser = "AmanNaidu7"
$RepoName = "aman-portfolio-website"
$BranchName = "main"

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

# Ensure branch name
Write-Host "Setting branch to $BranchName..." -ForegroundColor Yellow
git branch -M $BranchName

# Add remote if it does not exist
$RemoteUrl = "https://github.com/$GitHubUser/$RepoName.git"
$RemoteCheck = git remote

if ($RemoteCheck -notcontains "origin") {
    Write-Host "Adding GitHub remote..." -ForegroundColor Yellow
    git remote add origin $RemoteUrl
} else {
    Write-Host "Remote origin already exists. Skipping..." -ForegroundColor DarkYellow
}

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Commit only if there is something to commit
$HasChanges = git status --porcelain
if ($HasChanges) {
    Write-Host "Creating commit..." -ForegroundColor Yellow
    git commit -m "Initial project structure and planning docs"
} else {
    Write-Host "No changes to commit. Skipping commit..." -ForegroundColor DarkYellow
}

# Check whether remote branch exists
Write-Host "Checking remote branch state..." -ForegroundColor Yellow
git ls-remote --exit-code --heads origin $BranchName *> $null
$RemoteBranchExists = ($LASTEXITCODE -eq 0)

if ($RemoteBranchExists) {
    Write-Host "Remote branch exists. Pulling remote changes first..." -ForegroundColor Yellow
    git pull origin $BranchName --allow-unrelated-histories --no-rebase
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Pull failed. Resolve conflicts, then re-run the script." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "Remote branch does not exist yet. No pull needed." -ForegroundColor DarkYellow
}

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin $BranchName
if ($LASTEXITCODE -ne 0) {
    Write-Host "Push failed. Check GitHub auth or remote conflicts." -ForegroundColor Red
    exit 1
}

Write-Host "Setup complete." -ForegroundColor Green